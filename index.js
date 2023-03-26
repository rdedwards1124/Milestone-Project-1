

const canvas = document.querySelector('canvas')

/* this is the canvas context
    ('2d') because this is a 2d game*/
const c = canvas.getContext('2d')


canvas.width = 1024
canvas.height = 576

class Player {
    constructor(position){
        this.position = position
    }

    draw(){
        // this will be player
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 100, 100)
    }

    update(){
        this.draw()
        this.position.y++
    }
}

const player = new Player({x: 0, y: 0})
const player2 = new Player({x: 300, y: 100})

let y = 100
function animate(){
    window.requestAnimationFrame(animate)

    /* This makes the recatangle we created white */
    c.fillStyle = 'white'

    /* creates a rectangle in the canvas: 
        c.fillRect(x-coordinate, y-coordinate, width, height); all in pixels */
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()

}

animate()