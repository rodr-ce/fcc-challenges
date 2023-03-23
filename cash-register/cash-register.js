const CURRENCY_TABLE = {
    "ONE HUNDRED": 10000,
    "TWENTY": 2000,
    "TEN": 1000,
    "FIVE": 500,
    "ONE": 100,
    "QUARTER": 25,
    "DIME": 10,
    "PENNY": 1
}

function checkCashRegister(price, cash, cid) {
  let change = cash * 100 - price * 100;
  let changeArray = [];
  let drawerCash = 0;

  for (let i = 0; i < cid.length; i++) {
    drawerCash += cid[i][1] * 100;
  }

  let reverseCid = cid.filter(elem => elem[1] !== 0).reverse();

  if (change > drawerCash) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else if (change === drawerCash) {
    return {status: "CLOSED", change: cid }
  } else {
    for (let currency of reverseCid) {
      let takingOut = [currency[0], 0]
      currency[1] = currency[1]*100
      while (change >= CURRENCY_TABLE[currency[0]] && currency[1] > 0) {
        change -= CURRENCY_TABLE[currency[0]]
        currency[1] -= CURRENCY_TABLE[currency[0]]
        takingOut[1] += CURRENCY_TABLE[currency[0]]
      }
      if (takingOut[1] !== 0) {
        takingOut[1] /=100
        changeArray.push(takingOut)
      }
    }
    if (change > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } else {
      return {status: "OPEN", change: changeArray};
    }
  }
}


checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])