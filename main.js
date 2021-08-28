canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_X=10;
rover_y=10;
rover_image="rover.png";
nasa_mars_images_array=["mars.jpg","mars image 1.jfif","image 2.jfif","image3.jpg","imag4.jpg"];
random_number=Math.floor(Math.random() *5);

background_image=nasa_mars_images_array[random_number];
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}
function uploadBackground() {
   ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}
function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_X, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed== '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed=='40')
    {
        down();
        console.log("down");
    }
    if(keyPressed=='37')
    {
       left();
       console.log("left");

    }
    if(keyPressed=='39')
    {
     right();
     console.log("right");
     
    }
    



}
function up() 
{
    if(rover_y>=0) {
        rover_y -= 10;
        console.log("when up arrow is pressed = " + rover_X + " - " +rover_y);
        uploadBackground();
        uploadrover();
    }   

}
function down()
{
    if(rover_y <=500)
    {
        rover_y += 10;
        console.log("When down is pressed, x = " +rover_X + " | y =" +rover_y);
        uploadBackground();
        uploadrover();
    }
}
function left()
{
    if(rover_X >=0)
    {
        rover_X -= 10;
        console.log("When left is pressed, x = " +rover_X + " | y =" +rover_y);
        uploadBackground();
        uploadrover();
    }
}
function right()
{
    if(rover_X <=700)
    {
        rover_X += 10;
        console.log("When right is pressed, x = " +rover_X + " | y =" +rover_y);
        uploadBackground();
        uploadrover();
    }
}
