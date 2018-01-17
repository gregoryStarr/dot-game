"use strict";
class ScoreKeeper{
    constructor(){
        const updateHandler = this.updateScore.bind(this);
        document.addEventListener("UPDATEPRICE", this.updateScore.bind(this));
        this.scoreCmpt = null
        this.score = 0
        this.points = []
        document.getElementById('scoreCmpt').innerText = "Score: "+this.score;
    }

    // Todo: Still need to implement the inverse value for points based on size of dot...
    updateScore(event){
        this.points.push(event);
        this.score += event.pointValue;
        document.getElementById('scoreCmpt').innerText = "Score: "+this.score
    }

}