


// Animation Logic ________________________________________


class Animator{
    constructor() {
        this.callBack = null
    }


    animate() {
        const fps = 60;
        const interval = 1000 / fps;
        console.log("animating")
        window.requestAnimationFrame( this.callBack() )
        setTimeout(this.performUpdate(), interval);
    }

    performUpdate() {
        console.warn('updating pos')
        const yMin = 0;
        const yMax = window.innerHeight;
        let pos = 0;
        const dir = 1;
        const speed = 8;

        const dots =  document.querySelectorAll('.dot');

        if(dots.length>0){
            dots.map((dot, index) => {

                pos = parseInt(dot.element.style.top);
                if (pos > yMax || pos < yMin) {
                    dir *= -1;
                }

                pos += (dir * speed);
                dot.element.style.top = pos + 'px';
            })

        }

    }
}


