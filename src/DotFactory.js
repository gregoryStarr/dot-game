"use strict";
class DotFactory {
    constructor() {
        // Private Memnbers
        this.dotCollection = [];
        this.rate = 10;
        this.tbrChild = null;

        // Listener for when a dot is clicked so that it can be removed
        document.addEventListener("DOTISCLICKED", (e) => {
            this.removeDot(e.detail.target)
        });
    }


    // Create many dots based on the range value of the slider and a random selection forom that.
    batchCreate() {
        const randRate = getRandomInt(10, this.rate) - 1
        const newBatch = [];
        for (let i = 0; i < randRate; i++) {
            newBatch.push(this.create());
        }
        return newBatch;
    };

    // Creates a dot
    create() {
        const size = getRandomInt(10, 100);
        const dot = new Dot();
        this.dotCollection.push(dot);
        dot.id = guid();
        dot.setSize(size);
        dot.setValue(size)
        dot.element.className = "dot";
        dot.element.style.opacity = getRandomArbitrary(.1, 1);
        dot.setIndex(this.dotCollection.length+1);
        document.getElementById('stage').appendChild(dot.element);
        this.placeDot(dot);
        return dot;
    };

    // updtes when the slider value changes
    setRate(event) {
        this.rate = document.querySelector("#sliderCmpt").value;
    }

    // randomly places on the horizontal
    placeDot(dot, appWidth) {
        dot.element.style.left = getRandomInt(0, appWidth) + "px";
        dot.element.style.top = "2px";
    }

    // retrieves a dot
    getDot(id) {
        const found = this.dotCollection.forEach((dot) => {
            if ( index === dot.index) {
                return dot
            }
        })
        return found
    }

    // Removes a dot
    //
    removeDot(dot) {
        let target;
        if(dot instanceof Dot) {

             target = dot

        }else if(dot.hasOwnProperty('baseClass')){
            target = dot.baseClass
        }else{
            if(dot instanceof String){
                target= this.getDot(dot)
            }
        }
        this.tbrChild = target;
        document.getElementById('stage').removeChild(target.element);

        if (target) {
            delete this.tbrChild;
        }


        const index = target.index-1;
        this.dotCollection
            .splice(index, 1)
            .map((dot, index) => {
                dot.setIndex(index);
            });
    };
}