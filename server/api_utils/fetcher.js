class Fetcher {
  constructor(service_name) {
    const api_provider = `${service_name.toUpperCase()}_API_KEY`;
    try {
      this.api_key = process.env[api_provider];
      console.log(this.api_key);
      console.log("Success");
    } catch (error) {
      console.log(error);
    }
  }
  searchTicker(query) {
    console.log("To be implemented");
  }
  getStockPrice(ticker, interval) {
    console.log("To be implemented by derived class");
  }
}
