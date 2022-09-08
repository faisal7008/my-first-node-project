let sum = 0;
const a = [1, 2, 3];
a.forEach(getSum);
console.log(sum);
function getSum(ele) {
   sum += ele;
}