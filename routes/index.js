var roomsCtrl = require('../dbctrl/rooms.js');
var userCtrl = require('../dbctrl/user.js');
var userRoomsCtrl = require('../dbctrl/userRooms.js');
var roomMembersCtrl = require('../dbctrl/roomMembers.js');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.params);
    res.json({"aa":"bb"});
  // res.render('index', { title: 'Express' });
});
/**
*user管理
 */
router.post('/user', function(req, res, next) {
    userCtrl.push(req.body.params)
        .then(result=>{ res.json(result) },result=>{ res.json(result) })
.catch(err=>{})
});
router.get('/user', function(req, res, next) {
    userCtrl.get(req.query)
        .then(result=>{ res.json(result) },result=>{ res.json(result) })
        .catch(err=>{})
});
/**
*room管理
 */
router.post('/rooms', function(req, res, next) {
    var params = req.body.params;
    roomsCtrl
        .push(params)
        .then(result=>{
            //新增后进行关联
            userRoomsCtrl
                .push(params)
                .then(rs=>{ res.json(rs) },rj=>{ res.json(rj) })
                .catch();
        },result=>{ res.json(result) })
        .catch(err=>{})
});
router.get('/rooms', function(req, res, next) {
    roomsCtrl.get(req.query)
        .then(result=>{ res.json(result) },result=>{ res.json(result) })
        .catch(err=>{})
});
/**
 * room中的user管理
 */
router.post('/roomMembers', function(req, res, next) {
    var params = req.body.params;
    roomMembersCtrl.push(params)
        .then(result=>{
            userRoomsCtrl
                .push(params)
                .then(rs=>{
                    res.json(rs)
                },rj=>{ res.json(rj) })
                .catch();
        },result=>{ res.json(result) })
        .catch(err=>{})
});
router.get('/roomMembers', function(req, res, next) {
    var users = [];
    roomMembersCtrl.get(req.query)
        .then(result=>{
            users = userCtrl.usersFind(result.data);
            res.json({data:users,code:200});
        },result=>{ res.json(result) })
        .catch(err=>{})
});
/**
 * user中的room管理
 */
/*router.post('/userRooms', function(req, res, next) {
    var params = req.body.params;
    userRoomsCtrl
        .push(params)
        .then(rs=>{
            roomMembersCtrl.push(params)
                .then(result=>{ res.json(result) },result=>{ res.json(result) })
                .catch(err=>{})
        },rj=>{ res.json(rj) })
        .catch();
});*/
router.get('/userRooms', function(req, res, next) {
    userRoomsCtrl.get(req.query)
        .then(result=>{ res.json(result) },result=>{ res.json(result) })
        .catch(err=>{})
});
module.exports = router;
