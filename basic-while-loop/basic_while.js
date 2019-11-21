var text = "";
var i = 0;
while (i < 15) {
  text += "<br>The number is " + i;
  i++;
}
document.getElementById("while").innerHTML = text;