class Road{
    constructor(x,width,lanecount=4){
        this.width=width;
        this.x=x;
        this.lanecount=lanecount;
        this.left=x-width/2
        this.right=x+width/2

        const largenumber=93423423;
        this.top= -largenumber;
        this.bottom= largenumber;

     const topleft={x:this.left,y:this.top}
     const topright={x:this.right,y:this.top}
     const bottomright={x:this.right,y:this.bottom}
     const bottomleft={x:this.left,y:this.bottom}
      this.borders=[
            [topleft,topright],
            [bottomleft,bottomright]
        ]
        
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

        for (let i = 1; i <= this.lanecount-1; i++) {
            const x = lerp(this.left, this.right, i / this.lanecount);

            ctx.beginPath();
            ctx.setLineDash([30, 60]);
            ctx.moveTo(x, this.top);
            ctx.lineTo(x, this.bottom);
            ctx.stroke();
        }
        ctx.setLineDash([43,4]);
        this.borders.forEach(function (border) {
            ctx.beginPath();
            ctx.moveTo(border[0].x, border[0].y);
            ctx.lineTo(border[1].x, border[1].y);
            ctx.stroke();
        });

    }
}

