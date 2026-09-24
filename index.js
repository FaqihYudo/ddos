const buttonTop = document.getElementById("buttonTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 100) {
        buttonTop.classList.add("slideIn");
    } else {
        buttonTop.classList.remove("slideIn");
    }

});

function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

function ddosAttack() {
    for (let i = 1; i < 5;) {
        console.log("Perulangan ke-" + i);
    }
}

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

let width;
let height;

function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

const fontSize = 16;
let columns = Math.floor(window.innerWidth / fontSize);

let drops = Array(columns).fill(1);

function drawMatrix() {

    // Membuat jejak angka terlihat memudar
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, width, height);

    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {

        const number = Math.random() > 0.5 ? "1" : "0";

        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillStyle = "#00ff41";
        ctx.fillText(number, x, y);

        // Random menentukan kapan kolom mulai lagi dari atas
        if (y > height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 50);