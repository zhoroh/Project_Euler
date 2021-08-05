
/*The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?*/





var number = 600851475143;
var divisor = 2;

while (number > 1) {
	if (number % divisor === 0) {
		number = (number / divisor);}
	else{
		divisor +=1;}
}

console.log(divisor);

console.log("the highest prime factor of 600851475143  is " + divisor);