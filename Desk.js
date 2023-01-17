img="";
status="";
objects= [];

function preload(){
    img = loadImage('desk.jpeg');
}

function setup(){
    canvas = createCanvas(640, 220);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("MOdel Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw(){
    image(img, 0, 0, 640, 220);
    if(status != ""){
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Objects Detected";

            fill("#fc0303");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%",objects[i].x + 14, objects[i].y + 15);
            noFill();
            stroke("#fc0303");
            rect(objects[i].x - 14, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}