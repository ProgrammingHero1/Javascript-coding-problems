var str = "I am becoming a web dev!";
var reverse = '';

for(var i = 0; i<str.length; i++){
    var element = str[i];
    reverse = element + reverse;
}
console.log(str);
console.log(reverse);
