const canvas = document.getElementById("mycanvas");
canvas.width = 200;
const ctx = canvas.getContext("2d"); 
const road = new Road(canvas.width/2,canvas.width*0.9);

const car = new Car(road.getlanecenter(3),100,30,50)
car.draw(ctx); 
animate();


function animate() {
    canvas.height = window.innerHeight;
    ctx.save();
    ctx.translate(0,-car.y+canvas.height*0.7);
    car.update();
    road.draw(ctx);
    car.draw(ctx);
    requestAnimationFrame(animate);
}