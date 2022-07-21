import { io } from "./io-client.js";
const socket = io("ws://localhost:3000/", {});

socket.on("connect", () => {
    console.log(`connect ${socket.id}`);
});

socket.on("disconnect", () => {
    console.log(`disconnect`);
});

setInterval(() => {
    const start = Date.now();
    socket.emit("ping", () => {
        console.log(`pong (latency: ${Date.now() - start} ms)`);
    });
}, 1000);
