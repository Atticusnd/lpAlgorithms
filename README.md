# About these algorithms:

> Find all pairs of integers whose sum is equal to a given number.
For example, if the input integer value is 2, 5, 4, 9, 11 and the given sum is 9, the output should be 5,4.

Run with `$ node sumPairs.js`


> Find missing numbers in Array with Duplicate integers.
For example, if the given string is 1, 1, 2, 3, 5, 5, 7, 9, 9, 3 and contains a number from 1 to 9. In this case, missing numbers are 4, 6, and 8.

Run with `$ node findMissingNumbers.js `	

> Find all permutations of given string.
For example, if the given string is xyz, then the outcome should be xyz, xzy, yxz, yzx, zxy, zyx, and so on.

Run with `$ node findPermutations.js`	

## Do you want to add more test cases?

On any file you'll find `inputValues` array, you need to add a new row and keep existing format by each algorithm, for example on **findPermutations** algorithm if you want to add *day*:

Before changes:

```javascript
 const  inputValues = [
	['xyz'],
	[],
	['s'],
	['code'],
];
```
After add value: 

```javascript
 const  inputValues = [
	['xyz'],
	[],
	['s'],
	['code'],
	['day']
];
```

At the final of each file you will find an IIFE that will go throw all the test cases and run the algorithm, like this one on *findPermutations.js*:

```javascript
 (() => {
	inputValues.forEach(element  => {
	console.log(`For input [ ${element} ]`);
	console.log(getPermutations(element[0]));
	});
}
)();
```
