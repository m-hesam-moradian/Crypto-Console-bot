////////////////////////////select number

async function getPrice() {

    
  try {
    let price = [
      ...document.querySelectorAll(".item-_gbYDtbd .itemTitle-_gbYDtbd"),
    ].find((item) => item.textContent === "Close");
    if (price) {
      //   console.log(price.nextElementSibling.textContent);
    } else {
      console.log("Price not found");
    }
    console.log("Current price: $" + price.nextElementSibling.textContent);
  } catch (error) {
    console.error("Failed to fetch price: " + error);
  } finally {
    setTimeout(getPrice, 1000);
  }
}

getPrice();
///
/////////my bot 

let deposit = 100;
 let orderID = null;
let trade = null;

setInterval(() => {
  console.clear()
  
    let price = [
      ...document.querySelectorAll(".item-_gbYDtbd .itemTitle-_gbYDtbd"),
  ].find((item) => item.textContent === "Close");
  
  if (price) {
    console.log(price.nextElementSibling.textContent);
        console.log( Number(price.nextElementSibling.textContent)+price.nextElementSibling.textContent*1/100);
        console.log( Number(price.nextElementSibling.textContent)-price.nextElementSibling.textContent*1/100 );
      } else {
        console.log("Price not found");
      }
  if (trade) {
  if (trade== Number(price.nextElementSibling.textContent)+price.nextElementSibling.textContent*1/100) {
    console.log("reach to TP");
  }
        
      }
  }, 1000);



////ai bot 
const axios = require('axios');

const API_KEY = 'YOUR_API_KEY';
const API_SECRET = 'YOUR_API_SECRET';

const INITIAL_VALUE = 1;
const LEVERAGE = 100;
const STOPLOSS_PERCENTAGE = 1;
const TAKE_PROFIT_PERCENTAGE = 1;
const DEPOSIT = 100;

let currentOrderId = null;
let currentTrade = null;

async function startBot() {
    while (true) {
        try {
            const ticker = await getTicker('BTCUSDT');
            const marketPrice = parseFloat(ticker.price);

            if (currentOrderId === null) {
                const order = await placeOrder(marketPrice);
                currentOrderId = order.orderId;
                currentTrade = {
                    entryPrice: marketPrice,
                    stopLossPrice: marketPrice * (1 - STOPLOSS_PERCENTAGE / 100),
                    takeProfitPrice: marketPrice * (1 + TAKE_PROFIT_PERCENTAGE / 100),
                };
            } else {
                const order = await getOrderStatus('BTCUSDT', currentOrderId);
                if (order.status === 'FILLED') {
                    const tradeResult = await calculateTradeResult(currentTrade);
                    console.log('Trade Result:', tradeResult);
                    currentOrderId = null;
                } else if (order.status === 'REJECTED') {
                    console.log('Order Rejected:', order);
                    currentOrder0 = null;
                }
            }

            await new Promise(resolve => setTimeout(resolve, 60000)); // Wait for 1 minute
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function getTicker(symbol) {
    const response = await axios.get(https://api.binance.com/api/v3/ticker/price?symbol=${symbol});
    return response.data;
}

async function placeOrder(marketPrice) {
    const quantity = (DEPOSIT / marketPrice) * LEVERAGE;
    const order = await createOrder('BTCUSDT', 'BUY', 'MARKET', quantity);
    return order;
}

async function createOrder(symbol, side, type, quantity) {
    const timestamp = new Date().getTime();
    const signature = generateSignature(symbol=${symbol}&side=${side}&type=${type}&quantity=${quantity}&timestamp=${timestamp});

    const response = await axios.post('https://api.binance.com/api/v3/order', null, {
        params: {
            symbol,
            side,
            type,
            quantity,
            timestamp,
            signature,
        },
    });

    return response.data;
}

async function getOrderStatus(symbol, orderId) {
    const timestamp = new Date().getTime();
    const signature = generateSignature(symbol=${symbol}&orderId=${orderId}&timestamp=${timestamp});

    const response = await axios.get('https://api.binance.com/api/v3/order', {
        params: {
            symbol,
            orderId,
            timestamp,
            signature,
        },
    });

    return response.data;
}

function generateSignature(query) {
    const hmac = require('crypto').createHmac('sha256', API_SECRET);
    hmac.update(query);
    return hmac.digest('hex');
}

startBot();
