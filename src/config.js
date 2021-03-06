export default {
  coindesk: {
    get: {
      url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
      timestamp: ['time', 'updated'],
      price: ['bpi', 'USD', 'rate']
    }
  },
  coinmarketcap: {
    get: {
      url: 'https://api.coinmarketcap.com/v1/ticker/bitcoin/',
      timestamp: [0, 'last_updated'],
      price: [0, 'price_usd']
    }
  }
}
