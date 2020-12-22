canvas =document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
console.log("mqdwmqwwqmwqmwqdw");
ctx.beginPath();

ctx.strokeStyle="red";
ctx.lineWidth = 4;
ctx.rect(150,143,200,150);//150 is x,143 is y,430 is for lenght,200 is for breadth//
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.arc( 200,200,20,0,2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.arc( 240,200,20,0,2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="gold";
ctx.lineWidth=5;
ctx.arc(280,200,20,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="pink";
ctx.lineWidth=5;
ctx.arc(220,240,20,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="silver";
ctx.lineWidth=5;
ctx.arc(260,240,20,0,2*Math.PI);
ctx.stroke();
console.log("dwdwd")