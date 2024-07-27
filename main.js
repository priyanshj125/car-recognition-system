const carcanvas = document.getElementById("carcanvas");
carcanvas.width = 200;
const networkcanvas = document.getElementById("networkcanvas");
networkcanvas.width = 300;
const carctx = carcanvas.getContext("2d"); 
const networkctx = networkcanvas.getContext("2d"); 
const road = new Road(carcanvas.width/2,carcanvas.width*0.9);

const car = new Car(road.getlanecenter(1),100,30,50,"AI")
const traffic=[
    new Car(road.getlanecenter(1),-100,30,50,"ASSUM",2)
];

// car.draw(ctx); 
animate();


function animate(time) {
    for(let i=0;i<traffic.length;i++){
        traffic[i].update(road.borders,[]);
    }
    // car.update(road.borders); 
    carcanvas.height = window.innerHeight;
    networkcanvas.height = window.innerHeight;
    carctx.save();
    carctx.translate(0,-car.y+carcanvas.height*0.7);
    car.update(road.borders,traffic);
    road.draw(carctx);
    for(let i=0;i<traffic.length;i++){
        traffic[i].draw(carctx,"red");
    }
    car.draw(carctx,"blue");
    carctx.restore();
    networkctx.lineDashOffset=-time/50;
    Visualizer.drawNetwork(networkctx,car.brain);
    requestAnimationFrame(animate);
}