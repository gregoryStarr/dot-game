const points = []

class ScoreKeeper{
    constructor(){
        // Private Memnbers

        document.addEventListener("DOTISCLICKED", this.updateScore)
        this.scoreCmpt = null
    }

    init(){
        // Setup the stage postioning and box model props

        // init the score keeper and wslider

        // kick off the factory

    }

    updateScore(event){
        const point = event.detail.target
        points.push(point)
        document.getElementById('scoreCmpt').innerText = "Score: "+points.length
    }

}