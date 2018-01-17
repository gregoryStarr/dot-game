"use strict";
const points = [];

class ScoreKeeper{
    constructor(){
        document.addEventListener("DOTISCLICKED", this.updateScore);
        this.scoreCmpt = null
    }

    // Todo: Still need to implement the inverse value for points based on size of dot...
    updateScore(event){
        const point = event.detail.target;
        points.push(point);
        document.getElementById('scoreCmpt').innerText = "Score: "+points.length
    }

}