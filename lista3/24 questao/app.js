$cronometro = document.querySelector("p");
$start = document.querySelector("#start");
$stop = document.querySelector("#stop");
$reset = document.querySelector("#reset");

$stop.onclick = stop;
$start.onclick = start;

let hor, min, sec, inicio;

function update() {
    let now = new Date();
    dif = now - inicio;
    hor = Math.floor(dif / 1000 / 60 / 60);
    dif = dif - hor * 60 * 60 * 1000;
    min = Math.floor(dif / 1000 / 60);
    dif = dif - min * 60 * 1000;
    sec = Math.floor(dif / 1000);
}

function render() {
    let horas = String(hor).padStart(2, "0");
    let minutos = String(min).padStart(2, "0");
    let segundos = String(sec).padStart(2, "0");
    $cronometro.innerText = `${horas}:${minutos}:${segundos}`;
}

function reset() {
    inicio = new Date();
}

let handler;
function start() {
    handler = setInterval(function() {
        update();
        render();
    },
    1000);
}

function stop() {
    clearInterval(handler);
}

reset();
start();