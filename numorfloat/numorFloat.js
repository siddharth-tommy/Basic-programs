function checkNumorFloat() {
    var num=prompt("enter the num to check its integer or float","9.7")
    // if (typeof num =="number"){
        if(num=='' || num.trim()==''){
            alert("enter proper value")
            return
        }
       else if(Number(num)==num && num%1===0){
            alert('the number is int')
        }
        else{
            alert('the num is float')
        }
    // }
}
// initially we have to check whether the input is number or not