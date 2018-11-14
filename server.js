var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);
var rsa = require("./rsa.js");

app.get("/", function(req, res, next) {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(express.static("public"));

io.on("connection", function(client){
    console.log("Cliente conectado!");

    client.on("join", function(data){
        console.log(data);
    });

    client.on("messages", function(data) {
        console.log(data);
    
        //proceso de encriptado. 
        var n = rsa.find_n();
        //console.log("n: "+ n)
        var e = rsa.find_e(n[0],n[1]);
        //console.log("e: "+e);
        var frase = [];
        var asciichar = "";
        for(var i = 0; i<=data.length-1; i ++){
            //leyendo caracter por caracter
            var char = data.charAt(i);
            // encriptando el caracter leido desde ascii.
            asciichar = rsa.enc(n[2],e[0],char.charCodeAt(0))

            //secret[i] = asciichar
            frase[i] = asciichar.toString();
        }
        console.log(frase);
        //-----
        //Proceso de desencriptado.
        //console.log(e);
        var d = rsa.find_d(e);
        var dec = [];
        
        frase.forEach((element) => {
            //console.log(element);
            //usando llave publica d, p*q
            var yes = String.fromCharCode(rsa.dec(element, d, n[2]));
            //console.log(yes);
            dec.push(yes);
        })
        // frase des-encriptada :)
        console.log(dec.toString());
        //frase.push(dec);
        //-----
        
        client.emit("thread", data,frase.join(""));
        client.broadcast.emit("thread", frase.join(""),dec.join(""));
      });

});

server.listen(7777);