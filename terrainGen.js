const max_height = 200;
const min_height = 800;
const min_length = 150;
const max_length = 400;

var cur_height, cur_length;
var queue=[];
var queue2 = [];
var drawQueue = [];
var max_jump = 200;
var xcoord=0;
var ycoord;
var xlength;


var somearray = []; //only for tasting
var bla1, bla2; //only for testing

function genFirstBlock(){
    //generate first lock with a number between 600 and 50
    cur_height =  Math.floor((Math.random() * 550) + 200);
    queue.push(cur_height);
    cur_length =  Math.floor((Math.random() * 250) + 150);
    queue.push(cur_length);
    return queue;
    //console.log(cur_height);
}


function genNextBlock(cur_height,cur_length){
    //console.log(cur_height,' ',cur_length);
    console.log("KURA NA HEIGHTA E : ", cur_height);
    var temp = Math.max((cur_height-200),200);
    cur_height = Math.floor((Math.random()*(750-temp)) + temp);
    queue2.push(cur_height);
    cur_length =  Math.floor((Math.random()*250) + 150);
    //cur_length = Math.floor((Math.random()*max_length-150)+min_length);
    queue2.push(cur_length);
    return queue2;
    //console.log(queue);
}

//genFirstBlock();
//console.log(queue);
for(var i  = 0; i < 5; i++){
    ycoord = queue.shift();
    xlength = queue.shift();
    drawQueue.push(ycoord);
    drawQueue.push(xlength);
    //genNextBlock(ycoord,xlength);
    //  console.log(cur_height,' ',cur_length);

}


var canvas;
var ctx;
var terrainBlock;

var background;
var width = 1000;
var height = 800;