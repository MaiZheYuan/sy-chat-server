var socketio = require("socket.io");
var socketRouter = require("./route").router;

var io = null;

//启动socket.io监听
function running(server) {
    io = socketio.listen(server);
    io.on("connection", function (client) {
        client.on('disconnect', function(client){
            delete client;
        });
        client.on("clientMes", function (mes) {
            socketRouter(client,mes)
        });
    });
    return io;
}
exports["running"] = running;