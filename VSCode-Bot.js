const ccxt = require("ccxt");

// Initialize Bybit API with your testnet API key and secret
const exchange = new ccxt.bybit({
  apiKey: "OnjI5iPUNVEtTaV18W",
  secret: "Y4qKEYRy0bkDhrF1Cd0a5lpohyk0K9DbdhFc",
  enableRateLimit: true,
  options: {
    defaultMarket: "future", // Set to 'future' for futures trading
  },
});

// Get account balance
async function getBalance() {
  try {
    const balance = await exchange.fetchBalance();
    for (const asset in balance.total) {
      if (balance.total.hasOwnProperty(asset)) {
        console.log(`${asset}: Total: ${balance.total[asset]}`);
      }
    }
  } catch (error) {
    console.error("Error fetching balance:", error.message);
  }
}

getBalance();
