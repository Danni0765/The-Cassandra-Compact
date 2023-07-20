noseX=0;
noseY=0;
left_wristX=0;
right_wristX=0;
difference=0;

function preload() {
    
}

function setup() {
 video= createCapture(VIDEO);
 video.size(550, 500);
 canvas=createCanvas(550, 400);
 canvas.position(560, 120);
 poseNet=ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);
}

function draw() {
    background("cornflowerblue");
    document.getElementById("square_side").innerHTML= "dimensions of square = " + difference;
    fill('green');
    stroke('violet');
    square(noseX, noseY, difference);
}

function modelLoaded() {
    console.log("Model Is Loaded!");    
}

function gotPoses(results) {
    if (results.length>0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        left_wristX=results[0].pose.leftWrist.x;
        right_wristX=results[0].pose.rightWrist.x;
        difference=floor(left_wristX-right_wristX);
    }    
}

