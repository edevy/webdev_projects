//printReverse()
function printReverse(array) {
	for (var i = array.length-1; i >= 0 ; i--){
		console.log(array[i]);
	}
}

function isUniform(array){
	for (var i = 1; i < array.length; i++){
		if (array[i] !== array[0]){
		return false;
		}
	}
	return true;
}

// function sumArray(array){
// 	var result = 0;
// 	for (var i = 0; i <= array.length-1; i++){
// 		result = result + array[i];
// 	}
// 		console.log(result);
// }

function sumArray(arr){
	var total = 0;
	arr.forEach(function(element){
		total += element;
	});
	return total;
}

function max(array){
	var max = array[0];
	for (var i = 1; i < array.length; i++){
		if (array[i] > max){
				max = array[i];
		}
	}
	return max;
}