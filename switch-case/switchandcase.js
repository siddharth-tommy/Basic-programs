function switchCase(){
try{
var todayDate=new Date()
var dayName=todayDate.getDay()

switch(dayName){
case 0:
    dayName='today is sunday'
    break
case 1:
    dayName='today is monday'
    break
case 2:
    dayName='today is tuesday'
    break
default:
    dayName='Its not today ...';
    break
case 3:
    dayName='today is wednesday'
    break
case 4:
    dayName='today is thursday'
    break    
}
document.getElementById("day").innerHTML=dayName
}

catch(error){
  alert(error)
}
}

// if the code blocks of all the cases are failed or false the default keyword works and it can be placed at anywhare
// note: if default keyword not placed in end of the code we should add break keyword to that