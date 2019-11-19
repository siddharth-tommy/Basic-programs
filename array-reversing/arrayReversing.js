function arrayReverse() {
    var originalArray = ["sony", "hp", "dell", "lenovo", "apple"];
    document.getElementById("array").innerHTML = originalArray;
    originalArray.reverse();
    document.getElementById("array").innerHTML = originalArray
}