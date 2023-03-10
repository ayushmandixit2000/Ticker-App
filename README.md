# Ticker-App
A react native app that displays live stock prices and their details.

# App Description
A React Native app built using TypeScript, it uses the useState and useEffect hooks from React and the View, Text, Image, and StyleSheet components from React Native. The app uses the axios library to make API calls to the IEX Cloud API to fetch stock data for the symbols specified in the symbols array. The data is then displayed in a list of stock components, with each component showing information about a specific stock, such as the symbol, company name, latest price, and change in price. The app also uses the AntDesign library to display up or down arrows based on whether the stock's price has gone up or down. Error handling is also included to display an error message if the API call fails.

# Running the App
After making sure Expo Go is downloaded on a device and after cloning the repository, run the following commands:

```bash
cd Ticker-App/
npm install
npm start
```
To continue, Scan the QR code shown in terminal/command line with Expo Go (Android) or the Camera app (iOS). Alternatively, key in w, i or a to open in web, ios simulator or android respecitvely.

![IMG_7955](https://user-images.githubusercontent.com/65294826/214460528-3a17f63b-9f19-4238-b12c-8e844f949d5e.jpeg)



