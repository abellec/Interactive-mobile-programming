var can, ctx, canX, canY, x, y, score = 0, mouseIsDown = 0, timed, timeLeft, click = 0;

timed = document.getElementById("time"), timeLeft = 10;

function start(){
	if (click === 0){
		click = 1;
		init();
	}
}

        function init() {
            scored = document.getElementById("score");
			timed = document.getElementById("time");
            can = document.getElementById("can");
            ctx = can.getContext("2d");
			
			draw();
			time();
			
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
            catchSquare();
        }

        function mouseXY(e) {
            if (!e)
                var e = event;
            canX = e.pageX - can.offsetLeft;
            canY = e.pageY - can.offsetTop;
        }

        function catchSquare() {
            if((canX >= x && canX <= x+50) && (canY >= y && canY <= y+50)){
              score++;
              console.log(score);
              scored.innerHTML = "SCORE: ";
              scored.innerHTML += score;
              /*draw();*/
            }
        }

        function getRandomNumber(max) {
            return Math.floor(Math.random() * max );
        }

        function draw(){
            ctx.clearRect(0,0, can.width, can.height);
            ctx.beginPath();
            x = getRandomNumber(450);
            y = getRandomNumber(450);
            ctx.rect(x,y,50,50);
            ctx.stroke();
			setTimeout(draw, 500);
        }

		function time(){
            var timerID = setTimeout(function() { 
				alert("End of the game");
				location.reload();
			}, 10000);
			var intervalID = setInterval(function() {
				timed.innerHTML = "Time: " + --timeLeft + "s";
			}, 1000);
        }