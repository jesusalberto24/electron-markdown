const { app, BrowserWindow } = require('electron');

let win = null

app.on('ready', () => {
    win = new BrowserWindow({
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile(__dirname + '/index.html');
    win.once('ready-to-show', () => {
        win.show();
        //win.webContents.openDevTools(); Muestra la consola por defecto
    });
    win.on('closed', () => {
        win = null
    });
});