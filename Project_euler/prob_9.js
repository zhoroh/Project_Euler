/*A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.*/





for (var i = 1; i < 400; i++){
	for(var j = 1; j < 400; j++){
		
		var k = (1000 - i) - j;
		
		if ( i < j < k ){
			if (i**2 + j**2 === k**2) {
				console.log(i*j*k);
			}
		}
	}
}



