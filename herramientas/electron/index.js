import { app, BrowserWindow } from "electron";

let mainWindow;

app.on("ready", createWindow);

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  mainWindow.loadFile("./web/index.html");
}
