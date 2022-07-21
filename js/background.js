const socket = new WebSocket("ws://localhost:3000")

socket.addEventListener("open",(event) => {
  socket.send("Hello server")
})

socket.addEventListener("message", event=>{
console.log(">>>>>>>>>>>>>", event.data);
window.open(event.data)
})
