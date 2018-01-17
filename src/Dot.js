class Dot{
    constructor(){
        // Private Memnbers
        this.element = document.createElement('button');
        this.element.baseClass = this;
        this.element.onclick = this.handleClick.bind(this)
        this.pointValue = 0;
        this.width = 0;
        this.height = 0;
        this.index = null;
        this.rate = getRandomInt(5, 10)
    }


    init(){
        this.setSize(getRandomInt(10, 100))
    }

    // Public methods
    handleClick(){
        this.element.style.background="#ff00ab"
        this.element.style.opacity="0"
        const scope = this;
        setTimeout(()=>{
            scope.dispatchClickEvent();
        }, 2000)
    }

    dispatchClickEvent(){
       const event = new CustomEvent("DOTISCLICKED",{
            detail: {
                pointValue: this.width / 100 * 100,
                target: this
            },
           bubbles: true,
        });

        this.element.dispatchEvent(event);
    };

    setSize(size){
        const styleObj = this.element.style;
        styleObj.width = size + "px";
        styleObj.height = size + "px";
        styleObj.display= 'block';
        styleObj.position= 'absolute';
        styleObj.boxShadow= '0px 0px 20px 10px rgba( 255, 255, 255, .2)';

    };

    setPosition(){
        this.element.style.top ++;
    }

    setIndex(i){
        this.index = i;
    }
}