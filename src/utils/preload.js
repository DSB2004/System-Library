const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('ipcRenderer', ipcRenderer);
const { getdir, getDirContent, openFile, addPath, move, getCommonFolder, getDriveData } = require("./directory-function")


// to avoid page refresh
// document.addEventListener('keydown', function (event) {
//     if ((event.ctrlKey && event.key === 'r') || event.key === 'F5') {
//         event.preventDefault();
//     }
// });
// context APIs
contextBridge.exposeInMainWorld('windowfunction', {
    close: () => { ipcRenderer.send("close-window") },
    min: () => { ipcRenderer.send("minimize-window") }
})

contextBridge.exposeInMainWorld('directoryfunction', {
    getdir: () => getdir(ipcRenderer),
    getDirContent: (path) => getDirContent(ipcRenderer, path),
    openFile: (path) => openFile(ipcRenderer, path),
    move: (dir) => move(ipcRenderer, dir),
    addPath: (path) => addPath(ipcRenderer, path),
    getCommonFolder: () => getCommonFolder(ipcRenderer),
    getDriveData: () => getDriveData(ipcRenderer)
})


contextBridge.exposeInMainWorld('path', {
    welcome: () => { console.log("Welcome Mesg from preload") }
});

