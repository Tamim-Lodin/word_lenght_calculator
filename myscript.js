var print = function(msg){
    document.getElementById("output").innerHTML = "The word length is: " + msg;
}
document.getElementById("btn").onclick = function(event){
    print(document.getElementById('str').value.length)
}