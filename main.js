// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function ageToAbilities(age){
    let message = ''
    if (age<16){
        message = "You can't drive."
    } else if (age>=16 && age <=17){
        message = "You can drive but not vote."
    } else if (age>17 && age<=24){
        message = 'You can vote but not rent a car.' 
    } else {
        message =  'You can do pretty much anything.'
    }
    return message
}

function oddIndices(arr){
    let newArr=[]
    for (let i = 0; i<arr.length; i++ ){
        if (i%2 !==0){
            newArr.push(arr[i])
        }
    }
    return newArr
}

function numOddValues(arr){
    let quant = 0
    for (const num of arr){
        if (num%2 !==0){
            quant++
        }
    }
    return quant
}

function averageStringLength(arr){
    let num = 0;
    if (arr.length !==0){
        for (const word of arr){
            for (const letter of word){
                num++
            }
        } num = num/arr.length
    }
    return num
}

function firstPunctuationIndex(str){
    let index = 0
    let isMark = false
    for (const char of str){
        if (char === '.' || char === '?' || char === '!'){
            index = str.indexOf(char)
            isMark = true
            break;
        } 
    } if (isMark === false){
        index = -1
    }
    return index
}

function getPlace(sortedList, newScore){
    sortedList.push(newScore)
    let rank = ''
    sortedList = sortedList.sort(function(a, b) {
        return a - b;
      });
    sortedList = sortedList.reverse()
    const index = (sortedList.indexOf(newScore) + 1).toString()
    if (index.endsWith('1') || index === '1'){
        rank = index + 'st'
    } else if (index.endsWith('2')){
        rank = index + 'nd'
    }else if (index.endsWith('3')){
        rank = index + 'rd'
    } else {
        rank = index + 'th'
    }
    return rank + ' place'
}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === 'undefined') {
    ageToAbilities = undefined;
}
if (typeof oddIndices === 'undefined') {
    oddIndices = undefined;
}
if (typeof numOddValues === 'undefined') {
    numOddValues = undefined;
}
if (typeof averageStringLength === 'undefined') {
    averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === 'undefined') {
    firstPunctuationIndex = undefined;
}
if (typeof getPlace === 'undefined') {
    getPlace = undefined;
}

module.exports = {
    ageToAbilities,
    oddIndices,
    numOddValues,
    averageStringLength,
    firstPunctuationIndex,
    getPlace
};
