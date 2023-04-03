// Refering to the HTML tag we created in index.html
const canvas = document.querySelector('canvas')

/* this is the canvas context
    ('2d') because this is a 2d game*/
const canvascontext = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

function canv(){
    /* This makes the recatangle we created white */
    canvascontext.fillStyle = 'white'

    /* creates a rectangle in the canvas: 
        canvascontext.fillRect(x-coordinate, y-coordinate, width, height); all in pixels */
    canvascontext.fillRect(0, 0, canvas.width, canvas.height)
}


function play1(){
    // this will be player
    canvascontext.fillStyle = 'blue'
    let x1_position = 10
    let y1_position = 100
    let p1_width = 50
    let p1_height = 50
    canvascontext.fillRect(x1_position, y1_position, p1_width, p1_height)
    
}


function cpu(){
    // this will be the cpu
    canvascontext.fillStyle = 'red'
    let x2_position = 10
    let y2_position = 400
    let p2_width = 50
    let p2_height = 50
    canvascontext.fillRect(x2_position, y2_position, p2_width, p2_height)   
}

canv()
play1()
cpu()

// Long wall in the middle of canvas!
canvascontext.fillStyle = 'green'
canvascontext.fillRect(0, 270, 20000, 10)

// bottom wall
canvascontext.fillStyle = 'green'
canvascontext.fillRect(1000, 120, 10, 160)

// top wall
canvascontext.fillStyle = 'green'
canvascontext.fillRect(1500, 0, 10, 150)

// middle wall (top)
canvascontext.fillStyle = 'green'
canvascontext.fillRect(2000, 0, 10, 80)
// middle wall (bottom)
canvascontext.fillStyle = 'green'
canvascontext.fillRect(2000, 200, 10, 80)




/* 

// Walls to avoid
class Wall{
    constructor(x_position, y_position, width, height){
        this.x_position = x_position
        this.y_position = y_position
        this.width = width
        this.height = height
    }
    color(){
        canvascontext.fillStyle = 'green'
    }
    position(){
        canvascontext.fillRect(x_position, y_position, width, height)
    }
}

const wall1 = new Wall(0, 250, 2000, 10)


*/




function animate(){}


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