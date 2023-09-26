import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  mainContainer: {
    flex: 1,

    // padding: 20,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 30,
  },
  searchIcon: {
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
  calendarContainer: {
    backgroundColor: Colors.backgroundColor,
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    alignItems: "center",
  },
  arrowIcon: {
    height: 13,
    width: 13,
    resizeMode: "contain",
    marginHorizontal: 15,
  },
  monthName: {
    marginHorizontal: 20,
  },
  dateContainer: {
    backgroundColor: "lightgrey",
    padding: 5,
    width: "85%",
    alignItems: "center",
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 0.5,
  },
  sepratorLine: {
    height: 0.5,
    width: "100%",
    backgroundColor: "#D3D6D8",
    // marginVertical: 10,
  },
  listContainer: {
    // paddingHorizontal: 10,
  },
  groupBtnContainer: {
    flexDirection: "row",
    // justifyContent: "space-around",
    justifyContent: "center",
    margin: 20,
  },
  btnConatiner: {
    backgroundColor: "#E5F7F4",
    borderWidth: 0.5,
    borderColor: "#00B894",
    borderRadius: 5,
    padding: 5,
    width: "25%",
    alignItems: "center",
    marginHorizontal: 5,
  },
});
