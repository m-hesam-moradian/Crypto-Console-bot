

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
  let HighPrice = [
    ...document.querySelectorAll(".item-_gbYDtbd .itemTitle-_gbYDtbd"),
  ].find((item) => item.textContent === "High");
  let LowPrice = [
    ...document.querySelectorAll(".item-_gbYDtbd .itemTitle-_gbYDtbd"),
  ].find((item) => item.textContent === "Low");

  // let openPrice = [
  //   ...document.querySelectorAll(".item-_gbYDtbd .itemTitle-_gbYDtbd"),
  // ].find((item) => item.textContent === "Open");

  // console.log("open price: ", Number(openPrice.nextElementSibling.textContent))
  //   console.log("close price:", Number(price.nextElementSibling.textContent));
  //   console.log(Number(openPrice.nextElementSibling.textContent)<Number(price.nextElementSibling.textContent));

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
      if (
        Number(HighPrice.nextElementSibling.textContent) -
          Number(LowPrice.nextElementSibling.textContent) >
        0.006
      ) {
        trade = null;
        console.log(
          "too big candle:",
          Number(HighPrice.nextElementSibling.textContent) -
            Number(LowPrice.nextElementSibling.textContent)
        );
      }
    }
  } else {
    console.log("Price not found");
  }
}, 1000);
<<<<<<< HEAD

function closeBot() {
  setInterval(() => {
    if (condition) {
    }
  }, 5000);
}
=======
>>>>>>> ca74a337d7bc13cbcf841bdbfb17510bdc8174f3
