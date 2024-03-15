const os = require('os')
const fs = require('fs');
const path = require('path');
const { LinkedList } = require('../class/linked-list')
const mime = require('mime-types');

const pathList = new LinkedList()

function getFileType(fileName) {
    const extension = fileName.split('.').pop().toLowerCase();
    const mimeType = mime.lookup(extension);
    return mimeType ? mimeType.split('/')[0] : 'unknown';
}

const getFolderContent = (dirpath) => {
    try {
        if (dirpath) {
            const folderArray = [];
            const files = fs.readdirSync(dirpath);
            files.forEach((file) => {
                const filePath = path.join(dirpath, file);
                try {
                    const stat = fs.statSync(filePath);
                    if (!file.startsWith('$')) {
                        const fileInfo = {
                            name: file,
                            isFile: stat.isFile(),
                            type: getFileType(file),
                            accessPermission: true,
                            absolutePath: path.join(dirpath, file)
                        };
                        folderArray.push(fileInfo);
                    }
                } catch (err) {
                    //avoid adding files or folder with access permission of false
                }
            });
            return { folders: folderArray, path: dirpath, right: pathList.isRightPossible(), left: pathList.isLeftPossible() }
        }
    } catch (err) {
        return [];
    }
};

const addThisPath = (path) => {
    pathList.add(path)
}

const getDir = () => {
    if (pathList.cur === null) {
        addThisPath("Home")
        return { path: "Home" }
    }
    return { path: pathList.getCur() }
}

const moveleft = () => {
    pathList.moveLeft()
    return { path: pathList.getCur() }
}
const moveright = () => {
    pathList.moveRight()
    return { path: pathList.getCur() }
}


const getCommonFolder = () => {
    let returnList = [];
    const oneDriveList = ['Desktop', 'Documents', 'Pictures'];
    const homedirList = ['Videos', 'Music'];

    oneDriveList.forEach(folder => {
        const curpath = path.join(os.homedir(), "OneDrive", folder);
        returnList.push({
            name: folder,
            absolutePath: curpath
        });
    });

    homedirList.forEach(folder => {
        const curpath = path.join(os.homedir(), folder);
        returnList.push({
            name: folder,
            absolutePath: curpath
        });
    });

    return returnList;
};




module.exports = {
    addThisPath: addThisPath,
    getFolderContent: getFolderContent,
    getDir: getDir,
    moveleft: moveleft,
    moveright: moveright,
    addThisPath: addThisPath,
    getCommonFolder: getCommonFolder
}