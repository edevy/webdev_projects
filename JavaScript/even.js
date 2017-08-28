function isEven(x) {
	return x % 2 === 0;
}


// function fact(x){

// 	if (x === 0){
// 		return 1;
// 	} 

// 	else {
// 		return x * fact(x-1); 
// 	}
// }


function fact(num){

	var result = 1;
	for (var i = 2; i <= num; i++){
			result*= i;
	}
	return result;
}





function kebabTosnake(str){

	var input = str.replace(/-/g,"_");

	return input;
}