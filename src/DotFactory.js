class DotFactory {
    constructor() {
        // Private Memnbers
        this.dotCollection = [];
        this.rate = 10;
        this.tbrChild = null

        document.addEventListener("DOTISCLICKED", (e) => {
            this.removeDot(e.detail.target)
        })
    }


    // Public methods
    batchCreate() {
        const newBatch = []
        for (let i = 0; i < getRandomInt(10, this.rate) - 1; i++) {
            newBatch.push(this.create())
        }
        return newBatch;
    };

    create() {
        const dot = new Dot();
        this.dotCollection.push(dot)
        dot.id = guid()
        dot.setSize(getRandomInt(10, 100))
        dot.element.className = "dot"
        dot.element.style.opacity = getRandomArbitrary(.1, 1)
        dot.setIndex(this.dotCollection.length+1)
        document.getElementById('stage').appendChild(dot.element);
        this.placeDot(dot)
        return dot;
    };

    setRate(event) {
        this.rate = document.querySelector("#sliderCmpt").value;
    }

    placeDot(dot, appWidth) {
        dot.element.style.left = getRandomInt(0, appWidth) + "px"
        dot.element.style.top = "2px";
    }


    getDot(id) {
        const found = this.dotCollection.forEach((dot) => {
            if ( index === dot.index) {
                return dot
            }
        })
        return found
    }

    removeDot(dot) {
        let target
        if(dot instanceof Dot) {

             target = dot

        }else if(dot.hasOwnProperty('baseClass')){
            target = dot.baseClass
        }else{
            if(dot instanceof String){
                target= this.getDot(dot)
            }
        }
        this.tbrChild = target
        document.getElementById('stage').removeChild(target.element)

        if (target) {
            delete this.tbrChild;
        }


        const index = target.index-1;
        this.dotCollection
            .splice(index, 1)
            .map((dot, index) => {
                dot.setIndex(index);
            })
    }
}