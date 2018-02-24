var socketio = require("socket.io");

var io = null;
var userList = {};

//启动socket.io监听
function running(server) {
    io = socketio.listen(server);
    io.on("connection", function (client) {
        console.log("yyyyyyyyyyyyyyyyyyyyyyyyyy");
    });
    io.on("message", function (client) {
    
    });
    return io;
}
exports["running"] = running;