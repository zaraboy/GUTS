// <---------- EXTRA CANVAS POWER -----------> //
var canvas;
var ctx;

var background;
var width = 900;
var height = 1440;

var startButton;
var buttonWidth;
var buttonHeight;


function init() {
	canvas = document.getElementById("cloud_demo_canvas");
	width = canvas.width;
	height = canvas.height;
	ctx = canvas.getContext("2d");
	// init background
	background = new Image();

	// init cloud
	startButton = new Image();
  title = new Image();
  title.src = 'Title.png'
	startButton.src = 'button.png';
  label = new Image();
  label.src = 'Label.png'
	testplat = new Image();
	testplat.src = 'block5.png'
	startButton.onload = function(){
		buttonWidth = width/2;
    buttonHeight = height/2;
	};
  document.getElementById("cloud_demo_canvas").onclick = function () {
      location.href = "index.html";
      console.log("ejfbsejgfsd");
    };

	return setInterval(main_loop, 0.1);
}



function draw() {
	ctx.drawImage(background,0,0);
	ctx.drawImage(startButton, width/3, height/3, width/3, height/3);
	//ctx.drawImage(testplat, width/3, height/3, 150, 50);
  ctx.drawImage(title, width/6, height/7, 4*width/6, height/6);
  ctx.drawImage(label, width/6, 5*height/7, 4*width/6, height/12);
}

function main_loop() {
	draw();
}

init();
