function removeDuplicate() {
    var arrAy = [
       0,2,3,1,0,2,0,4,9,6
    ]
    var uniqueArray=[...new Set(arrAy)]
    var result=uniqueArray.sort()
    document.getElementById("duplicate").innerHTML=result;
}