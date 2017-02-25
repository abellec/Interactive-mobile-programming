var connection = new WebSocket("ws://obscure-waters-98157.herokuapp.com");


// Log errors
connection.onerror = function (error) {
  console.log("WebSocket Error " + error);
}

// Log messages from the server
connection.onmessage = function (message) {
  console.log("New message: " + message.data);
  document.getElementById("chat").innerHTML = message.data;
}

// When the connection is open, send some data to the server
function send(){
  var yourMessage = document.getElementById("Ymessage").value;
  connection.send(yourMessage);
  connection.onopen = function () {
    connection.send(yourMessage); // Send the message 'Ping' to the server
  }
}


function trackPlay(){
  var track = document.getElementById('audioplayer');
  track.play();
}
function trackPause(){
  var track = document.getElementById('audioplayer');
  track.pause();
}
function SetVolume(val)
   {
       var player = document.getElementById('audioplayer');
       console.log('Before: ' + player.volume);
       player.volume = val / 100;
       console.log('After: ' + player.volume);
   }
