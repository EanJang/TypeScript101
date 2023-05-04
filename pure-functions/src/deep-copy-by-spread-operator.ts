const originArr = [1, 2, 3, 4];
const deepCopiedArr = [...originArr];
deepCopiedArr[0] = 0;

console.log(originArr, deepCopiedArr); //[1, 2, 3, 4], [0, 2, 3, 4]
