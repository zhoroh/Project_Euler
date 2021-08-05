/*2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?*/



var list_ = [];
for (var count = 0; count<20; count++){
    list_[count] = count + 1;
}

function get_prime_factors_of_list(x){
    var dict = {};
    var list_of_prime = [];
    for(var i = 1 ;i < list_.length;i++){
        var number = list_[i];
        var divisor = 2 ;
        var new_list = [];
        
        while (number> 1){
            if (number % divisor === 0){
                number = (number / divisor);
                new_list.push(divisor);
                if (divisor in list_of_prime){
                  continue} 
                else {
                    list_of_prime.push(divisor);
                }
            }
            else{
                divisor +=1;}
             }
        dict[i +1] = new_list;}
    var list_of_prime = list_of_prime.filter((v, i, a) => a.indexOf(v) === i); 

    return [dict,list_of_prime];
    
}


returned =  get_prime_factors_of_list(list_)


function get_value(value){
    sum_ = 1
    for(var i = 0;i < value[1].length; i++){
        var _list_ =[]
        for(var key in value[0]){
            var new_count = 0;
            for(var count = 0;count < value[0][key].length; count++){
                if (value[0][key][count] === value[1][i]){
                    new_count +=1;}
                _list_.push(new_count);}
        }   
        var _list_ = _list_.sort();
        popped = _list_.pop();
        sum_*= value[1][i]**popped;
    }
    
    
    return sum_;
}

                

sum = get_value(returned)
console.log(sum);