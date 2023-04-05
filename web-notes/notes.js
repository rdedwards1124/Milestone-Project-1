// Refering to the HTML tag we created in index.html
const canvas = document.querySelector('canvas')

/* this is the canvas context
    ('2d') because this is a 2d game*/
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

// A global variable to be used anywhere 
const gravity = 0.5

class Player {
    /* So far, only position is needed as argument
        velocity and height have values assigned to them already...*/
    constructor(position){
        this.position = position
        this.velocity = {x:0, y:1}
        this.height = 100
    }

    // This will draw the player each time it is called
    draw(){
        // this will be player
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 100, this.height)
    }

    // This makes it so the players position will change over time due to gravity
    update(){
        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if (this.position.y + this.height + this.velocity.y < canvas.height) {
            this.velocity.y += gravity
        } else {
            this.velocity.y = 0
        }
        
    }
}

const player = new Player({x: 0, y: 0})
const player2 = new Player({x: 300, y: 100})


function animate(){
    window.requestAnimationFrame(animate)

    /* This makes the recatangle we created white */
    c.fillStyle = 'white'

    /* creates a rectangle in the canvas: 
        c.fillRect(x-coordinate, y-coordinate, width, height); all in pixels */
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    player2.update()

}

// animate()


window.addEventListener('keydown', (event)=>{
    switch (event.key) {
        case 'ArrowRight':
            player.velocity.x = 5
            break;
        case 'ArrowLeft':
            player.velocity.x = -5
            break;
        case ' ':
            /*Pressing the spacebar will make the player jump*/
            player.velocity.y = -15
            break; 
        default:
            break;
    }
})

window.addEventListener('keyup', (event)=>{
    switch (event.key) {
        case 'ArrowRight':
            player.velocity.x = 0
            break;
        case 'ArrowLeft':
            player.velocity.x = 0
            break;
        default:
            break;
    }
})



/* I use this to see what key i press down*/
// window.addEventListener('keydown', (event)=>{
//     console.log(event)
// })