let speed = 30;
let scale = 0.15;
let canvas;
let ctx;
let dvdColor;

let dvd = {
    x: 200,
    y: 300,
    xspeed: 10,
    yspeed: 10,
    img: new Image()
};

(function main() {
    canvas = document.getElementById("screen");
    ctx = canvas.getContext("2d");
    dvd.img.src = 'dvd.png';

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    getRandomColor();
    update();
})();

function update() {
    setTimeout(() => {
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = dvdColor;
        ctx.fillRect(dvd.x, dvd.y, dvd.img.width * scale, dvd.img.height * scale);
        ctx.drawImage(dvd.img, dvd.x, dvd.y, dvd.img.width * scale, dvd.img.height * scale);

        dvd.x += dvd.xspeed;
        dvd.y += dvd.yspeed;

        checkHit();
        update();
    }, speed);
}

function checkHit() {
    const imgWidth = dvd.img.width * scale;
    const imgHeight = dvd.img.height * scale;

    if (dvd.x + imgWidth >= canvas.width || dvd.x <= 0) {
        dvd.xspeed *= -1;
        getRandomColor();
    }

    if (dvd.y + imgHeight >= canvas.height || dvd.y <= 0) {
        dvd.yspeed *= -1;
        getRandomColor();
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    dvdColor = color;
}