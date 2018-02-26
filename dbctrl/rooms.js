var fs = require("fs");
var path = require("path");

var roomDb = 'db/room.json';

function roomsRead() {
    return JSON.parse( fs.readFileSync(roomDb) ) || {data:[]};
}
function roomsWrite(rooms) {
    fs.writeFileSync( roomDb, JSON.stringify(rooms,null,"\t") );
}
function roomsFind(query) {
    var rooms = roomsRead().data;
    var result=[];
    if(!rooms) return result;
    for(let room of rooms){
        let flag = room.roomName.indexOf(query)>=0;
        flag && result.push(room);
    }
    return result;
}
function roomFind(roomName){
    var rooms = roomsRead();
    if(!rooms.data) return false;
    for(let room of rooms.data){
        if(room.roomName === roomName) return room;
    }
    return false;
};
function roomsGet(info){
    return new Promise((res,rej)=>{
        var rooms = roomsRead();
        rooms.data = rooms.data || [];
        let resData = roomsFind(info.roomName);
        res({data:resData,code:200});
    })
};
function roomsPush(info){
    return new Promise((res,rej)=>{
        var rooms = roomsRead();
        rooms.data = rooms.data || [];
        roomFind(info.roomName) && rej({data:"新建失败！房间名已存在！",code:403});
        info.roomId = new Date().getTime();
        info.members = [info.userId];
        rooms.data.push(info);
        roomsWrite(rooms);
        res({data:rooms.length,code:200})
    })
};
/*function roomsUpdate(info){
    return new Promise((res,rej)=>{
        var rooms = roomsRead();
        var room = rooms[info.roomId];
        room.password = info.password || room.password;
        room.nickname = info.nickname || room.nickname;
        roomsWrite(rooms);
        res()
    })
};
function roomsDelete(roomId){
    return new Promise((res,rej)=>{
        var rooms = roomsRead();
        delete rooms[info.roomId];
        roomsWrite(rooms);
        res()
    })
};*/
exports.get = roomsGet;
exports.push = roomsPush;
exports.roomsRead = roomsRead;
exports.roomsWrite = roomsWrite;
/*
exports.update = roomsUpdate;
exports.delete = roomsDelete;*/
