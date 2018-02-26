var socketio = require("socket.io");
var socketRouter = require("./route");

var io = null;

//启动socket.io监听
function running(server) {
    io = socketio.listen(server);
    io.on("connection", function (client) {
        client.on('disconnect', function(client){ });
        client.on("clientMes", function (client,mes) {
            socketRouter(io,mes)
        });
    });
    return io;
}
exports["running"] = running;