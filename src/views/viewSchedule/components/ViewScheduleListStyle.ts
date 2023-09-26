import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "row",
    margin: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    height: 40,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  verticalLine: {
    width: 4,
    height: 28,
    backgroundColor: "black",
    borderRadius: 5,
    marginRight: 8,
    marginLeft: 2,
  },
  ImageContainer: {
    flexDirection: "row",
    position: "absolute",
    right: 0,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
  },
  userIcon: {
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
  profileView: {
    height: 20,
    width: 20,
    borderRadius: 90,
    backgroundColor: "#E9EAEC",
    alignItems: "center",
    justifyContent: "center",
  },
  sepratorLine: {
    height: 0.5,
    width: "100%",
    backgroundColor: "#D3D6D8",
  },
});
