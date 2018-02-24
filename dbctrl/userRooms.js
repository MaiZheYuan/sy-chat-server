var fs = require("fs");
var path = require("path");
var Users = require("./user.js");
var Rooms = require("./rooms.js");
var baseTool = require("./baseTool.js");

var userDb = 'db/user.json';
function userRoomGet(info){
    return new Promise((res,rej)=>{
        var users = Users.usersRead();
        var user,resData;
        !users[info.userId] && rej({data:"获取user中的rooms失败",code:404});
        user = users[info.userId];
        user.password !== info.password
            && rej({data:"",code:403});
        resData = user.rooms;
        res({data:resData,code:200});
    })
};
function userRoomPush(info){
    return new Promise((res,rej)=>{
        var users = Users.usersRead();
        var user;
        ( user = users[info.userId] ) && rej({data:"将room关联到user失败",code:403});
        user.rooms = baseTool.concatUnique(user.rooms || [],info.rooms);
        Users.usersWrite(users);
        res({data:user.rooms.length,code:200})
    })
};
function userRoomUpdate(info){
    return new Promise((res,rej)=>{
        var users = Users.usersRead();
        var user = users[info.userId];
        user.password = info.password || user.password;
        user.nickname = info.nickname || user.nickname;
        Users.usersWrite(users);
        res({data:"",code:200})
    })
};
function userRoomDelete(userId){
    return new Promise((res,rej)=>{
        var users = Users.usersRead();
        delete users[info.userId];
        Users.usersWrite(users);
        res({data:"",code:200})
    })
};
exports.get = userRoomGet;
exports.push = userRoomPush;
// exports.update = userUpdate;
// exports.delete = userDelete;
// exports.model = usersRead();