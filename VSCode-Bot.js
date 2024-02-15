//////my bot

let deposit = 10;
let orderID = null;
let trade = null;
let lastTrade = 1;
let MonetFlowing = 0.1;
let DinamicPercent = 0.001;

const intervalId = setInterval(() => {
  // console.clear();
  if (deposit <= 0) {
    clearInterval(intervalId);
    console.log("your liquaded");
    console.log("your liquaded");
    console.log("your liquaded");
    console.log("your liquaded");
    console.log("your liquaded");
    console.log("your liquaded");
    console.log("your liquaded");
    console.log("your liquaded");
    console.log("your liquaded");
    console.log("your liquaded");
    console.log("your liquaded");
    console.log("your liquaded");
  }
  const EMA = document.querySelectorAll(
    ".valueValue-l31H9iuA.apply-common-tooltip"
  );
  let GreenMA = Number(EMA[0].innerHTML);
  let RedMA = Number(EMA[1].innerHTML);

  let price = [
    ...document.querySelectorAll(".item-_gbYDtbd .itemTitle-_gbYDtbd"),
  ].find((item) => item.textContent === "Close");

  if (price) {
    if (MonetFlowing > deposit) {
      MonetFlowing = deposit;
    }
    if (trade) {
      if (deposit < 5) {
        console.log(
          "TP:",
          trade + trade * DinamicPercent,
          "SL:",
          trade - trade * DinamicPercent
        );
        DinamicPercent = 1;
      }

      if (GreenMA > RedMA) {
        if (
          Number(price.nextElementSibling.textContent) >=
          trade + trade * DinamicPercent
        ) {
          // console.log(deposit);
          deposit += MonetFlowing;
          MonetFlowing = 0.1;
          trade = null;
          console.log("reach to TP", deposit);
        } else if (
          Number(price.nextElementSibling.textContent) <=
          trade - trade * DinamicPercent
        ) {
          deposit -= MonetFlowing;
          console.log("reach to sl", deposit);
          // console.log(deposit);

          MonetFlowing *= 2;
          trade = null;
        }
      } else {
        if (
          Number(price.nextElementSibling.textContent) <=
          trade - trade * DinamicPercent
        ) {
          // console.log(deposit);
          deposit += MonetFlowing;
          MonetFlowing = 0.1;
          trade = null;
          console.log("reach to TP", deposit);
        } else if (
          Number(price.nextElementSibling.textContent) >=
          trade + trade * DinamicPercent
        ) {
          deposit -= MonetFlowing;
          console.log("reach to sl", deposit);
          // console.log(deposit);

          MonetFlowing *= 2;
          trade = null;
        }
      }
    } else {
      // deposit;
      trade = Number(price.nextElementSibling.textContent);
      // console.log("make trade", deposit, trade);
    }
  } else {
    console.log("Price not found");
  }
}, 1000);

// let deposit = 100;
// let orderID = null;
// let trade = null;
// let lastTrade = 1;
// let MonetFlowing = 1;

// setInterval(() => {
//   // console.clear();

//   let price = [
//     ...document.querySelectorAll(".item-_gbYDtbd .itemTitle-_gbYDtbd"),
//   ].find((item) => item.textContent === "Close");

//   if (price) {
//     // console.log(price.nextElementSibling.textContent);
//     if (trade) {
//       if (
//         Number(price.nextElementSibling.textContent) >=
//         trade + trade * 0.0001
//       ) {
//         // console.log(deposit);
//         deposit += MonetFlowing;
//         MonetFlowing = 1;
//         trade = null;
//         console.log("reach to TP", deposit);
//       } else if (
//         Number(price.nextElementSibling.textContent) <=
//         trade - trade * 0.0001
//       ) {
//         deposit -= MonetFlowing;
//         console.log("reach to sl", deposit);
//         // console.log(deposit);

//         MonetFlowing *= 2;
//         trade = null;
//       }
//     } else {
//       // deposit;
//       trade = Number(price.nextElementSibling.textContent);
//       // console.log("make trade", deposit, trade);
//     }
//   } else {
//     console.log("Price not found");
//   }
// }, 1000);
////ai bot
