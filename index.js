


// Refering to the HTML tag we created in index.html
const canvas = document.querySelector('canvas')

/* this is the canvas context
    ('2d') because this is a 2d game*/
const canvascontext = canvas.getContext('2d')

canvas.width = 1500
canvas.height = 700


let x1_position = 20
let y1_position = 20
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

let green1x = 200
let green1y = 200

function update() {
    canvas_x_pos += canvas_x_vel_r
    canvas_x_pos += canvas_x_vel_l
    canvas_y_pos += canvas_y_vel_d
    canvas_y_pos += canvas_y_vel_u
    canvascontext.clearRect(canvas_x_pos, canvas_y_pos, canvas.width, canvas.height)
    canvascontext.fillStyle = 'white'
    canvascontext.fillRect(canvas_x_pos, canvas_y_pos, canvas.width, canvas.height)
    x1_position += x1_velocity_r
    x1_position += x1_velocity_l
    y1_position += y1_velocity_d
    y1_position += y1_velocity_u
    canvascontext.fillStyle = 'blue'
    canvascontext.fillRect(x1_position, y1_position, p1_width, p1_height)
    requestAnimationFrame(update)

    //wall 1
    canvascontext.fillStyle = 'green'
    canvascontext.fillRect(200, 0, 10, 600)
    //wall 2
    canvascontext.fillStyle = 'green'
    canvascontext.fillRect(400, 100, 10, 600)
    //wall 3
    canvascontext.fillStyle = 'green'
    canvascontext.fillRect(600, 0, 10, 300)
    //wall 4
    canvascontext.fillStyle = 'green'
    canvascontext.fillRect(600, 400, 10, 300)
    //wall 5
    canvascontext.fillStyle = 'green'
    canvascontext.fillRect(730, 50, 10, 550)
    //wall 6
    canvascontext.fillStyle = 'green'
    canvascontext.fillRect(730, 50, 720, 10)
    //wall 7
    canvascontext.fillStyle = 'green'
    canvascontext.fillRect(730, 600, 500, 10)
    //wall 8
    canvascontext.fillStyle = 'green'
    canvascontext.fillRect(860, 140, 10, 360)
    //wall 9
    canvascontext.fillStyle = 'green'
    canvascontext.fillRect(860, 490, 480, 10)
    //wall 10
    canvascontext.fillStyle = 'green'
    canvascontext.fillRect(990, 140, 10, 80)
    //wall 11
    canvascontext.fillStyle = 'green'
    canvascontext.fillRect(990, 300, 10, 100)
    //wall 12
    canvascontext.fillStyle = 'green'
    canvascontext.fillRect(990, 130, 360, 10)
    //wall 13
    canvascontext.fillStyle = 'green'
    canvascontext.fillRect(990, 390, 340, 10)
    //wall 14
    canvascontext.fillStyle = 'green'
    canvascontext.fillRect(1110, 210, 10, 190)
    //wall 15
    canvascontext.fillStyle = 'green'
    canvascontext.fillRect(1230, 130, 10, 190)
    //wall 16
    canvascontext.fillStyle = 'green'
    canvascontext.fillRect(1350, 130, 10, 120)
    //wall 17
    canvascontext.fillStyle = 'green'
    canvascontext.fillRect(1330, 390, 10, 310)
    //wall 18
    canvascontext.fillStyle = 'green'
    canvascontext.fillRect(1230, 320, 225, 10)
    //wall 19
    canvascontext.fillStyle = 'green'
    canvascontext.fillRect(1445, 320, 10, 240)
    //wall 20
    canvascontext.fillStyle = 'green'
    canvascontext.fillRect(1440, 50, 10, 270)
    //invisi-wall 1
    canvascontext.fillStyle = 'yellow'
    canvascontext.fillRect(1340, 550, 110, 10)
    //invisi-wall 2
    canvascontext.fillStyle = 'yellow'
    canvascontext.fillRect(1445, 550, 60, 10)
    //invisi-wall 3
    canvascontext.fillStyle = 'yellow'
    canvascontext.fillRect(1340, 690, 160, 10)
    //invisi-wall 4
    canvascontext.fillStyle = 'yellow'
    canvascontext.fillRect(1340, 550, 10, 140)
    //invisi-wall 5
    canvascontext.fillStyle = 'yellow'
    canvascontext.fillRect(1490, 550, 10, 140)


    // if (
    //     x1_position < 10 ||
    //     x1_position + p1_width > canvas.width - 10 ||
    //     y1_position < 10 ||
    //     y1_position + p1_height > canvas.height - 10
    //   ){x1_position=20; y1_position=20}

    // if (
    //     x1_position < 200 + 10 &&
    //     x1_position + p1_width > 200 &&
    //     y1_position < 200 + 200 &&
    //     y1_position + p1_height > 200
    //   ){x1_position=0; y1_position=0}

    wall()
}

update()

addEventListener('keydown', (event)=>{
    if (event.code == 'ArrowRight') x1_velocity_r = 5; canvas_x_vel_r = 5
    if (event.code == 'ArrowLeft') x1_velocity_l = -5; canvas_x_vel_l = -5
    if (event.code == 'ArrowDown') y1_velocity_d = 5; canvas_y_vel_d = 5
    if (event.code == 'ArrowUp') y1_velocity_u = -5; canvas_y_vel_u = -5
})

addEventListener('keyup', (event)=>{
    if (event.code == 'ArrowRight') x1_velocity_r = 0; canvas_x_vel_r = 0
    if (event.code == 'ArrowLeft') x1_velocity_l = 0; canvas_x_vel_l = 0
    if (event.code == 'ArrowDown') y1_velocity_d = 0; canvas_y_vel_d = 0
    if (event.code == 'ArrowUp') y1_velocity_u = 0; canvas_y_vel_u = 0
})

// function intersects(rect1, rect2) {
//     if (
//       rect1.x < rect2.x + rect2.width &&
//       rect1.x + rect1.width > rect2.x &&
//       rect1.y < rect2.y + rect2.height &&
//       rect1.y + rect1.height > rect2.y
//     )
//   }

function wall() {
    if (//canvas walls
        x1_position < 5 ||
        x1_position + p1_width > canvas.width - 5 ||
        y1_position < 5 ||
        y1_position + p1_height > canvas.height - 5
    ){x1_position=20; y1_position=20}

    if (//wall 1
        x1_position < 200 + 10 &&
        x1_position + p1_width > 200 &&
        y1_position < 0 + 600 &&
        y1_position + p1_height > 0
    ){x1_position=0; y1_position=0}
    
    if (//wall 2
        x1_position < 400 + 10 &&
        x1_position + p1_width > 400 &&
        y1_position < 100 + 600 &&
        y1_position + p1_height > 100
    ){x1_position=0; y1_position=0}
    
    if (//wall 3
        x1_position < 600 + 10 &&
        x1_position + p1_width > 600 &&
        y1_position < 0 + 300 &&
        y1_position + p1_height > 0
    ){x1_position=0; y1_position=0}
    
    if (//wall 4
        x1_position < 600 + 10 &&
        x1_position + p1_width > 600 &&
        y1_position < 400 + 300 &&
        y1_position + p1_height > 400
    ){x1_position=0; y1_position=0}

    if (//wall 5 (730, 50, 10, 550)
        x1_position < 730 + 10 &&
        x1_position + p1_width > 730 &&
        y1_position < 50 + 550 &&
        y1_position + p1_height > 50
    ){x1_position=0; y1_position=0}

    
    if (//wall 6 (730, 50, 720, 10)
        x1_position < 730 + 720 &&
        x1_position + p1_width > 730 &&
        y1_position < 50 + 10 &&
        y1_position + p1_height > 50
    ){x1_position=0; y1_position=0}

    if (//wall 7 (730, 600, 500, 10)
        x1_position < 730 + 500 &&
        x1_position + p1_width > 730 &&
        y1_position < 600 + 10 &&
        y1_position + p1_height > 600
    ){x1_position=0; y1_position=0}

    if (//wall 8 (860, 140, 10, 360)
        x1_position < 860 + 10 &&
        x1_position + p1_width > 860 &&
        y1_position < 140 + 360 &&
        y1_position + p1_height > 140
    ){x1_position=0; y1_position=0}

    if (//wall 9 (860, 490, 480, 10)
        x1_position < 860 + 480 &&
        x1_position + p1_width > 860 &&
        y1_position < 490 + 10 &&
        y1_position + p1_height > 490
    ){x1_position=0; y1_position=0}

    if (//wall 10 (990, 140, 10, 80)
        x1_position < 990 + 10 &&
        x1_position + p1_width > 990 &&
        y1_position < 140 + 80 &&
        y1_position + p1_height > 140
    ){x1_position=0; y1_position=0}

    if (//wall 11 (990, 300, 10, 100)
        x1_position < 990 + 10 &&
        x1_position + p1_width > 990 &&
        y1_position < 300 + 100 &&
        y1_position + p1_height > 300
    ){x1_position=0; y1_position=0}

    if (//wall 12 (990, 130, 360, 10)
        x1_position < 990 + 360 &&
        x1_position + p1_width > 990 &&
        y1_position < 130 + 10 &&
        y1_position + p1_height > 130
    ){x1_position=0; y1_position=0}

    if (//wall 13 (990, 390, 340, 10)
        x1_position < 990 + 340 &&
        x1_position + p1_width > 990 &&
        y1_position < 390 + 10 &&
        y1_position + p1_height > 390
    ){x1_position=0; y1_position=0}

    if (//wall 14 (1110, 210, 10, 190)
        x1_position < 1110 + 10 &&
        x1_position + p1_width > 1110 &&
        y1_position < 210 + 190 &&
        y1_position + p1_height > 210
    ){x1_position=0; y1_position=0}

    if (//wall 15 (1230, 130, 10, 190)
        x1_position < 1230 + 10 &&
        x1_position + p1_width > 1230 &&
        y1_position < 130 + 190 &&
        y1_position + p1_height > 130
    ){x1_position=0; y1_position=0}

    if (//wall 16 (1350, 130, 10, 120)
        x1_position < 1350 + 10 &&
        x1_position + p1_width > 1350 &&
        y1_position < 130 + 120 &&
        y1_position + p1_height > 130
    ){x1_position=0; y1_position=0}

    if (//wall 17 (1330, 390, 10, 310)
        x1_position < 1330 + 10 &&
        x1_position + p1_width > 1330 &&
        y1_position < 390 + 310 &&
        y1_position + p1_height > 390
    ){x1_position=0; y1_position=0}

    if (//wall 18 (1230, 320, 225, 10)
        x1_position < 1230 + 225 &&
        x1_position + p1_width > 1230 &&
        y1_position < 320 + 10 &&
        y1_position + p1_height > 320
    ){x1_position=0; y1_position=0}

    if (//wall 19 (1445, 320, 10, 240)
        x1_position < 1445 + 10 &&
        x1_position + p1_width > 1445 &&
        y1_position < 320 + 240 &&
        y1_position + p1_height > 320
    ){x1_position=0; y1_position=0}

    if (//wall 20 (1440, 50, 10, 270)
        x1_position < 1440 + 10 &&
        x1_position + p1_width > 1440 &&
        y1_position < 50 + 270 &&
        y1_position + p1_height > 50
    ){x1_position=0; y1_position=0}

    if (//invisi-wall 1 (1340, 550, 110, 10)
        x1_position < 1340 + 110 &&
        x1_position + p1_width > 1340 &&
        y1_position < 550 + 10 &&
        y1_position + p1_height > 550
    ){x1_position=1405; 
        y1_position=605;
        x1_velocity_r=0;
        x1_velocity_l=0;
        y1_velocity_d=0;
        y1_velocity_u=0;
        document.getElementById("h1").innerHTML = 'YOU WIN!   refresh page to restart';
    }

    if (//invisi-wall 2 (1445, 550, 60, 10)
        x1_position < 1445 + 60 &&
        x1_position + p1_width > 1445 &&
        y1_position < 550 + 10 &&
        y1_position + p1_height > 550
    ){x1_position=1405; 
        y1_position=605;
        x1_velocity_r=0;
        x1_velocity_l=0;
        y1_velocity_d=0;
        y1_velocity_u=0;
        document.getElementById("h1").innerHTML = 'YOU WIN! HIGH SCORE!!!   refresh page to restart';
    }

    if (//invisi-wall 3 (1340, 690, 160, 10)
        x1_position < 1340 + 160 &&
        x1_position + p1_width > 1340 &&
        y1_position < 690 + 10 &&
        y1_position + p1_height > 690
    ){x1_position=1405; 
        y1_position=605;
        x1_velocity_r=0;
        x1_velocity_l=0;
        y1_velocity_d=0;
        y1_velocity_u=0;
    }

    if (//invisi-wall 4 (1340, 550, 10, 140)
        x1_position < 1340 + 10 &&
        x1_position + p1_width > 1340 &&
        y1_position < 550 + 140 &&
        y1_position + p1_height > 550
    ){x1_position=1405; 
        y1_position=605;
        x1_velocity_r=0;
        x1_velocity_l=0;
        y1_velocity_d=0;
        y1_velocity_u=0;
    }

    if (//invisi-wall 5 (1490, 550, 10, 140)
        x1_position < 1490 + 10 &&
        x1_position + p1_width > 1490 &&
        y1_position < 550 + 140 &&
        y1_position + p1_height > 550
    ){x1_position=1405; 
        y1_position=605;
        x1_velocity_r=0;
        x1_velocity_l=0;
        y1_velocity_d=0;
        y1_velocity_u=0;
    }

    if (//extra-wall (1340, 555, 170, 10)
        x1_position < 1340 + 170 &&
        x1_position + p1_width > 1340 &&
        y1_position < 555 + 10 &&
        y1_position + p1_height > 555
    ){x1_position=1405; 
        y1_position=605;
        x1_velocity_r=0;
        x1_velocity_l=0;
        y1_velocity_d=0;
        y1_velocity_u=0;
    }


    return x1_position, y1_position
}


