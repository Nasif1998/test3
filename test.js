function arrayString(str){
    var reverse = "";
    for(var i =0; i<str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

var speech = "Hello Alien vai brother."
var alien = arrayString(speech);
console.log(alien);