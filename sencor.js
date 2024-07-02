
class Sensor{
    constructor(car){
        this.car=car;
        this.raycount=3
        this.raylength=100
        this.rayspread=Math.PI/4;
        this.ray=[];
    }
    update(){
        this.ray=[];
        // console.log(this.car.x);
        for(let i=0;i<this.raycount;i++){
            const rayangle=lerp(
                this.rayspread/2,
                -this.rayspread/2,
                i/(this.raycount-1)
            );
            const start={x:this.car.x,y:this.car.y};
            const end={
                x:this.car.x-Math.sin(rayangle)*this.raylength,
                y:this.car.y-Math.cos(rayangle)*this.raylength
            };
            this.ray.push([start,end]); 
            
            
        }}
        draw(ctx) {
            for (let i = 0; i < this.raycount; i++) {
            // console.log(this.ray[0][1].x);
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = "yellow";
            ctx.moveTo(this.ray[i][0].x, this.ray[i][0].y);
            ctx.lineTo(this.ray[i][1].x, this.ray[i][1].y);
            ctx.stroke();
        }
    }
}
