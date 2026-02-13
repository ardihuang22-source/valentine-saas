const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let size = 18;

noBtn.addEventListener("click", function() {
    size += 10;
    yesBtn.style.fontSize = size + "px";
    yesBtn.style.padding = (size/2) + "px " + size + "px";
});

yesBtn.addEventListener("click", function() {
    alert("I knew you love Ardi forever ❤️🌷");
});
