//var rsa = require("./rsa.js");


var socket = io.connect("http://localhost:7777");
socket.on("connect", function(data) {
  socket.emit("join", "Hola Servidor este es el cliente :)");
});

// espera un 'thread' event, lo que actualiza mensajes nuevos. 
socket.on("thread", function(data1, data2) {
    if(data2)
    $("#thread").append("<li class='well well-sm b'>" + data1 + "</li> <div style='padding:10px'><button type='button' class='btn-danger' onclick='myFunction()'>Des-Encriptar/Encriptar</button></div><div id='dec' class='well well-sm b'>"+data2+"</div>");
  });
  
  // envia mensajes al servidor.
  $("form").submit(function() {
    var message = $("#message").val();
    socket.emit("messages", message);
    this.reset();
    return false;
  });