const canvas1 = document.getElementById('canvas1');
const ctx = canvas1.getContext('2d');

const CANVAS_WIDTH = canvas1.width = 800;
const CANVAS_HEIGHT = canvas1.height = 700;
let gameSpeed = 7;
// let gameFrame = 0;
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

window.addEventListener('load', function () {
    const slider = document.getElementById('slider');
    slider.value = gameSpeed;
    const showGameSpeed = document.getElementById('showGameSpeed');
    showGameSpeed.innerHTML = gameSpeed;

    slider.addEventListener('change', function (e) {
        gameSpeed = e.target.value;
        showGameSpeed.innerHTML = gameSpeed;
    })

    class Layer {
        constructor(image, speedModifier) {
            this.x = 0;
            this.y = 0;
            this.width = 2400;
            this.height = 700;
            this.image = image;
            this.speedModifier = speedModifier;
            this.speed = gameSpeed * this.speedModifier;
        }

        update() {
            this.speed = gameSpeed * this.speedModifier;
            if (this.x <= -this.width) {
                this.x = 0
            }
            this.x = Math.floor(this.x - this.speed)
            // this.x = gameFrame * this.speed % this.width;
        }

        draw() {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
            ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
        }
    }

    const layer1 = new Layer(backgrodImage1, 0.2);
    const layer2 = new Layer(backgrodImage2, 0.4);
    const layer3 = new Layer(backgrodImage3, 0.6);
    const layer4 = new Layer(backgrodImage4, 0.8);
    const layer5 = new Layer(backgrodImage5, 1);

    const gameObjects = [layer1, layer2, layer3, layer4, layer5];



    function animate() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        gameObjects.forEach(object => {
            object.update();
            object.draw();
        });
        requestAnimationFrame(animate);
        // gameFrame--;
    }

    animate();
})