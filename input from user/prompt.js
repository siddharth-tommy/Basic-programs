function prompBox(){
    var userName
    var Name
    
    userName=prompt("Please Enter ur Name", "Siddhu")
    Name="hai " + userName + " how r u today ?"
    if(userName!=undefined && userName!=null){
        document.getElementById("name").innerHTML=Name
    }
}