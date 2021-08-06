var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
 background_image = "BirthdayImage.jpg";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
function new_image()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;	
}

function playSound(){
	x.play();
}

function uploadBackground()
{
    ctx = canvas.getContext("2d");
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
