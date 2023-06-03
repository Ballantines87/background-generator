var h3 = document.querySelector("h3");
var color1 = document.getElementById("1");
var color2 = document.getElementById("2");
var rand = document.getElementById("rand");

color1.addEventListener("input", (e) => {
    var body = document.querySelector("body");
    body.style.background = `linear-gradient(to right, ${e.target.value}, ${color2.value})`;
    showChanges(body);
})

color2.addEventListener("input", (e) => {
    
    var body = document.querySelector("body");
    body.style.background = `linear-gradient(to right, ${color1.value}, ${e.target.value})`;
    showChanges(body);
})

rand.addEventListener("click", randomizeColors);

function randomizeColors() {
    var colorOneRand = "#" + Math.round(Math.random().toPrecision(6)*1000000).toString();
    var colorTwoRand = "#" + Math.round(Math.random().toPrecision(6)*1000000).toString();
    var body = document.querySelector("body");
    body.style.background = `linear-gradient(to right, ${colorOneRand}, ${colorTwoRand})`;
    showChanges(body);
}

function showChanges(body) {
    h3.textContent = body.style.background + ";";
}
