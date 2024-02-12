let deposit = 100;
let orderID = null;
let trade = null;
let lastTrade = 1;
let MonetFlowing = 1;
const intervalId = setInterval(() => {
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
    if (trade) {
      if (GreenMA > RedMA) {
        if (
          Number(price.nextElementSibling.textContent) >=
          trade + trade * 0.0001
        ) {
          deposit += MonetFlowing;
          MonetFlowing = 1;
          trade = null;
          console.log("reach to TP", deposit);
        } else if (
          Number(price.nextElementSibling.textContent) <=
          trade - trade * 0.0001
        ) {
          deposit -= MonetFlowing;
          console.log("reach to sl", deposit);

          MonetFlowing *= 2;
          trade = null;
        }
      } else {
        if (
          Number(price.nextElementSibling.textContent) <=
          trade - trade * 0.0001
        ) {
          deposit += MonetFlowing;
          MonetFlowing = 1;
          trade = null;
          console.log("reach to TP", deposit);
        } else if (
          Number(price.nextElementSibling.textContent) >=
          trade + trade * 0.0001
        ) {
          deposit -= MonetFlowing;
          console.log("reach to sl", deposit);

          MonetFlowing *= 2;
          trade = null;
        }
      }
    } else {
      trade = Number(price.nextElementSibling.textContent);
    }
  } else {
    console.log("Price not found");
  }
}, 1000);

