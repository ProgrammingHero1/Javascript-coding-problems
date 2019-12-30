var a = 15;
var b = 69;
// solution 1
if(a > b){
    console.log("a is bigger", a);
}
else{
    console.log("b is bigger", b);
}
//solution 2
var max = Math.max(a, b);
console.log("max value is ", max);

//max in an array
var nums = [4, 7, 1, 34, 56, 112, 65, 43];
var largest = nums[0];

for(var i = 0; i < nums.length; i++){
    var element = nums[i];
    if(element > largest){
        largest = element;
    }
}
console.log("largest is", largest);
