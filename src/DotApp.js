"use strict";
class DotApp{
    constructor(){
        // Private Memnbers
        this.dotFactory = new DotFactory();
        this.stage= document.getElementById('stage');
        this.sliderCmpt = document.getElementById('sliderCmpt');
        this.scoreCmpt = document.getElementById('scoreCmpt');
        this.scoreKeeper = new ScoreKeeper();
        this.scoreKeeper.scoreCmpt = this.scoreCmpt;
        this.width = window.innerWidth;
        this.height= window.innerHeight - 60;
        this.initAnimation();
        //window.requestAnimationFrame(animate)
    }

    init(){
        // Setup the stage postioning and box model props
        this.setupStage();

        // init slider
        this.initSlider();
    }

    // starts the animation by creating dots
    initAnimation(){
        const df = this.dotFactory;
        const appWidth = this.width;

        // called in animation cycle and evey 1000 ml seconds generates new batch
        function updateDots() {
            setTimeout(function() {
                const newDots = df.batchCreate();
                newDots.map((dot)=>{df.placeDot(dot, appWidth)})
                window.requestAnimationFrame(updateDots);
            }, 1000);
        }

        window.requestAnimationFrame(updateDots);
    }


    initSlider(){
        const df = this.dotFactory;
        this.sliderCmpt.onchange = function(e) {
            df.setRate(parseInt(e.currentTarget.value));
        }
    }

    setupStage(){
        const styleObj = this.stage.style;
        styleObj.width = this.width-20+"px";
        styleObj.height= this.height-20+"px";
        styleObj.position = "absolute";
        styleObj.top = "50px";
    }
}