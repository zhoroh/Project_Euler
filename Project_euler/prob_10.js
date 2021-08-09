var Prime = function(){
    this.sum_ = 0;
    this.count = 2;
    this.condition = true;
    this.where_work_is_done = function(){
        while (this.condition === true){
            this.isprime = true;
            for (var x = 2; x < Math.round(Math.sqrt(this.count) + 1); x++){
                if (this.count % x === 0){
                    this.isprime = false;
                    break}
            }
            if (this.isprime){
                if (this.count <= 2000000){
                    this.sum_ += this.count;}
                else{
                    return this.sum_;
                    this.condition = false;}
            }
            this.count +=1;
        }
        
    }
}
           
		   
var results = new Prime()
console.log(results.where_work_is_done())