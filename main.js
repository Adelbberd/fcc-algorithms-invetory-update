function updateInventory(arr1, arr2) {
	let curInvObj = Object.assign(
		...arr1.map((currElem) => {
			return { [currElem[1]]: currElem[0] };
		})
	);

	let newInvObj = Object.assign(
		...arr2.map((currElem) => {
			return { [currElem[1]]: currElem[0] };
		})
	);

	for (let key in newInvObj) {
		if (curInvObj.hasOwnProperty(key)) {
			curInvObj[key] = curInvObj[key] + newInvObj[key];
		} else {
			curInvObj[key] = newInvObj[key];
		}
	}
	console.log(curInvObj);

	return arr1;
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

updateInventory(curInv, newInv);
