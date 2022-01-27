function ready(fn) {
    if (document.readyState != "loading") {
        fn();
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

function renderYear() {
    const year = document.getElementById("year");
    const date = new Date();
    const get_year = date.getFullYear();
    year.innerHTML = ` ${get_year}`;
}

function renderMatrixAnimation() {
    const canvas = document.querySelector("canvas"),
        ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/\\;:[]{}".split("");

    const fontSize = 10;
    const columns = canvas.width / fontSize;

    var drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }
    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, .1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillStyle = "#0f0";
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            drops[i]++;
            //need to improve
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
                drops[i] = 0;
            }
        }
    }

    return setInterval(draw, 33);
}
ready(() => {
    renderYear();
    renderMatrixAnimation();
});

