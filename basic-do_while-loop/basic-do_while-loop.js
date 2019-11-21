var text = "";
var i = 15;
do {
  text += "<br>The number is " + i;
  i--;
}
while (i >=0) {
  document.getElementById("do_while").innerHTML = text;
}
