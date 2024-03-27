import request from "request";
import yahooFinance from "yahoo-finance2";
class Fetcher {
  constructor(service_name) {
    const api_provider = `${service_name.toUpperCase()}_API_KEY`;
    try {
      this.api_key = process.env[api_provider];
      if (!this.api_key) throw "Api key wasn't loaded from the .env file";
    } catch (error) {
      console.log(error);
    }
  }
  searchTicker(search_query) {
    console.log("To be implemented by derived class");
  }
}
/**
 * Represents a client for fetching data from the Alpha Vantage API.
 * @extends Fetcher
 */
class alphaVantageClient extends Fetcher {
  /**
   * Constructs a new alphaVantage client.
   */
  constructor() {
    super("alphaVantage");
    this.url = "https://www.alphavantage.co/query?";
  }
  /**
   * Sends a request to the alphavantage server, returns a JSON by default, but can return a csv file too.
   * @param {object} params
   * @returns {JSON | csv}
   */
  request_sender(params) {
    request.get(
      {
        url: this.url,
        qs: params,
        headers: { "User-Agent": "request" },
      },
      (err, res, data) => {
        if (err) {
          console.log("Error: ", err);
        } else if (res.statusCode !== 200) {
          console.log("Status: ".res.statusCode);
        } else {
          // data is successfully returned and parsed
          console.log(data);
          return data;
        }
      }
    );
  }
  /**
   * Searches for ticker symbols matching the given query.
   * @param {string} search_query - The search query.
   * @param {string} [datatype="json"] - The type of data to return ("json" or "csv").
   * @returns {object|string} - The search results in JSON format (default) or a CSV file.
   * TODO: Make sure it returns CSV too
   */
  searchTicker(search_query) {
    let params = {
      function: "SYMBOL_SEARCH",
      keywords: search_query,
      apikey: this.api_key,
    };
    this.request_sender(params);
  }
  /**
   * With free API - updated at the end of each trading day for all users by default
   * @param {string} symbol
   * @param {string} interval -following values are supported: 1min, 5min, 15min, 30min, 60min
   * @param {string} [month=undefined] - if not specified, return values for today. format month="2009-01"
   * @param {string} datatype - default is json. if datatype="csv", it returns a csv file
   */
  intradayPrice(_symbol, _interval, _month = undefined, datatype = "json") {
    let params = {
      function: "TIME_SERIES_INTRADAY",
      symbol: _symbol,
      interval: _interval,
      month: _month,
      apikey: this.api_key,
    };
    if (!_month) {
      delete params.month;
    }
    this.request_sender(params);
  }
  /**
   * Fetches daily time series data for the specified symbol.
   * @param {string} _symbol - The symbol for which to fetch daily time series data.
   */
  daily(_symbol) {
    let params = {
      function: "TIME_SERIES_DAILY",
      symbol: _symbol,
      apikey: this.api_key,
    };

    this.request_sender(params);
  }
  /**
   * Fetches weekly time series data for the specified symbol.
   * @param {string} _symbol - The symbol for which to fetch weekly time series data.
   */
  weekly(_symbol) {
    let params = {
      function: "TIME_SERIES_WEEKLY",
      symbol: _symbol,
      apikey: this.api_key,
    };

    this.request_sender(params);
  }
  /**
   * Fetches monthly time series data for the specified symbol.
   * @param {string} _symbol - The symbol for which to fetch monthly time series data.
   */
  monthly(_symbol) {
    let params = {
      function: "TIME_SERIES_MONTHLY",
      symbol: _symbol,
      apikey: this.api_key,
    };

    this.request_sender(params);
  }
}

class YahooFinanceClient {
  constructor() {
    // TODO: Is this needed?
  }
  /**
   * Based on a search query, returns an object with two properties:
   * qoutes - a list of tickers found.
   * news - a list of recent news about the search query
   * @param {string} searchQuery - search the company's ticker
   * @returns JSON - qoutes as the results of the search and news based on the searchQuery
   */
  async searchTicker(searchQuery) {
    const results = await yahooFinance.search(searchQuery);
    const { quotes, news } = results;
    return { quotes, news };
  }
  /**
   * query options possible props and values:
   * period1: Date object (start)
   * period2: Date object (end, default to today)
   * interval: string (default "1d", can be 1m, 2m, 5m, 15m, 30m, 60m, 90m, 1h, 1d, 5d, 1wk, 1mo, 3mo)
   * return: "array" OR "object" (defaults to array, but better use object)
   * 
   * @param {string} ticker for the company
   * @param {object} queryOptions
   * @returns
   */
  async fetchStockData(ticker, queryOptions) {
    let response = await yahooFinance.chart(ticker, queryOptions);
    return response.quotes;
  }

  // TODO: Think about other details about a stock that can be useful 
}


export default { YahooFinanceClient, alphaVantageClient };
