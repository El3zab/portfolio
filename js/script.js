var linkedIn = document.getElementById("in")
var gitHub = document.getElementById("git")
var whatsApp = document.getElementById("whats")
var gmailAccount = document.getElementById("gmail")
var face = document.getElementById("face")
var x = document.getElementById("x")


var inputOne = document.getElementById("edu");
var inputTwo = document.getElementById("cor");
var inputThree = document.getElementById("exp");

var list = document.getElementById("educ-box");
var sta = document.getElementById("cours-box");
var date = document.getElementById("exp-box");


linkedIn.onclick = function () {
    window.open("www.linkedin.com/in/ahmed-3zab99")
}
gitHub.onclick = function () {
    window.open("https://github.com/El3zab")
}
whatsApp.onclick = function () {
    window.open("https://wa.me/2001098497191")
}
gmailAccount.onclick = function () {
    window.open("https://mailto:ahmed.3zab99@gmail.com")
}
face.onclick = function () {
    window.open("https://www.facebook.com/ahmedel3azab/")
}
x.onclick = function () {
    window.open("https://twitter.com/Ahmedazab2016")
}



inputOne.onclick = function () {
    list.style.display = "grid";
    sta.style.display = "none";
    date.style.display = "none";
}
inputTwo.onclick = function () {
    list.style.display = "none";
    sta.style.display = "grid";
    date.style.display = "none";
}
inputThree.onclick = function () {
    list.style.display = "none";
    sta.style.display = "none";
    date.style.display = "grid";
}