function factorialNum() {
 var i,que,factValue;
 factValue=1;
 que=Number(document.getElementById("ques").value)
for(i=1;i<=que;i++){
    factValue=factValue*i
}
document.getElementById("ans").value=factValue
}
// initially we have to check whether the input is number or not so we use Number function if there is any string or NaN comes
//and the starter value setted for one (factValue=1)