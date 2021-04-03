function preload(){

}

function setup(){
canvas=createCanvas(640,480);
canvas.position(110,270);
video=createCapture(VIDEO);
video.hide();
tint_color="";
}

function draw(){
image(video,0,0,640,480);
tint(tint_color);
}
function apply_filter(){
    tint_color=document.getElementById("color").value;
}
function takesnapshot(){
    save("raaghav.png");
}