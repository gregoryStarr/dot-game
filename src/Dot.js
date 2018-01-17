"use strict";
class Dot{
    constructor(){
        // Private Memnbers
        this.element = document.createElement('button');
        this.element.baseClass = this;
        this.element.onclick = this.handleClick.bind(this);
        this.value = 0;
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
        this.element.style.background="#ff00ab";
        this.element.style.opacity="0";
        const scope = this;

        // allow time for fade to pink when clicked on
        setTimeout( () => {
            scope.dispatchClickEvent();
        },1000)
    }

    // Dispatches custome event. which updates the score, and has this object instnce removed
    dispatchClickEvent(){
       const event = new CustomEvent("DOTISCLICKED",{
            detail: {
                pointValue: this.value,
                target: this
            },
           bubbles: true,
        });

        this.element.dispatchEvent(event);
    };

    // Sets the size  of the dot
    setSize(size){
        const styleObj = this.element.style;
        styleObj.width = size + "px";
        styleObj.height = size + "px";
        styleObj.display= 'block';
        styleObj.position= 'absolute';
        styleObj.boxShadow= '0px 0px 20px 10px rgba( 255, 255, 255, .2)';

    };

    setIndex(i){
        this.index = i;
    }

    setValue(size){
        this.value = Math.floor(Math.round(1200 / size - 11))
    }
}