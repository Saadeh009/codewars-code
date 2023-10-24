/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, 
continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples

16  -->  1 + 6 = 7
942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/


const n = 864755919085
export const digitalRoot = (n:number):number => {
  let tmpArr = n.toString().split('')
  let res = 0 
    while (tmpArr.length > 1) {
      for (let i = 0; i < tmpArr.length; i++) {
        res += Number(tmpArr[i])
      }
      tmpArr = res.toString().split('')
      res = 0
    }
  return Number(tmpArr[0])
}
console.log(digitalRoot(n))
