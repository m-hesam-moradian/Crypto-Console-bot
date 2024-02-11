

let deposit = 100;
let orderID = null;
let trade = null;
let lastTrade = 1;


setInterval(() => {
  console.clear();

  let price = [
    ...document.querySelectorAll(".item-_gbYDtbd .itemTitle-_gbYDtbd"),
  ].find((item) => item.textContent === "Close");

  if (price) {
    console.log(price.nextElementSibling.textContent);
    if (trade) {
      // console.log(trade, trade + trade * 0.01, trade - trade * 0.01);
      if (
        Number(price.nextElementSibling.textContent) >=
        trade + trade * 0.0001
      ) {
        console.log("reach to TP");
        console.log(deposit);
        deposit += 2;
        trade = null;
      } else if (
        Number(price.nextElementSibling.textContent) <=
        trade - trade * 0.0001
      ) {
        console.log("reach to sl");
        console.log(deposit);

        trade = null;
      }
    } else {
      deposit--;
      trade = Number(price.nextElementSibling.textContent);
      console.log("make trade", deposit, trade);
    }
  } else {
    console.log("Price not found");
  }
}, 1000);


