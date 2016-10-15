const max_height = 200;
const min_height = 800;
const min_length = 150;
const max_length = 400;

var cur_height, cur_length;
var queue=[];
var max_jump = 200;
var xcoord=0;

function genFirstBlock(){
    //generate first lock with a number between 600 and 50
    cur_height =  Math.floor((Math.random() * 550) + 200);
    queue.push(cur_height);
    cur_length =  Math.floor((Math.random() * 250) + 150);
    queue.push(cur_length);
    //console.log(cur_height);
}


function genNextBlock(cur_height,cur_length){
    //console.log(cur_height,' ',cur_length);
    var temp = Math.max((cur_height-200),200);
    cur_height = Math.floor((Math.random()*(750-temp)) + temp);
    queue.push(cur_height);
    cur_length =  Math.floor((Math.random()*250) + 150);
    //cur_length = Math.floor((Math.random()*max_length-150)+min_length);
    queue.push(cur_length);
    //console.log(queue);
}

genFirstBlock();

for(var i  = 0; i < 5; i++){
    genNextBlock(cur_height,cur_length);
    //console.log(cur_height,' ',cur_length);

}


var canvas;
var ctx;
var terrainBlock;

var background;
var width = 1000;
var height = 800;

function init() {
	canvas = document.getElementById("game_canvas");
	width = canvas.width;
	height = canvas.height;
	ctx = canvas.getContext("2d");

	// init background
	//background = new Image();
	//background.src = 'button.png';
    terrainBlock = new Image();
    terrainBlock.src = "block5.png";


	return setInterval(main_loop, 0.1);
}



function drawTerrain() {
	//ctx.drawImage(background,0,0);
    //if(queue.)
    console.log(queue, ' PREDI ');

    var ycoord=queue.shift();
    var xlength=queue.shift();
    console.log(queue, ' QUEUE');
    ctx.drawImage(terrainBlock,xcoord,ycoord,xlength,50);
    console.log(ycoord, " y COORD");
    console.log(xcoord, " x coord");
    //ctx.drawImage(terrainBlock,xcoord,ycoord,xlength,50);
    xcoord =xcoord + xlength;
    //ctx.drawImage(terrainBlock,0,576,300,50);


}

function main_loop() {
    //console.log(cur_height,' ',cur_length);

	drawTerrain();
}



init();
