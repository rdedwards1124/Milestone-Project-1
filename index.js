


// Refering to the HTML tag we created in index.html
const canvas = document.querySelector('canvas')

/* this is the canvas context
    ('2d') because this is a 2d game*/
const canvascontext = canvas.getContext('2d')

canvas.width = 1500
canvas.height = 700


let x1_position = 10
let y1_position = 10
let p1_width = 40
let p1_height = 40
let x1_velocity_r = 0   //////////////////////////////////////////
let x1_velocity_l = 0   //  created 2 variables for velocity in 
let y1_velocity_d = 0   //  both directions because it makes the 
let y1_velocity_u = 0   //  transition of botton pressing smoother
                        //////////////////////////////////////////
let canvas_x_pos = 0
let canvas_y_pos = 0
let canvas_x_vel_r = 0
let canvas_x_vel_l = 0
let canvas_y_vel_d = 0
let canvas_y_vel_u = 0

function update() {
    canvas_x_pos += canvas_x_vel_r
    canvas_x_pos += canvas_x_vel_l
    canvas_y_pos += canvas_y_vel_d
    canvas_y_pos += canvas_y_vel_u
    canvascontext.clearRect(canvas_x_pos, canvas_y_pos,canvas.width,canvas.height)
    canvascontext.fillStyle = 'white'
    canvascontext.fillRect(canvas_x_pos, canvas_y_pos, canvas.width, canvas.height)
    x1_position += x1_velocity_r
    x1_position += x1_velocity_l
    y1_position += y1_velocity_d
    y1_position += y1_velocity_u
    canvascontext.fillStyle = 'blue'
    canvascontext.fillRect(x1_position, y1_position, p1_width, p1_height)
    requestAnimationFrame(update)

    canvascontext.fillStyle = 'green'
    canvascontext.fillRect(200, 200, 10, 200)
    canvascontext.fillStyle = 'green'
    canvascontext.fillRect(500, 200, 10, 200)
}

update()

addEventListener('keydown', (event)=>{
    if (event.code == 'ArrowRight') x1_velocity_r = 5, canvas_x_vel_r = 5
    if (event.code == 'ArrowLeft') x1_velocity_l = -5, canvas_x_vel_l = -5
    if (event.code == 'ArrowDown') y1_velocity_d = 5, canvas_y_vel_d = 5
    if (event.code == 'ArrowUp') y1_velocity_u = -5, canvas_y_vel_u = -5
})

addEventListener('keyup', (event)=>{
    if (event.code == 'ArrowRight') x1_velocity_r = 0, canvas_x_vel_r = 0
    if (event.code == 'ArrowLeft') x1_velocity_l = 0, canvas_x_vel_l = 0
    if (event.code == 'ArrowDown') y1_velocity_d = 0, canvas_y_vel_d = 0
    if (event.code == 'ArrowUp') y1_velocity_u = 0, canvas_y_vel_u = 0
})

