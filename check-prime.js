function isPrime(num){
    for(var i = 2; i<num; i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(7));