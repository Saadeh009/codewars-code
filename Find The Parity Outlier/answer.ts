/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers.
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
Write a method that takes the array as an argument and returns this "outlier" N.
*/

const integers = [2, 4, 0, 100, 4, 11, 2602, 36]

function findOutlier(integers: number[]): number {
    let oddArr: number[] = []
    let evenArr: number[] = []
    for (let el of integers) {
      el % 2 === 0 ? evenArr.push(el) : oddArr.push(el)
        if (oddArr.length > 1 && evenArr.length === 1) {
            return evenArr[0]
        }
        if (evenArr.length > 1 && oddArr.length === 1) {
            return oddArr[0]
        }
    }
    return 0
  }
console.log(findOutlier(integers))