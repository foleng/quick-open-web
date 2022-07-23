const socket = new WebSocket("ws://localhost:3000")

socket.addEventListener("open",(event) => {
  socket.send("Hello server")
})

socket.addEventListener("message", event=>{
console.log(">>>>>>>>>>>>>", event.data);
window.open(event.data)
})


chrome.tabs.onActivated.addListener(moveToFirstPosition);

async function moveToFirstPosition(activeInfo) {
  try {
    await chrome.tabs.move(activeInfo.tabId, {index: 0});
    const tabs = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
    console.log("tabs:", tabs);  
  } catch (error) {
    if (error == 'Error: Tabs cannot be edited right now (user may be dragging a tab).') {
      setTimeout(() => moveToFirstPosition(activeInfo), 50);
    } else {
      console.error(error);
    }
  }
}

function good(params) {
  
}