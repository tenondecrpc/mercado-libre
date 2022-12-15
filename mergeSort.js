// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.info("Welcome to Programiz!");

const mergeSort = array => {
	const half = Math.floor(array.length / 2);
  
	if (array.length < 2) {
		return array;
	}

	const arrayLeft = mergeSort(array.slice(0, half));
	const arrayRight = mergeSort(array.slice(half));

	const arrayMerge = merge(arrayLeft, arrayRight); 
	return arrayMerge;
};

const merge = (arrayLeft, arrayRight) => {
	const arraySort = [];
	const indexZero = 0;
	while (arrayLeft.length && arrayRight.length) {
		if (arrayLeft[indexZero] < arrayRight[indexZero]) {
			arraySort.push(arrayLeft.shift());
		} else {
			arraySort.push(arrayRight.shift());
		}
	}

	const array = arrayLeft.slice().concat(arrayRight.slice());
	const result = arraySort.concat(array);
	return result;
};

const array = [12, 5, 9, 6];

console.info("Original array", array);
console.info("New array", mergeSort(array));