function rot13(str) {
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let newStr = "";
    let index;

    for (let i = 0; i < str.length; i++) {

        alphabet.indexOf(str[i]) + 13 >= 26 ? index = alphabet.indexOf(str[i]) + 13 - 26
         : index = alphabet.indexOf(str[i]) + 13; 
            
        if (alphabet.indexOf(str[i]) != -1) {
            newStr = newStr + alphabet[index]
        } else {
            newStr = newStr + str[i]
        };
    };
    return newStr;
}


rot13("SERR PBQR PNZC");