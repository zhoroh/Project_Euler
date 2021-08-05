
/*A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.*/






var max_ = "";


function _reverse_(x) {
    reverse_string = "";
    for (var i = x.length - 1;(i > 0 || i === 0);i--){
        reverse_string += x[i];
    }
    return reverse_string;
}



for (var first_ = 900; first_ < 1000; first_++) {
    for ( var second_ = 900; second_ < 1000; second_++){
        test_value = first_ * second_;
        test_value = test_value.toString();
        reverse_ = _reverse_(test_value);
        if (test_value === reverse_) {
            var numbers = [];
            numbers.unshift(first_);
            numbers.unshift(second_)
            var max_ = test_value;
        }
        
        
        
    }
    
}

console.log("This are the list of numbers that give the palindrome : " + numbers);
console.log("the palindrome is : " + max_);