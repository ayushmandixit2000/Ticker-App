import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import axios from "axios";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./components/stylesdata";

interface Stock {
  symbol: string;
  companyName: string;
  latestPrice: number;
  change: number;
  changePercent: number;
}

const App = () => {
  const [stockData, setStockData] = useState<Array<Stock>>([]);

  const symbols = ["AAPL", "NFLX", "GOOGL", "AMZN", "TSLA"];

  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const promises = symbols.map(async (symbol) => {
          const response = await axios.get(
            `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=pk_c70c2ce7986146cc992a2282d57ae6c0`
          );
          return response.data;
        });
        const data = await Promise.all(promises);
        setStockData(data);
      } catch (err) {
        const error = new Error((err as any).message);
        setError(error);
      }
    };
    fetchStockData();
  }, []);

  if (error) {
    return <Text>An error occurred: {error.message}</Text>;
  }

  if (!stockData) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.main}>
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
                  {stock.companyName.substring(0, 15) + "..."}
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
                      stock.changePercent >= 0
                        ? styles.upchangep
                        : styles.downchangep
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
    </View>
  );
};

export default App;
