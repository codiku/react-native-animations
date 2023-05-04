import { StyleSheet } from "react-native";
export const IMG_SIZE = {
  MAX: 350,
  MIN: 150,
};
export const TITLE_FONT_SIZE = {
  MAX: 25,
  MIN: 0,
};

export const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: IMG_SIZE.MAX,
  },
  backdrop: {
    backgroundColor: "#1b191987",
    position: "absolute",
    width: "100%",
    height: "100%",
    padding: 10,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    textAlign: "center",
    fontSize: TITLE_FONT_SIZE.MIN,
    color: "white",
    fontWeight: "bold",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
});
