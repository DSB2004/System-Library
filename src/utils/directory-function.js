const { ipcRenderer } = require("electron");

const getdir = async (ipcRenderer) => {
    try {
        ipcRenderer.send('get-cwd');
        const cwd = await new Promise((resolve, reject) => {
            ipcRenderer.once('send-cwd', (event, cwd) => {
                resolve(cwd);
            });
            ipcRenderer.once('error', (event, error) => {
                reject(error)
                cwd = null;
            })
        });
        // console.log(cwd)
        return cwd;
    }
    catch (err) {
        throw err;
    }
}

const getDirContent = async (ipcRenderer, path) => {
    try {
        ipcRenderer.send("get-dir-content", path)
        const response = await new Promise((resolve, reject) => {
            ipcRenderer.once('send-dir-content', (event, response) => {
                resolve(response);
            });
            ipcRenderer.once('error', (event, error) => {
                reject(error)
                console.log("Error has occured")
                response = null;
            })
        });
        return response;
    }
    catch (err) {
        throw err;
    }
}
const openFile = async (ipcRenderer, path) => {
    try {
        ipcRenderer.send("open-file", path);
    } catch (err) {
        throw err;
    }
};

const move = async (ipcRenderer, dir) => {

    try {
        ipcRenderer.send("move-cur", dir);
        const response = await new Promise((resolve, reject) => {
            ipcRenderer.once("new-cur-path", (event, response) => {
                resolve(response);
            });
            ipcRenderer.once('error', (event, error) => {
                reject(error)
                console.log("Error has occured")
                response = null;
            })
        });
        return response;
    }
    catch (err) {
        throw err;
    }
}
const addPath = (ipcRenderer, path) => {
    try {
        ipcRenderer.send("add-path", path)
    }
    catch (err) {
        throw err;
    }
}

const getCommonFolder = async (ipcRenderer) => {
    try {
        ipcRenderer.send("get-common-folder")
        const response = await new Promise((resolve, reject) => {
            ipcRenderer.once("send-common-folder", (event, response) => { resolve(response) })
            ipcRenderer.once("error", (event, response) => reject(response))
        })
        return response;
    }
    catch (err) {
        console.log("Error has occured", err)
    }
}

const getDriveData = async (ipcRenderer) => {
    try {
        ipcRenderer.send('get-drive-data')
        const data = await new Promise((resolve, reject) => {
            ipcRenderer.on("send-drive-data", (event, data) => { resolve(data) })
            ipcRenderer.on("error", (event, data) => reject(data))
        })
        return data;
    }
    catch (err) {

    }
}
module.exports = {
    getdir: getdir,
    getDirContent: getDirContent,
    openFile: openFile,
    move: move,
    addPath: addPath,
    getCommonFolder: getCommonFolder,
    getDriveData: getDriveData
}