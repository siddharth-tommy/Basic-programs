function checkPrime(number) {
    number = prompt("enter the num want to check", "12")
    if (number === 1 || number <= 0) {
        alert("Not comes under this category and not a prime number")
    }
    else if (number === 2) {
        alert("Prime number")
    }
    else {
        
            if (number % 2 != 0) {
                alert("its a prime number")
                return
            }
            else {
                alert("not a prime number")
                return
            }
            
        
    }
    

}