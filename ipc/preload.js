const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("ipc", {
  send: (evt, message) => { ipcRenderer.send(evt, message) }
})

ipcRenderer.on("openTextGranted", (event, data) => {
  document.getElementById("text").style.display = "block"
})
