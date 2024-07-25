class controls{
    constructor(type){
        this.forwards=false;
        this.left=false;
        this.right=false;
        this.reverse=false;


        switch(type){
            case "KEY":
            this.#addKeyboardListeners();
            break;
            case "ASSUM":
                this.forward=true;
                break;
        }


    }
    #addKeyboardListeners(){
        document.onkeydown=(event)=>{
            switch(event.key){
                case 'ArrowUp':
                    this.forward=true;
                    break;
                case 'ArrowLeft':
                    this.left=true;
                    break;
                case 'ArrowRight':
                    this.right=true;
                    break;
                case 'ArrowDown':
                    this.reverse=true;
                    break;
            }
        }
        console.log(this);
    
    
        document.onkeyup=(event)=>{
            switch(event.key){
                case 'ArrowUp':
                    this.forward=false;
                    break;
                case 'ArrowLeft':
                    this.left=false;
                    break;
                case 'ArrowRight':
                    this.right=false;
                    break;
                case 'ArrowDown':
                    this.reverse=false;
                    break;
            }
            console.log(this);
        }
    

}
}