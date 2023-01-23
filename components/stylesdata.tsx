//style
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  main:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: 390,
  },
  logo_outer:{
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#F4F4F4",
    borderWidth: 5,
    borderColor: "#F4F4F4",
    overflow: "hidden",
  },
  stockscreen:{
    flexDirection: "row", 
    padding: 10, 
    width: 300
  },
  logo:{
    width: 40, 
    height: 40, 
    borderRadius: 40
  },
  column_data1:{
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 10,
  },
  symbol:{
    fontSize: 18, 
    fontWeight: "bold", 
    color: "black" 
  },
  company:{
    fontSize: 12, 
    color: "grey", 
    marginTop: 8
  },
  rightcomp:{
    flexDirection: "column",
    justifyContent: "center",
    width: 75,
    marginLeft: "auto",
    marginRight: 0
  },
  latestprice:{
    fontSize: 18, 
    fontWeight: "bold", 
    color: "black",
    width: 100
  },
  bottomlayer:{
    flexDirection: "row"
  },
  icon:{
    flexDirection: "row", marginTop: 8
  },
  upchange:{
    fontSize: 12,
    color: "green",
    marginTop: 8,
    width: 70,
    letterSpacing: -1,
  },
  downchange:{
    fontSize: 12,
    color: "red",
    marginTop: 8,
    width: 70,
    letterSpacing: -1,
  },
  upchangep:{
    fontSize: 12,
    color:"green",
    marginTop: 8,
    marginRight: 0,
    marginLeft: -12,
    letterSpacing: -1,
  },
  downchangep:{
    fontSize: 12,
    color:"red",
    marginTop: 8,
    marginRight: 0,
    marginLeft: -12,
    letterSpacing: -1,
  },
  bordertab:{
    backgroundColor: "#F4F4F4",
    height: 2, 
    width: 340
  }

})
export default styles;