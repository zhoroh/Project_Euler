
/*By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?*/




function prime_(){
    var count = 2;
    var target = 0;
    var condition = true;
    while (condition === true){
        var isprime = true;
        for (var x = 2; x < Math.round(Math.sqrt(count) + 1); x++){
            if (count % x === 0){
                var isprime = false;
                break}
        }
        if (isprime){
            target +=1;
            if (target === 10001){
                console.log(count);
                var condition = false;}
        }
        
        count +=1;}
}
prime_()

