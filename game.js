let score = 0;
const headerHeight = 10 + "vh";


const highscore = parseInt(localStorage.getItem("highscore")) || 0;

document.getElementById("end-highscore-display").textContent = highscore;

function updateScore() {
    document.getElementById("score-display").innerText = score
}
//start spill
function start() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("animal").style.display = "flex";
    
    
    // Timer
    let timerElement = document.getElementById('timer');
    let timeLeft = 60;

    let countdownTimer = setInterval(function () {
        timerElement.textContent = timeLeft;
        timeLeft--;
        //avslutt spill
        if (timeLeft < 0) {
            clearInterval(countdownTimer);
            timerElement.textContent = 'Time\'s up!';
            document.getElementById("endscreen").style.display = "flex";
            document.getElementById("end-score-display").textContent = score;

            if (score > highscore) {
                localStorage.setItem("highscore", score);
                document.getElementById("end-highscore-display").textContent = score;
                console.log("NEW highscore: " + score);
            }

            document.getElementById("animal").style.display = "none";
        }
        if (timeLeft < 10 && timeLeft % 2 === 0) {
            document.getElementById("timer").style.color = "red";
        }
        if (timeLeft < 10 && timeLeft % 2 === 1) {
            document.getElementById("timer").style.color = "yellow";
        }
    }, 1000);
}


//trykk på dyr
function klikk(element) {
    if (imageSources.length === 0) {
        let messageBox = document.createElement("div");
        messageBox.textContent = "Reload by pressing 'r'";
        messageBox.classList.add("message-box");
        document.body.appendChild(messageBox);
        setTimeout(function() {
            document.body.removeChild(messageBox);
        }, 2000);
        return;
    }
    imageSources.shift();

    if (ammoDiv.firstChild) {
        console.log(ammoDiv)
        ammoDiv.removeChild(ammoDiv.firstChild);
    }

    //blod
    document.getElementById("animal").addEventListener('click', function(event) {
        if (window.getComputedStyle(document.getElementById("menu")).display === "none") {
            console.log("blood")
            const x = event.clientX;
            const y = event.clientY;
    
            const image = document.createElement("img");
            image.src = "Photos/blood1.gif";
            image.alt = "Clicked Image";
            image.classList.add("clicked-image");
    
            image.style.position = "absolute";
            image.style.left = x - 130 + "px";
            image.style.top = y - 150 + "px";
    
            document.getElementById("main-container").appendChild(image);
    
            setTimeout(function () {
                document.getElementById("main-container").removeChild(image);
            }, 1000);
        }
    });
    //forflytting ved klikk
    setTimeout(function() {
        console.log("person ble trykket på");

        let elementWidth = element.offsetWidth;
        let elementHeight = element.offsetHeight;

        let randomTop = Math.floor(Math.random() * (window.innerHeight - elementHeight));
        if (randomTop < 100) {
            randomTop = randomTop + 100
        }
        console.log(randomTop)
        if (randomTop <500) {
            document.getElementById("animal").src = "Photos/eagle.png"
        }
        else {
            document.getElementById("animal").src ="Photos/deer.png"
        }
        let randomLeft = Math.floor(Math.random() * (window.innerWidth - elementWidth));

        element.style.top = randomTop + "px";
        element.style.left = randomLeft + "px";
        score += 100;
        updateScore();
    }, 1000);
}


//ammo
 let imageSources = [
    "Photos/bullet.png",
    "Photos/bullet.png",
    "Photos/bullet.png",
    "Photos/bullet.png",
    "Photos/bullet.png"
];

let ammoDiv = document.getElementById("ammo");

imageSources.forEach(function(source) {
    var img = document.createElement("img");
    img.src = source;
    img.alt = "Image";
    img.style.width = "50%"; 
    img.style.height = "50%"; 
    ammoDiv.appendChild(img);
});

//reload
document.addEventListener('keydown', function(event) {
    if (event.key === 'r') {
        imageSources = [
            "Photos/bullet.png",
            "Photos/bullet.png",
            "Photos/bullet.png",
            "Photos/bullet.png",
            "Photos/bullet.png"
        ];

        while (ammoDiv.firstChild) {
            ammoDiv.removeChild(ammoDiv.firstChild);
        }

        imageSources.forEach(function(source) {
            var img = document.createElement("img");
            img.src = source;
            img.alt = "Image";
            img.style.width = "50%"; 
            img.style.height = "50%"; 
            ammoDiv.appendChild(img);
        });
    }
});