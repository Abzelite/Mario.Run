let noseX = 0;
let noseY = 0;
let capture

function preload() {
  world_start = loadSound("world_start.wav");
  // Assuming setSprites() and MarioAnimation() are defined elsewhere
  setSprites();
  MarioAnimation();
}

let canvas;//turning on webcam in p5.js?


function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	instializeInSetup(mario);
	
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);

}
function modelLoaded()
{
  console.log('mm')
}
function draw() {
  game(); // Assuming game() is defined elsewhere?

}

function gotPoses(results) {
  if (results.length > 0) {
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log(results);
  }
}
