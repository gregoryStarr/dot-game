
var timeout;

var startTime = Date.now();

function easeOutBounce(t, b, c, d) {
    if ((t/=d) < (1/2.75)) {
        return c*(7.5625*t*t) + b;
    } else if (t < (2/2.75)) {
        return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
    } else if (t < (2.5/2.75)) {
        return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
    } else {
        return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
    }
}

function animate() {
    var dots = document.querySelectorAll('.dot');
    var scope = this
    if(dots.length>0){
        dots.forEach(function(dot, index){
            const current = parseInt(dot.style.top)
            const position = (current + dot.baseClass.rate  * .5)

            if (parseInt(dot.style.top) >= window.app.height - 10) {
                scope.app.dotFactory.removeDot(dot)
                return;
            }

            dot.style.top = position + 'px';
        })
    }



    timeout = window.requestAnimationFrame(animate);
}

window.onload = function() {
    this.app = new DotApp();
    app.init();
}