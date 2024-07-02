class Road{
    constructor(x,width,lanecount=4){
        this.width=width;
        this.x=x;
        this.lanecount=lanecount;
        this.left=x-width/2
        this.right=x+width/2

        const largenumber=923423;
        this.top= -largenumber;
        this.bottom= largenumber;
        const topLeft={x:this.left,y:this.top};
        const topRight={x:this.right,y:this.top};
        const bottomLeft={x:this.left,y:this.bottom};
        const bottomRight={x:this.right,y:this.bottom};
        this.borders=[
            [topLeft,bottomLeft],
            [topRight,bottomRight]
        ];
    }
    
    getlanecenter(index) {
        const lanewidth=this.width/this.lanecount;
        return this.left+ lanewidth/2 + index*lanewidth ;

    }
    draw(ctx) {
        ctx.lineWidth = 9;
        ctx.strokeStyle = "white";

        // Adjust this value if needed
        ctx.lineDashOffset = 35;

        for (let i = 0; i <= this.lanecount; i++) {
            const x = lerp(this.left, this.right, i / this.lanecount);

            ctx.setLineDash([20,20]);
            ctx.beginPath();
            ctx.moveTo(x,this.top);
            ctx.lineTo(x,this.bottom);
            ctx.stroke();
        }

        ctx.setLineDash([]);
        this.borders.forEach(border=>{
            ctx.beginPath();
            ctx.moveTo(border[0].x,border[0].y);
            ctx.lineTo(border[1].x,border[1].y);
            ctx.stroke();
        });
        }
    }

