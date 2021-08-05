/*Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.*/






var start = 1;
var start_ = 2;
var sum_ = 2;


while (true) {
	var new_num = start + start_ ;
	if ( new_num % 2  === 0) {
		sum_ += new_num ; }
	start = start_ ;
    start_ = new_num ;
	if (new_num > 4000000) {
		break ;}
}

console.log(sum_)
