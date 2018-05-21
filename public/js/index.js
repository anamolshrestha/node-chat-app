var socket = io();

socket.on('connect',function (){
    console.log('Connected to the server');

    socket.emit('createMessage',{
        from:'anamol',
        text:'Hey from cleint'
    });
});

socket.on('disconnect',function(){
    console.log('Disconnected to the server');
});

socket.on('newMessage',function(message){
    console.log(message);
});