#!/usr/bin/env python3
from abc import ABC, abstractmethod
from dotenv import load_dotenv
import os


class APIFetcher(ABC):
    """
    Abstract base class for API fetchers.
    """

    def __init__(self, api_service_name):
        self.api_key = os.getenv(api_service_name)

    @abstractmethod
    def establish_connection(self):
        # Implement code to establish connection to the stock market API using self.api_key
        # Store the connection object in self.connection
        pass

    @abstractmethod
    def fetch_stock_price_intraday(self, symbol, interval):
        """
        Abstract method to fetch price of an equity in a certain interval
        """
        pass

    @abstractmethod
    def fetch_stock_price_daily(self, symbol):
        """
        Abstract method to fetch price of an equity in days
        """
        pass

    @abstractmethod
    def fetch_symbol(self, text_search):
        """
        Abstract method to fetch ticker of a certain company
        """
        pass

    @abstractmethod
    def fetch_currency_exchange(self, from_currency, to_currency):
        """
        Abstract method to fetch rate from a certain currency to another
        """
        pass

    @abstractmethod
    def process_data(self, data):
        """
        Abstract method to process fetched data.
        """
        pass


'''
TODO implement the class for alpha vantage and yahoo finance
'''
    