//Find all permutations of given string. 
//For example, if the given string is xyz, then the outcome should be xyz, xzy, yxz, yzx, zxy, zyx, and so on.

const inputValues = [
    ['xyz'],
    [],
    ['s'],
    ['code'],
 ];
 
 const getPermutations = (input) => {
    if(!input){
        console.log('There is no characters to permut');
        return;
    }
    if(input.length === 1){
       return input;
    }
    const permutations = [];
    [...input].forEach((element, index) => {
        const remainingChars = input.slice(0, index) + input.slice(index + 1);
        [...remainingChars].forEach((remainingElement, indexRemaining) => {
            permutations.push(element + getPermutations(remainingChars)[indexRemaining]);
        });
    });
    return permutations;
 }
 
 (() => {
     inputValues.forEach(element => {
         console.log(`For input [ ${element} ]`);
         console.log(getPermutations(element[0]));
     });
 }
 )();