function convertToBoolean(arr){
    return arr.map(elem => !!elem)
}

console.log(convertToBoolean([``, NaN, false, null, false, 0]))