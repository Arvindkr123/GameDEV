const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d');
let playerState = 'sit'
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function(e) {
    playerState = e.target.value;
})

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const PlayerImage = new Image();
PlayerImage.src = 'shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;

let gameFrame = 0;
const staggerFrames = 5;

const spriteAnimationState = [
    {
        name:'idle',
        frames: 7
    },
    {
        name:'jump',
        frames: 7
    },
    {
        name:'fall',
        frames: 9
    },
    {
        name:'run',
        frames: 9
    },
    {
        name:'dizzy',
        frames: 11
    },
    {
        name:'sit',
        frames: 5
    },
    {
        name:'roll',
        frames: 7
    },
    {
        name:'bite',
        frames: 7
    },
    {
        name:'ko',
        frames: 12
    },
    {
        name:'getHit',
        frames: 4
    },
];
const spriteAnimations = [];

spriteAnimationState.forEach((state, index) => {
    let frames ={
        loc:[]
    }

    for(let j=0; j<state.frames; j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
})

console.log(spriteAnimations)


function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.fillRect(x, 50, 100, 100);
    // ctx.drawImage(image, sx, sy, sw,sh, dx, dy, dw, dh);

    let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;


    ctx.drawImage(PlayerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

    // if (gameFrame % staggerFrames === 0) {
    //     if (frameX < 4) frameX++;
    //     else frameX = 0;
    // }

    gameFrame++;
    requestAnimationFrame(animate)
}

animate();