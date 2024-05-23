const ballElement = document.getElementById("ball");
const frameWidth = 150;
const frameHeight = 100;
const gravity = -0.5;

let ball = {
    size: 1,

    x: 0,
    xv: 2,

    y: 0,
    yv: 10,
};

function movement() {
    ball.x += ball.xv;
    if (ball.x > frameWidth - ball.size) {
        ball.x = frameWidth - ball.size;
        ball.xv = -ball.xv;
    } else if (ball.x < 0) {
        ball.x = 0;
        ball.xv = -ball.xv;
    }
    ballElement.style.left = ball.x + "px";

    ball.yv += gravity;
    ball.y += ball.yv;
    if (ball.y > frameHeight - ball.size) {
        ball.y = frameHeight - ball.size;
        ball.yv = -ball.yv;
    } else if (ball.y < 0) {
        ball.y = 0;
        ball.yv = -ball.yv;
    }
    ballElement.style.bottom = ball.y + "px";
}

setInterval(movement, 10);
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById("js").style.backgroundColor = getRandomColor();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    alert('Takk for at du kontaktet oss. Vi vil henvende oss til deg i løpet av tre til fire arbeidsdager.');

    event.target.reset();
});