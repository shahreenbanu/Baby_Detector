var status_1 = "";
var coco_powder ="";
var objects = [] ;
var sound = "";
function preload() {
  // sound = loadSound("emergency_alarm.mp3");
}
function setup() {
    canvas = createCanvas(800,600);
    canvas.center();
    coco_powder = ml5.objectDetector("cocossd",modelLoaded);
video = createCapture(VIDEO);
video.hide();

}

function modelLoaded() {
    console.log("coco_powder is loaded!!");
    status_1 = true;
    document.getElementById("status").innerHTML= "Status : started detecting objects";
coco_powder.detect(video, gotCoco);
}
function gotCoco(error, results) {
    if (error){
     console.log(error);
     

   }
    else{
        //console.log(results);
        objects=results;

    }
    //console.log("results are here " + results);
 }
 function draw() {
    stroke("red");
    noFill();
    image(video,0,0, 800,600);
    if(status_1!=""){
        for (i=0; i<=objects.length; i++) {
        console.log("Come onnn " + objects[i].x);
        document.getElementById("status").innerHTML="Objects Detected";
        if(objects[i].label == "person") {
            document.getElementById("text").innerHTML="Baby Is Found"
        }
        else {
            document.getElementById("text").innerHTML="Baby Not Found"
          // sound.play();
        }
      
     rect(objects[i].x,objects[i].y,objects[i].height+200,objects[i].width);
     text(objects[i].label,objects[i].x+10 ,objects[i].y+10);
     }
     
}
}