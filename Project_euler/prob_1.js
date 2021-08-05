
/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.*/



var sum_of_mult_of_3_and_5 = 0;

function Sum(){
	for (var x = 1; x < 1000 ;x ++) {
		if (x % 3 === 0 || x % 5 === 0){
			sum_of_mult_of_3_and_5 += x}
    }
	return sum_of_mult_of_3_and_5;}

sum = Sum()

console.log(sum);





