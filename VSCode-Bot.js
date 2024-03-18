const { RestClientV5 } = require("bybit-api");

// Initialize the Bybit REST client
const client = new RestClientV5({
  key: "OnjI5iPUNVEtTaV18W",
  secret: "Y4qKEYRy0bkDhrF1Cd0a5lpohyk0K9DbdhFc",
  testnet: true, // Set to true for testnet
});

// Get your account balance
async function getBalance() {
  try {
    const response = await client.wallet.getWalletBalance();
    console.log(
      "Testnet Futures Balance:",
      response.result.USDT.available_balance
    );
  } catch (error) {
    console.error("Error fetching balance:", error.message);
  }
}

getBalance();
