/*
function save(){
  var inputElement = getInputElement();
  var userString = inputElement.value;

  localStorage.setItem("userText", userString);
}

var jsArray = ["Oulu", "Quimper", "Toulouse"];

function getInputElement(){
  return document.getElementById("inputText");
}


function load(){
  var inputElement = getInputElement();
  inputElement.value = localStorage.getItem("userText");
}

Storage.prototype.setObjet = function(key, value){
  this.setItem(key, JSON.stringify(value()));
}

Storage.prototype.getObject = function(key){
  var value = this.getItem(key);
  return JSON.parse(value);
}

function getRandomNumber(max){
  return Math.floor(Math.random() * max );
}

function startTheShow(){
  window.setInterval(drawSomething, 1);
}

function drawSomething(){
  var canvas = document.getElementById("drawCanvas");
  var drawingContext = canvas.getContext("2d");
  var x = getRandomNumber(200);
  var y = getRandomNumber(200);
  var size = getRandomNumber(200);

  drawingContext.rect(x,y,size,size);
  drawingContext.stroke();
}
*/

var can, ctx, canX, canY, x, y, mouseIsDown = 0;

        function init() {
            can = document.getElementById("can");
            ctx = can.getContext("2d");

            can.addEventListener("mousedown", mouseDown, false);
            can.addEventListener("mousemove", mouseXY, false);

            document.body.addEventListener("mouseup", mouseUp, false);
        }

        function mouseUp() {
            mouseIsDown = 0;
            mouseXY();
        }

        function mouseDown() {
            mouseIsDown = 1;
            mouseXY();
        }

        function mouseXY(e) {
            if (!e)
                var e = event;
            canX = e.pageX - can.offsetLeft;
            canY = e.pageY - can.offsetTop;
            draw();
        }

        function draw() {
          ctx.beginPath();
            if (!mouseIsDown){
                x = canX;
                y = canY;
            }
            ctx.moveTo(x, y);
            if (mouseIsDown){
              x = canX;
              y = canY;
            }
            ctx.lineTo(canX, canY);
            ctx.closePath();
            ctx.stroke();
        }
