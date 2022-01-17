// Find all pairs of integers whose sum is equal to a given number. 
// For example, if the input integer value is 2, 5, 4, 9, 11 and the given sum is 9, the output should be 5,4.

const inputValues = [
        { input: [ 2, 5, 4, 9, 11 ], target: 9 },
        { input: [], target: 9 },
        { input: [ 2, 5, 1, 3, 4 ], target: 5 },
        { input: [ 2 ], target: 3 },
        { input: [ 2, -5, -1, 3, 10 ], target: 5 },
        { input: [ 2, -5, -1, -4, 10, -2 ], target: -6 },
        { input: [ 8, -2, 7, -4, 10, 1 ], target: 7 },

]


const sum = (input, target) => {
    if(input.length < 2) {
        console.log('There is no enough data to proceed, please be sure to give more than one number on input');
        return;
    }
    const validPairs = [];
    input.forEach((currentValue, index) => {
        let numberTofind = target - currentValue;
        if(input.includes(numberTofind, index)){
            validPairs.push([ currentValue, numberTofind]);
        }
    });
    if(validPairs.length === 0){
        console.log(`There are no pairs for whos sum ${target}`);
    } else {
        console.log(validPairs);
        return validPairs
    }
}

(() => {
    inputValues.forEach(element => {
        const { input, target } = element;
        console.log(`For input [ ${input} ] and target ${target}`);
        sum(input, target);
    });
}
)();