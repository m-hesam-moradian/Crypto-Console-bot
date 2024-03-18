const ccxt = require("ccxt");

// Initialize Binance API with your testnet API key and secret
const exchange = new ccxt.binance({
  apiKey: "7fd65b3667fd85d32a73efe24139f142f8de5831f6cf28491571d959cfbadb1b",
  secret: "96bb1d0654ce7b1cde31e7e640c2a37b7396bd40c326912b90638527bc92ca21",
  enableRateLimit: true,
  options: {
    defaultMarket: "future", // Set to 'spot' for spot trading
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
