
/*The sum of the squares of the first ten natural numbers is,

The square of the sum of the first ten natural numbers is,

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.*/











function get_diff(){
    var sum_1 = 0;
    var sum_2 = 0;
    for(var i = 1;i <=100 ;i++){
        sum_1 += i **2;
        sum_2 += i;}
    return (sum_2**2 - sum_1) ;
}

answer = get_diff()
console.log("the result is " + answer);
