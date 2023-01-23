# Ticker-App
A react native app that displays live stock prices and their details.

# App Description
A React Native app built using TypeScript, it uses the useState and useEffect hooks from React and the View, Text, Image, and StyleSheet components from React Native. The app uses the axios library to make API calls to the IEX Cloud API to fetch stock data for the symbols specified in the symbols array. The data is then displayed in a list of stock components, with each component showing information about a specific stock, such as the symbol, company name, latest price, and change in price. The app also uses the AntDesign library to display up or down arrows based on whether the stock's price has gone up or down. Error handling is also included to display an error message if the API call fails.

# Running the App
After making sure Expo Go is downloaded on a device and after cloning the repository, run the following commands:

```bash
cd Ticker-App/
npm install
expo start
```
To continue, Scan the QR code shown with Expo Go (Android) or the Camera app (iOS).

<img src="[https://lh3.googleusercontent.com/pw/AMWts8D1L-8Xf5gSxWmuHih_2zhYe-t5tR8ufJF_ELIM9W8xzPjGJRKydt1KLIa0jEgGPHIg3D3jg9ihiucuLJTzDe8NM2cmRYS3beiPMbDwMiGNSGJVN_pdTf0_VO4FgVsEwmqiVRgGNnn3O4x85EAzLgz6Pw=w730-h1580-no?authuser=0)" width="48">
