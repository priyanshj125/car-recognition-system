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

            ctx.beginPath();
            if (i > 0 && i < this.lanecount) {
                ctx.setLineDash([30, 60]);
            } else {
                ctx.setLineDash([]);
            }
            ctx.moveTo(x, this.top);
            ctx.lineTo(x, this.bottom);
            ctx.stroke();
        }
    }
}

