img="";
status="";

function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
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
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Laptop", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 270, 350 );

    fill("#FF0000");
    text("Pen", 450, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 70, 270, 325 );

    fill("#FF0000");
    text("Dairy", 450, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 70, 270, 325 );

}