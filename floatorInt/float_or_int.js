function floatOrInt(){
    a=document.getElementById("test").value
    if(a%1===0){
        alert(a + " is int")
    }
    else{
        alert(a + " is float")
    }
}