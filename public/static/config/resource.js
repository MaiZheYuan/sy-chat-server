window.SYRESOURCE= {
    chatSocket:null,
    chatSocketDisconnect(){
        this.chatSocket && this.chatSocket.disconnect();
    },
    chatSocketRoomLeave(){
        this.chatSocket && this.chatSocket.emit("clientMes",{type:"roomLeave"});
    },
    user:"/user",
    users:"/users",
    room:"/room",
    rooms:"/rooms",
    roomMembers:"/roomMembers",
    userRooms:"/userRooms",
}