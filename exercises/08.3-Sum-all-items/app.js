function sumTheElements(theArray) {
	let total = 0;
	for (let i = 0; i < theArray.length; i++){
		total += theArray[i]
	}


	return total;
}
console.log(sumTheElements([2,13,34,5]));
