// Utility Helper File

// Random Range helpers
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// A debug helper
const stop = (scope) => {
    console.trace(scope);
    debugger
}

// Generates a GUID
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

// The Animation function using requestAnimationFrame
function animate() {
    var dots = document.querySelectorAll('.dot');
    var scope = this;
    if(dots.length>0){
        dots.forEach(function(dot, index){
            const current = parseInt(dot.style.top);
            const position = (current + dot.baseClass.rate  * .5);

            if (parseInt(dot.style.top) >= window.app.height - 10) {
                scope.app.dotFactory.removeDot(dot);
                return;
            }

            dot.style.top = position + 'px';
        })
    }



    window.requestAnimationFrame(animate);
}