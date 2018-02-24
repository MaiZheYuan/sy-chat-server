var fs = require("fs");
var path = require("path");

var userDb = 'db/user.json';
function usersRead() {
    let data = fs.readFileSync(userDb,"utf-8");
    return JSON.parse(data ) || {};
}
function usersWrite(users) {
    fs.writeFileSync( userDb, JSON.stringify(users,null,"\t") );
}
function userGet(info){
    return new Promise((res,rej)=>{
        var users = usersRead();
        var user,resData;
        !users[info.userId] && rej({data:"",code:404});
        user = users[info.userId];
        user.password !== info.password
            && rej({data:"",code:403});
        resData = {username:user.username};
        res({data:resData,code:200});
    })
};
function userPush(info){
    return new Promise((res,rej)=>{
        var users = usersRead();
        users[info.userId] && rej({data:"",code:403});
        users[info.userId] = info;
        usersWrite(users);
        res({data:"",code:200})
    })
};
function userUpdate(info){
    return new Promise((res,rej)=>{
        var users = usersRead();
        var user = users[info.userId];
        user.password = info.password || user.password;
        user.nickname = info.nickname || user.nickname;
        usersWrite(users);
        res({data:"",code:200})
    })
};
function userDelete(userId){
    return new Promise((res,rej)=>{
        var users = usersRead();
        delete users[info.userId];
        usersWrite(users);
        res({data:"",code:200})
    })
};
exports.get = userGet;
exports.push = userPush;
exports.usersRead = usersRead;
exports.usersWrite = usersWrite;
// exports.update = userUpdate;
// exports.delete = userDelete;
exports.model = usersRead();