console.log(getMiddle([12, 18, 11, 5,]));
console.log(getMiddle([12, 18, 11, 5, 8]));
console.log(getMiddle([12, 18, 11, 5, 8, 2]));
function getMiddle(arr){
     return arr[Math.floor((arr.length - 1) / 2)];
}