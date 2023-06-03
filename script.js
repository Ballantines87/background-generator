var h3 = document.querySelector("h3");
var color1 = document.getElementById("1");
var color2 = document.getElementById("2");

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

function showChanges(body) {
    h3.textContent = body.style.background + ";";
}
