//Find missing numbers in Array with Duplicate integers. 
//For example, if the given string is 1, 1, 2, 3, 5, 5, 7, 9, 9, 3 and contains a number from 1 to 9. In this case, missing numbers are 4, 6, and 8. 

const inputValues = [
   ['1, 1, 2, 3, 5, 5, 7, 9, 9, 3'],
   [],
   ['1,2,3,4,5,6'],
   ['1, 1, 2, 3, 5, 5, 7, 9, 9, 3, 4, 8, 8']
];

const findMissing = (input) => {
    if(input.length === 0){
        console.log('There is no data on input ');
        return false;
    }
    const mapped = mapDigits(input[0]);
    const missingNumbers = [];
    for (let index = 1; index < 9; index++) {
        if(!mapped[`${index}`]){
            missingNumbers.push(`${index}`);
        }
    }
    missingNumbers.length === 1 ? console.log(`Missing numbers is ${missingNumbers}`) :
    console.log(`Missing numbers are ${missingNumbers}`);
    return missingNumbers;
}

const mapDigits = (string) => {
    const charMap = {};
    charArray = string.split(',').map(function(item) {
        return item.trim();
    });
    charArray.forEach((element) => {
        charMap[element] = charMap[element] + 1 || 1;
    });
    return charMap;
}

(() => {
    inputValues.forEach(element => {
        console.log(`For input [ ${element} ]`);
        findMissing(element);
    });
}
)();