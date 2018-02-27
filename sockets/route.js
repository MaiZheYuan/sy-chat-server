var curClent = null;
var rooms = {};
var router = function (client, mes) {
    curClent = client;
    if (typeof routes[mes.type] === "function") routes[mes.type](mes);
};
var broadcast = function (mes) {
    var room = rooms[mes.roomId];
    mes.userInfo = curClent._$userInfo;
    for( var client in room) {
        room[client] && room[client].emit("serverMes",mes)
    }
};
var routes = {
    roomJoin(mes) {
        curClent._$userInfo = mes.data;
        var room = rooms[mes.roomId] || {};
        room[mes.data.userId] = curClent;
        rooms[mes.roomId] = room;
        broadcast(mes)
    },
    roomLeave(mes) {
        if(!curClent._$userInfo) return;
        var room = rooms[mes.roomId] || {};
        room[curClent._$userInfo.userId] = null;
        rooms[mes.roomId] = room;
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
};
function roomFind(roomId) {
    return rooms[roomId];
}

exports.router = router;
exports.roomFind = roomFind;