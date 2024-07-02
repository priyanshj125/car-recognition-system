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
        const options = {
            points: myPoints, //vec3 array,
            updatable: true
        }
        let dashedlines = BABYLON.MeshBuilder.CreateDashedLines("dashedlines", options, scene);  //scene is optional and defaults to the current scene
        
        // Update
        options.points[0].x +=6; 
        options.instance = lines;
        lines = BABYLON.MeshBuilder.CreateDashedLines("dashedlines", options); //No scene parameter when using instance
        const lanewidth=this.width/this.lanecount;
        return this.left+ lanewidth/2 + index*lanewidth ;

    }
    draw(ctx){
        ctx.linewidth=9;
        ctx.strokeStyle="black";
        for (let i = 0; i <= this.lanecount; i++) {

           const x=lerp(this.left,this.right,i/this.lanecount );

        if (i > 0 && i < this.lanecount) {
            ctx.setLineDash([5, 15]);
        } else {
            ctx.setLineDash([]);
        }


        ctx.beginPath();
        ctx.moveTo(x,this.top)
        ctx.lineTo(x,this.bottom)
        ctx.stroke();
        
    }

}
}

