function arrToObject(arr1, arr2) {
	if (arr1.length === 0) {
		var curInvObj = {}; // Convert empty array to an empty object.
	} else {
		var curInvObj = Object.assign(
			...arr1.map((currElem) => {
				return { [currElem[1]]: currElem[0] };
			})
		);
	} // End of else.

	if (arr2.length === 0) {
		var newInvObj = {}; // Convert empty array to an empty object.
	} else {
		var newInvObj = Object.assign(
			...arr2.map((currElem) => {
				return { [currElem[1]]: currElem[0] };
			})
		);
	} // End of else.
	return [curInvObj, newInvObj];
}

// Sort the updated inventory alphabetically by keys.
function sortInventory(obj) {
	let sortedObj = Object.keys(obj)
		.sort()
		.reduce((prevArray, curKey) => {
			let innerArray = [obj[curKey], curKey];
			prevArray.push(innerArray);
			return prevArray;
		}, []);
	return sortedObj; // updated inventory array.
}

function updateInventory(arr1, arr2) {
	let [updatedInvObj, newInvObj] = arrToObject(arr1, arr2);

	for (let key in newInvObj) {
		if (updatedInvObj.hasOwnProperty(key)) {
			updatedInvObj[key] = updatedInvObj[key] + newInvObj[key];
		} else {
			updatedInvObj[key] = newInvObj[key];
		}
	}

	return sortInventory(updatedInvObj);
}

// Example inventory lists
var curInv = [
	[21, 'Bowling Ball'],
	[2, 'Dirty Sock'],
	[1, 'Hair Pin'],
	[5, 'Microphone'],
];

var newInv = [
	[2, 'Hair Pin'],
	[3, 'Half-Eaten Apple'],
	[67, 'Bowling Ball'],
	[7, 'Toothpaste'],
];

console.log(updateInventory(curInv, newInv));
