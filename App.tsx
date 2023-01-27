import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import axios from "axios";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./components/stylesdata";
import somesh from "./components/constituents_json"

// Stock interface defines the shape of the stock data returned from the API
interface Stock {
  symbol: string;
  companyName: string;
  latestPrice: number;
  change: number;
  changePercent: number;
}


const App = () => {
  // useState hook to store the stock data
  const [stockData, setStockData] = useState<Array<Stock>>([]);

  // An array of stock symbols to fetch data for
  // const symbols = ["AAPL", "NFLX", "GOOG", "AMZN", "TSLA", "MSFT", "FSR", "PLTR", "META", "GOOGL", "TSLA", "MSFT", "FSR", "PLTR", "META", "GOOGL"];
  const symbols = somesh.map(item => {
    return item.Symbol
  })
  console.log(symbols[0])
  // useState hook to store any errors that occur during data fetching
  const [error, setError] = useState<Error | null>(null); 

  // useEffect hook to fetch stock data when the component mounts
  useEffect(() => {
    const fetchStockData = async () => {
      try {
        // Create a copy of the symbols array to use for pagination
        let symbolsCopy = [...symbols];

        while(symbolsCopy.length > 0) {
          // Get the first 20 symbols
          const symbolsToFetch = symbolsCopy.slice(0, 20);
          symbolsCopy = symbolsCopy.slice(20);

          // map() to create an array of promises, each representing a request to the API
          const promises = symbolsToFetch.map(async (symbol) => {
            const response = await axios.get(
              `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=pk_e3cbd1d92de54b4c85fafb3b7b758245`
            );
            return response.data;
          });
          // Use Promise.all() to wait for all promises to resolve
          const data = await Promise.all(promises);
          // Update the state with the fetched data
          setStockData((prevStockData) => [...prevStockData, ...data]);

          // Wait for 1 second before making the next batch of requests
          await new Promise((resolve) => setTimeout(resolve, 5000));
        }
      } catch (err) {
        const error = new Error((err as any).message);
        setError(error);
      }
    };
    fetchStockData();
  }, []);

  // If there is an error, display the error message
  if (error) {
    return <Text>An error occurred: {error.message}</Text>;
  }

  // If stock data is still loading, display a loading message
  if (!stockData) {
    return <Text>Loading...</Text>;
  }

  // Main View container for the entire list of stocks
  // CSS styling details in components/stylesdata.tsx
  return (
    
    <View style={styles.main}>
      <Text style={styles.textStyle1}>S&P 500 Live Prices</Text>
      
      <ScrollView style={styles.scrollView}>
      <View> 
        {stockData.map((stock, index) => (
          <View key={index}>
            <View style={styles.stockscreen}>
              <View style={styles.logo_outer}>
                <Image
                  source={{
                    uri: `https://storage.googleapis.com/iex/api/logos/${stock.symbol}.png`,
                  }}
                  style={styles.logo}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.column_data1}>
                <Text style={styles.symbol}>{stock.symbol}</Text>
                <Text style={styles.company}>
                  {stock.companyName.substring(0, 18) + "..."}
                </Text>
              </View>
              <View style={styles.rightcomp}>
                <Text style={styles.latestprice}>
                  ${stock.latestPrice.toFixed(2)}
                </Text>
                <View style={styles.bottomlayer}>
                  <View style={styles.icon}>
                    {stock.change >= 0 ? (
                      <AntDesign
                        name="arrowup"
                        color="green"
                        size={14}
                      ></AntDesign>
                    ) : (
                      <AntDesign
                        name="arrowdown"
                        color="red"
                        size={14}
                      ></AntDesign>
                    )}
                  </View>
                  <Text
                    style={
                      stock.change >= 0 ? styles.upchange : styles.downchange
                    }
                  >
                    {stock.change >= 0 ? "+" : "-"}{" "}
                    {Math.abs(stock.change).toFixed(2)}
                  </Text>
                  <Text
                    style={
                      stock.changePercent >= 0 ? styles.upchangep : styles.downchangep
                    }
                  >
                    {stock.changePercent >= 0 ? "+" : "-"}{" "}
                    {(100*Math.abs(stock.changePercent)).toFixed(2)}%
                  </Text>
                </View>
              </View>
            </View>
            {index !== stockData.length && <View style={styles.bordertab} />}
          </View>
        ))}
      </View>
      </ScrollView>
    </View>
  );
};

export default App;
