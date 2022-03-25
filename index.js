

function Deleteme (){
 document.getElementById("MYresult").value =""
}
function calculator (Newvalue){
document.getElementById("MYresult").value += Newvalue;
}

function Answer(){
 
    var a = document.getElementById("MYresult").value;
    var b = eval(a);
    document.getElementById("MYresult").value=b
}