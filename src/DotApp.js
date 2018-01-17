class DotApp{
    constructor(){
        // Private Memnbers
        this.dotFactory = new DotFactory();
        this.stage= document.getElementById('stage');
        this.sliderCmpt = document.getElementById('sliderCmpt');
        this.scoreCmpt = document.getElementById('scoreCmpt');
        this.scoreKeeper = new ScoreKeeper();
        this.scoreKeeper.scoreCmpt = this.scoreCmpt
        this.width = window.innerWidth
        this.height= window.innerHeight - 60
        this.initAnimation()
        animate();

    }

    init(){
        // Setup the stage postioning and box model props
        this.setupStage()
        // init the score keeper and wslider

        // init slider
        this.initSlider()

        // kick off the factory

    }

    initAnimation(){
        const df = this.dotFactory;
        const appWidth = this.width;
        const appHeight = this.height;
        //this.animator.performUpdate()
        function updateDots() {
            setTimeout(function() {
                const newDots = df.batchCreate();
                newDots.map((dot)=>{df.placeDot(dot, appWidth)})
                window.requestAnimationFrame(updateDots);
            }, 500);
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