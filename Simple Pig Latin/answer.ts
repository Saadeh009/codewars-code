/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
*/

const words = "vMrVATwGaExXw ? tgxCTsbqfjer . . rVAqFFsFQjlukAIlnWj y RSUnnpxSidpXkayzfko . vtEUGQQnKKElNQ SyEsz . rOOcBA XjhojzuiaFUgGVeM AEMsXVCVsfyo PFZYWHCJLnTLNKKP  nLzmnowSlZjFoMIG . M . ! wslhPetm nvBSwS EuBh TdUrYkY LsCSIsGKIfP be ? SqDCUgInbm EMGJmfaEfZ SobL YvskXsZ NbuiGI"
const pigIt = (a : string) : string =>  {

    let wordsArr = a.split(" ").map(word => {
       if (/[^a-zA-Z]/.test(word) || !word) {
         return word
       }
       else {
       return `${word.slice(1)}${word.slice(0,1)}ay`
       }
  })

  return wordsArr.join(" ")
}
console.log(pigIt(words))