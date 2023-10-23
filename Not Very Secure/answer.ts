/*
In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

At least one character ("" is not valid)
Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
No whitespaces / underscore
*/
const hello = "PassW0rd"
const hard = "63OWiEo!ONjNl6Sw2zHgc s"
const ex2 = "FBsx4lkVh4f_NOFDPYjMh4ldtfXa7s"
export function alphanumeric(string: string): boolean {
  //your code here
  const initRgx = /\w+/
  const rgx = /[^\W_]+/
  let tmp: any = string.match(initRgx)
  console.log(tmp)
  if (tmp[0]) {
    if (tmp[0] === string) return true
  }
  return false;
}
console.log(alphanumeric(ex2))
