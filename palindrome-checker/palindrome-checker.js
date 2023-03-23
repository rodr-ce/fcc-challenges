function palindrome(str) {
  let newStr = str.replace(/[^A-Z0-9]+/ig, "").toLowerCase();
  let reversed = "";
  for (let i = newStr.length - 1; i >= 0; i--) {
    reversed += newStr[i]
  }
  return newStr === reversed
}

palindrome("eye");