const path = require('path');
const url = require('url')
const { app, BrowserWindow, ipcMain, shell } = require('electron');
const { close, min } = require('./util/window-function')
const { getDriveData } = require("./util/drive-function")
const { getFolderContent, addThisPath, moveleft, moveright, getDir, getCommonFolder } = require("./util/directory-function");
const createWindow = () => {
    let window = new BrowserWindow({
        movable: true,
        width: 1000,
        height: 600,
        resizable: false,
        frame: false,
        transparent: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            preload: path.join(__dirname, '../src/utils/preload.js')
        }
    });
    window.loadURL('http://localhost:3000'); // to run the react app in dev mode
    // window.loadURL(url.format({
    //     pathname: path.join(__dirname, 'build', 'index.html'),
    //     protocol: 'file:',
    //     slashes: true
    // }));  // this is to run the static react app 
    // window.webContents.openDevTools();  // enable if you want to open the devtools in electron app
    window.on('close', () => { console.log("App closed") });
};

app.on('ready', () => {
    createWindow();
});


ipcMain.on("close-window", () => {
    let window = BrowserWindow.getFocusedWindow();
    close(window)
});

ipcMain.on("minimize-window", () => {
    let window = BrowserWindow.getFocusedWindow();
    min(window)
});

ipcMain.on("get-cwd", (event) => {
    try {
        const dir = getDir();
        event.sender.send('send-cwd', dir);
    }
    catch (err) {
        event.sender.send("error")
    }
})

ipcMain.on("add-path", (event, path) => {
    try {
        addThisPath(path)
    }
    catch (err) {
        throw err;
    }
})

ipcMain.on("get-dir-content", (event, path) => {
    try {
        const content = getFolderContent(path)
        event.sender.send('send-dir-content', content);
    } catch (err) {
        event.sender.send("error")
    }
})

ipcMain.on("open-file", (event, path) => {
    try {
        if (path) {
            shell.openPath(path)
        }
    }
    catch (err) {
        event.sender.send("error")
    }
})

ipcMain.on("move-cur", (event, dir) => {
    try {
        let newPath;
        if (dir === "left") {
            newPath = moveleft()
        }
        else if (dir === "right") {
            newPath = moveright()
        }
        event.sender.send("new-cur-path", newPath)
    }
    catch (err) {
        event.sender.send("error")
    }
})

ipcMain.on('get-common-folder', (event) => {
    try {
        event.sender.send("send-common-folder", getCommonFolder())
    }
    catch (err) {
        event.sender.send("error")
    }
})

ipcMain.on('get-drive-data', async (event) => {
    try {
        const res = await getDriveData()
        event.sender.send("send-drive-data", res);
    }
    catch (err) {
        event.sender.send("error")
    }
})
