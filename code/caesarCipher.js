function caesarCipher(str, num) {
    let newStr = '';
    let newCode;
  
    for (let i = 0; i < str.length; i++) {
        // char is not a letter
      if ((/[^a-zA-Z]/).test(str.charAt(i))) {
        newStr += str.charAt(i)
      } else {
        // upper case       
        if (str.charCodeAt(i) <= 90) {
          newCode = ((str.charCodeAt(i) - 65) + num) % 26 + 65;
          newStr += String.fromCharCode(newCode);
          // lower case
        } else {
          newCode = ((str.charCodeAt(i) - 97) + num) % 26 + 97;
          newStr += String.fromCharCode(newCode);
        }
      }
      
      
    }
    return newStr
  }

  module.exports = caesarCipher;