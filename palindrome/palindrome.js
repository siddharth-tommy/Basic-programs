function initialDisplay() {
    document.getElementById("success").style.display = "none";
    document.getElementById("fail").style.display = "none";
}
function checkPalindrome() {
    debugger
    var num = document.getElementById("palindrome").value;
    if(num==undefined || num=="" || num.trim()==""){
        alert("please enter proper value to check")
    }
    else if (num == num.split('').reverse().join('')) {
        document.getElementById("success").style.display = "block";
        document.getElementById("fail").style.display = "none";

    }
    else {
        document.getElementById("success").style.display = "none";
        document.getElementById("fail").style.display = "block";
    }
}


// whenever checking for reverse of a string we should make it as an array by using split function then reverse and join again
// else it won't work properly