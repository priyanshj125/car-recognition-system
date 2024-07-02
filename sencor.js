
class Sensor{
    constructor(car){
        this.car=car;
        this.raycount=5
        this.raylength=150
        this.rayspread=Math.PI/2;
        this.ray=[];
        this.readings=[];
    }
    update(roadborders){
       

     this.#castray();
     this.readings=[]
     for (let i = 0; i < this.ray.length; i++) {
        
        this.readings.push(
            this.#getreading(this.ray[i],roadborders)
        );
        
     }
    }

    #getreading(ray,roadborders){
        let touches=[];
        // console.log(ray[0]+"sadvashvjhmvjhvjmdv");

        for(let i=0;i<roadborders.length;i++){
            const touch=getIntersection(
                ray[0],
                ray[1],
                roadborders[i][0],
                roadborders[i][1]
            );
            if(touch){
                touches.push(touch);
            }
        }

        if(touches.length==0){
            
            return null;
        }else{

            const offsets=touches.map(e=>e.offset);
            const minOffset=Math.min(...offsets);
            return touches.find(e=>e.offset==minOffset);
        }
    }
     
    
    #castray(){
        this.ray=[];
        for(let i=0;i<this.raycount;i++){
            const rayangle=lerp(
                this.rayspread/2,
                -this.rayspread/2,
               this.raycount==1?0.5:i/(this.raycount-1)
            )+this.car.angle;
            const start={x:this.car.x,y:this.car.y};
            const end={
                x:this.car.x-Math.sin(rayangle)*this.raylength,
                y:this.car.y-Math.cos(rayangle)*this.raylength
            };
            this.ray.push([start,end]);

        }
    }
    
        draw(ctx) {
            for (let i = 0; i < this.raycount; i++) {
                let end=this.ray[i][1];
                if(this.readings[i]){
                    end=this.readings[i]; 
                    
                }
             ctx.beginPath();
            ctx.lineWidth=2;
            ctx.strokeStyle="yellow";
            ctx.moveTo(
                this.ray[i][0].x,
                this.ray[i][0].y
            );
            ctx.lineTo(
                end.x,
                end.y
            );
            ctx.stroke();

            if (this.readings[i]) {
                ctx.beginPath();
                ctx.lineWidth = 2;
                ctx.strokeStyle = "black";
                ctx.moveTo(this.ray[i][1].x, this.ray[i][1].y);
                ctx.lineTo(end.x, end.y);
                ctx.stroke();
            }
            
        }
    }
}
