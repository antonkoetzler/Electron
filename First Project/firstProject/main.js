const { app, BrowserWindow } = require("electron")

// Function to create our window
const createWindow = () => {
  const win = new BrowserWindow({ width: 800, height: 600 })
  win.loadFile("index.html")
  win.setMenu(null) // Electron by default has a menubar, this is how we remove it
}

// Function that fires createWindow() when Electron has initialized
app.whenReady().then(createWindow)
