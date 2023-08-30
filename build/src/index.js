"use strict";
// Refering to the HTML tag we created in index.html
const canvas = document.querySelector("canvas");
/* this is the canvas context
    ('2d') because this is a 2d game*/
const canvascontext = canvas.getContext("2d");
canvas.width = 1500;
canvas.height = 700;
let x1_position = 20;
let y1_position = 20;
let p1_width = 40;
let p1_height = 40;
let x1_velocity_r = 0; //////////////////////////////////////////
let x1_velocity_l = 0; //  created 2 variables for velocity in
let y1_velocity_d = 0; //  both directions because it makes the
let y1_velocity_u = 0; //  transition of botton pressing smoother
//////////////////////////////////////////
let canvas_x_pos = 0;
let canvas_y_pos = 0;
function update() {
    canvascontext;
    if (canvascontext && canvas) {
        canvascontext === null || canvascontext === void 0 ? void 0 : canvascontext.clearRect(canvas_x_pos, canvas_y_pos, canvas.width, canvas.height);
        canvascontext.fillStyle = "lightblue";
        canvascontext === null || canvascontext === void 0 ? void 0 : canvascontext.fillRect(canvas_x_pos, canvas_y_pos, canvas.width, canvas.height);
        x1_position += x1_velocity_r;
        x1_position += x1_velocity_l;
        y1_position += y1_velocity_d;
        y1_position += y1_velocity_u;
        canvascontext.fillStyle = "blue";
        canvascontext.fillRect(x1_position, y1_position, p1_width, p1_height);
        requestAnimationFrame(update);
    }
    function createGreenWall(x, y, w, h) {
        if (canvascontext && canvas) {
            canvascontext.fillStyle = "green";
            canvascontext.fillRect(x, y, w, h);
            if (x1_position < x + w &&
                x1_position + p1_width > x &&
                y1_position < y + h &&
                y1_position + p1_height > y) {
                x1_position = 0;
                y1_position = 0;
            }
        }
    }
    //wall 1
    createGreenWall(200, 0, 10, 600);
    //wall 2
    createGreenWall(400, 100, 10, 600);
    //wall 3
    createGreenWall(600, 0, 10, 300);
    //wall 4
    createGreenWall(600, 400, 10, 300);
    //wall 5
    createGreenWall(730, 50, 10, 550);
    //wall 6
    createGreenWall(730, 50, 720, 10);
    //wall 7
    createGreenWall(730, 600, 500, 10);
    //wall 8
    createGreenWall(860, 140, 10, 360);
    //wall 9
    createGreenWall(860, 490, 480, 10);
    //wall 10
    createGreenWall(990, 140, 10, 80);
    //wall 11
    createGreenWall(990, 300, 10, 100);
    //wall 12
    createGreenWall(990, 130, 360, 10);
    //wall 13
    createGreenWall(990, 390, 340, 10);
    //wall 14
    createGreenWall(1110, 210, 10, 190);
    //wall 15
    createGreenWall(1230, 130, 10, 190);
    //wall 16
    createGreenWall(1350, 130, 10, 120);
    //wall 17
    createGreenWall(1330, 390, 10, 310);
    //wall 18
    createGreenWall(1230, 320, 225, 10);
    //wall 19
    createGreenWall(1445, 320, 10, 240);
    //wall 20
    createGreenWall(1440, 50, 10, 270);
    function createYellowWall(x, y, w, h) {
        if (canvascontext && canvas) {
            canvascontext.fillStyle = "yellow";
            canvascontext.fillRect(x, y, w, h);
        }
    }
    //Win-wall 1
    createYellowWall(1340, 550, 110, 10);
    //Win-wall 2
    createYellowWall(1445, 550, 60, 10);
    //Win-wall 3
    createYellowWall(1340, 690, 160, 10);
    //Win-wall 4
    createYellowWall(1340, 550, 10, 140);
    //Win-wall 5
    createYellowWall(1490, 550, 10, 140);
    specialWalls();
}
// Uncomment out update() to activate game!!
update();
addEventListener("keydown", (event) => {
    if (event.code == "ArrowRight")
        x1_velocity_r = 4;
    if (event.code == "ArrowLeft")
        x1_velocity_l = -4;
    if (event.code == "ArrowDown")
        y1_velocity_d = 4;
    if (event.code == "ArrowUp")
        y1_velocity_u = -4;
});
addEventListener("keyup", (event) => {
    if (event.code == "ArrowRight")
        x1_velocity_r = 0;
    if (event.code == "ArrowLeft")
        x1_velocity_l = 0;
    if (event.code == "ArrowDown")
        y1_velocity_d = 0;
    if (event.code == "ArrowUp")
        y1_velocity_u = 0;
});
// // This is for collision detection!!
// function intersects(rect1, rect2) {
//     if (
//       rect1.x < rect2.x + rect2.width &&
//       rect1.x + rect1.width > rect2.x &&
//       rect1.y < rect2.y + rect2.height &&
//       rect1.y + rect1.height > rect2.y
//     )
//   }
function specialWalls() {
    if (canvascontext && canvas) {
        if (
        //canvas walls
        x1_position < 0 ||
            x1_position + p1_width > canvas.width - 0 ||
            y1_position < 0 ||
            y1_position + p1_height > canvas.height - 0) {
            x1_position = 20;
            y1_position = 20;
        }
        if (
        //invisi-wall 1 (1340, 550, 110, 10)
        x1_position < 1340 + 110 &&
            x1_position + p1_width > 1340 &&
            y1_position < 550 + 10 &&
            y1_position + p1_height > 550) {
            x1_position = 1405;
            y1_position = 605;
            x1_velocity_r = 0;
            x1_velocity_l = 0;
            y1_velocity_d = 0;
            y1_velocity_u = 0;
            const myH1tag = document.getElementById("h1");
            if (myH1tag) {
                myH1tag.innerHTML = "YOU WIN! refresh page to restart";
            }
        }
        if (
        //invisi-wall 2 (1445, 550, 60, 10)
        x1_position < 1445 + 60 &&
            x1_position + p1_width > 1445 &&
            y1_position < 550 + 10 &&
            y1_position + p1_height > 550) {
            x1_position = 1405;
            y1_position = 605;
            x1_velocity_r = 0;
            x1_velocity_l = 0;
            y1_velocity_d = 0;
            y1_velocity_u = 0;
            const myH1tag = document.getElementById("h1");
            if (myH1tag) {
                myH1tag.innerHTML = "YOU WIN! HIGH SCORE!!! refresh page to restart";
            }
        }
        if (
        //invisi-wall 3 (1340, 690, 160, 10)
        x1_position < 1340 + 160 &&
            x1_position + p1_width > 1340 &&
            y1_position < 690 + 10 &&
            y1_position + p1_height > 690) {
            x1_position = 1405;
            y1_position = 605;
            x1_velocity_r = 0;
            x1_velocity_l = 0;
            y1_velocity_d = 0;
            y1_velocity_u = 0;
        }
        if (
        //invisi-wall 4 (1340, 550, 10, 140)
        x1_position < 1340 + 10 &&
            x1_position + p1_width > 1340 &&
            y1_position < 550 + 140 &&
            y1_position + p1_height > 550) {
            x1_position = 1405;
            y1_position = 605;
            x1_velocity_r = 0;
            x1_velocity_l = 0;
            y1_velocity_d = 0;
            y1_velocity_u = 0;
        }
        if (
        //invisi-wall 5 (1490, 550, 10, 140)
        x1_position < 1490 + 10 &&
            x1_position + p1_width > 1490 &&
            y1_position < 550 + 140 &&
            y1_position + p1_height > 550) {
            x1_position = 1405;
            y1_position = 605;
            x1_velocity_r = 0;
            x1_velocity_l = 0;
            y1_velocity_d = 0;
            y1_velocity_u = 0;
        }
        if (
        //extra-wall (1340, 555, 170, 10)
        x1_position < 1340 + 170 &&
            x1_position + p1_width > 1340 &&
            y1_position < 555 + 10 &&
            y1_position + p1_height > 555) {
            x1_position = 1405;
            y1_position = 605;
            x1_velocity_r = 0;
            x1_velocity_l = 0;
            y1_velocity_d = 0;
            y1_velocity_u = 0;
        }
        return y1_position;
    }
}
