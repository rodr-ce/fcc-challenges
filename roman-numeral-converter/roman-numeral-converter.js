function definirUnidad(numero) {
    let unidad = "";
    for (let i = 0; i <= numero; i++) {
      switch (i) {
        case 0:
          break;
        case 1:
        case 2:
        case 3:
            unidad += "I";
          break;
        case 4:
            unidad = "IV";
          break;
        case 5:
            unidad = "V";
          break;
        case 6:
        case 7:
        case 8:
            unidad += "I"
          break;
        case 9:
            unidad = "IX"
          break;
        default:
            unidad = '';
            break;
      }
    }
    return unidad
}

function definirDecena(numero) {
    let decena = "";
    for (let i = 0; i <= numero; i++) {
      switch (i) {
        case 0:
          break;
        case 1:
        case 2:
        case 3:
            decena += "X";
          break;
        case 4:
            decena = "XL";
          break;
        case 5:
            decena = "L";
          break;
        case 6:
        case 7:
        case 8:
            decena += "X"
          break;
        case 9:
            decena = "XC"
          break;
        default:
            decena = '';
            break;
      }
    }
    return decena
}

function definirCentena(numero) {
    let centena = "";
    for (let i = 0; i <= numero; i++) {
      switch (i) {
        case 0:
          break;
        case 1:
        case 2:
        case 3:
            centena += "C";
          break;
        case 4:
            centena = "CD";
          break;
        case 5:
            centena = "D";
          break;
        case 6:
        case 7:
        case 8:
            centena += "C"
          break;
        case 9:
            centena = "CM"
          break;
        default:
            centena = '';
            break;
      }
    }
    return centena
}

function definirMiles(numero) {
    let miles = "";
    for (let i = 0; i <= numero; i++) {
        switch (i) {
          case 0:
            break;
          case 1:
          case 2:
          case 3:
              miles += "M";
            break;
          default:
              miles = '';
              break;
        }
      }
      return miles;
}


function convertToRoman(num) {
    let romanNum = "";
    let number = num.toString()

    if (number.length === 1) {
        romanNum = definirUnidad(num);
    } else if (number.length === 2) {
        romanNum = definirDecena(number[0]) + definirUnidad(number[1]);
    } else if (number.length === 3) {
        romanNum = definirCentena(number[0]) + definirDecena(number[1]) + definirUnidad(number[2]);
    } else if (number.length === 4) {
        romanNum = definirMiles(number[0]) + definirCentena(number[1]) + definirDecena(number[2]) + definirUnidad(number[3]);
    }
    return romanNum
}
