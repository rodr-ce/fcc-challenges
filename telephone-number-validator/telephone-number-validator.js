let validRegex = [/^\d{3}-\d{3}-\d{4}$/, 
    /^(\(\d{3}\))\d{3}-\d{4}$/, 
    /^(\(\d{3}\)) \d{3}-\d{4}$/, 
    /^(\d{3}) \d{3} \d{4}$/, 
    /^(\d{10})$/,
    /^1 (\d{3}) \d{3} \d{4}$/,
    /^1 (\d{3})-\d{3}-\d{4}$/,
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
    /^1\(\d{3}\)\d{3}-\d{4}$/]

function telephoneCheck(str) {
  let valid = validRegex.some((regs) => regs.test(str))
  return valid
}

telephoneCheck("555-555-5555");
