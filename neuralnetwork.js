class Neuralnetwork{
    constructor(neuronCount) {
        this.levels= [];
        for(let i=0;i<neuronCount.length-1;i++){
            this.levels.push(new Level(neuronCount[i],neuronCount[i+1]));
        }
    }
    static feedforward(givenInput,network){
        // console.log(network.levels);
        let outputs=Level.feedforward(
            givenInput,network.levels[0]
        );
        for(let i=1;i<network.levels.length;i++){
            outputs=Level.feedforward(outputs,network.levels[i]);
            // console.log("this is call");
        }
        return outputs;
    }
}
class Level{
    constructor(inputcount, outputcount){
        this.inputs=new Array(inputcount);
        this.outputs=new Array(outputcount);
        this.biased=new Array(outputcount);


        this.weights=[]
        for (let i = 0; i < inputcount; i++) {
           this.weights[i]=new Array(outputcount);
        }
        Level.#randomize(this)

    }
    static #randomize(level){
        // console.log(level);
        for (let i = 0; i < level.inputs.length; i++) {
            for (let j = 0; j < level.outputs.length; j++) {
                level.weights[i][j]=Math.random()*2-1;
            }
        }
        // console.log(level.biased);
        for (let i = 0 ; i < level.biased.length ;i++) {
            level.biased[i]=Math.random()*2-1;
        }
    }
    static feedforward(givenInput,level ){
        for (let i = 0;i<level.inputs.length;i++) {
            level.inputs[i]=givenInput[i];
        }
        for (let i = 0; i < level.outputs.length; i++) {
            let sum=0;
            for (let j = 0; j < level.inputs.length; j++) {
                sum+=level.inputs[j]*level.weights[j][i];
                console.log(sum);
            }
            if(sum>level.biased[i]){
                level.outputs[i]=1;
            }else{
                level.outputs[i]=0;
            }
          
        }
        return level.outputs;

    }
}






