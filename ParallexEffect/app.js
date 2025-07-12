const canvas1 = document.getElementById('canvas1');
const ctx = canvas1.getContext('2d');

const canvasWidth = canvas1.width = 800;
const canvasheight = canvas1.height = 700;

const backgrodImage1 = new Image();
backgrodImage1.src = 'layer-1.png';
const backgrodImage2 = new Image();
backgrodImage2.src = 'layer-2.png';
const backgrodImage3 = new Image();
backgrodImage3.src = 'layer-3.png';
const backgrodImage4 = new Image();
backgrodImage4.src = 'layer-4.png';
const backgrodImage5 = new Image();
backgrodImage5.src = 'layer-5.png';

let x = 0;
let x2 = 2400;
let gameSpeed = 15;

function animate(){
    ctx.clearRect(0, 0, canvasWidth, canvasheight);
    ctx.drawImage(backgrodImage4, x, 0);
    ctx.drawImage(backgrodImage4, x2, 0);
    if(x<-2400) x = 2400 + x2 - gameSpeed;
    else x -= gameSpeed;
    if(x2<-2400) x2 = 2400 + x - gameSpeed;
    else x2 -= gameSpeed;
    requestAnimationFrame(animate);
}

animate();