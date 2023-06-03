var css = document.querySelector("h3");
var color1 = document.getElementById("1");
var color2 = document.getElementById("2");



color1.addEventListener("input", (e) => {
    console.log(color1);
    console.log(e.target.value);
    var body = document.querySelector("body");
    body.style.background = `linear-gradient(to right, ${e.target.value}, ${color2.value})`;
})

color2.addEventListener("input", (e) => {
    console.log(e.target.value);
    var body = document.querySelector("body");
    body.style.background = `linear-gradient(to right, ${color1.value}, ${e.target.value})`;
})