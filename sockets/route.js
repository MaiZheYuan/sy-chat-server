var rooms = {};
var curClent = null;
var router = function (client, mes) {
    curClent = client;
    if (typeof routes[mes.type] === "function") routes[mes.type](mes);
};
var broadcast = function (mes) {
    var room = rooms[mes.roomId];
    for( let user in room) {
        user.emit("serverMes",mes.data)
    }
}
var routes = {
    roomJoin(mes) {
        var room = rooms[mes.roomId] || {};
        room[mes.userId] = curClent;
        broadcast(mes)
    },
    roomLeave(mes) {
        var room = rooms[mes.roomId] || {};
        room[mes.userId] = null;
        broadcast(mes)
    },
    chatTxt(mes) {
        broadcast(mes)
    },
    chatImg(mes) {
        broadcast(mes)
    },
    chatAudio(mes) {
    
    },
    chatVideo(mes) {
    
    },
}

module.exports = router;