var a = 5;
var b = 7;
console.log("before swap: a =", a,"b =", b);
// solution 1
var temp = a;
a = b;
b = temp; 
console.log("after swap: a =", a,"b =", b);
// solution 2
var x = 5;
var y = 7;
console.log("before swap: x =", x,"y =", y);
[x,y] = [y,x]
console.log("after swap: x =", x,"y =", y);
//solution 3
var p = 5;
var q = 7;
console.log("before swap: p =", p,"q =", q);
p = p + q;
q = p - q;
p = p - q;
console.log("after swap: p =", p,"q =", q);