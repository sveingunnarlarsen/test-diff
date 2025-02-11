const socket = io("/events", { transports: ["websocket"] });

socket.emit("subscribe", {
    event: "chat_update",
    data: { rooms: ["123"] },
});

modelTabData.setData([]);

socket.on("chat_update", function (data) {    
    ModelData.Add(modelTabData, JSON.parse(data));
});