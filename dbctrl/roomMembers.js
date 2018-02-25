var Users = require("./user.js");
var Rooms = require("./rooms.js");

function roomFind(roomName){
    var rooms = Rooms.roomsRead();
    if(!rooms.data) return false;
    for(let room of rooms.data){
        if(room.roomName === roomName) return room;
    }
    return false;
};
function roomMembersGet(info){
    return new Promise((res,rej)=>{
        var resData = [];
        var rooms = Rooms.roomsRead();
        rooms.data = rooms.data || rej({data:resData,code:404});
        var room = roomFind(info.roomName) || rej({data:resData,code:404});
        room.members = room.members || [];
        res({data:room.members,code:200});
    })
};
function roomMembersPush(info){
    return new Promise((res,rej)=>{
        var rooms = Rooms.roomsRead();
        var room;
        rooms.data = rooms.data || rej({data:"",code:404});
        for(let item of rooms.data){
            if(item.roomName === info.roomName) { room = item };
        }
        !room && rej({data:"",code:404});
        room.roomPassword !==info.roomPassword && rej({data:"",code:403});
        room.members = room.members || [];
        room.members.indexOf(info.userId)<0 && room.members.push(info.userId);
        Rooms.roomsWrite(rooms);
        res({data:room.members.length,code:200})
    })
};
function roomMembersDelete(info){
    return new Promise((res,rej)=>{
        var rooms = Rooms.roomsRead();
        rooms.data = rooms.data || [];
        roomFind(info.roomName) && rej({data:"",code:403});
        rooms.data.push(info);
        Rooms.roomsWrite(rooms);
        res({data:rooms.length,code:200})
    })
};
exports.get = roomMembersGet;
exports.push = roomMembersPush;
// exports.update = roomsUpdate;
// exports.delete = roomMembersDelete;
