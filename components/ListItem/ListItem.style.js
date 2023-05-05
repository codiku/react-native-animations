import { Platform, StyleSheet } from "react-native";
export const IMAGE_SIZE = {
  MAX: 300,
  MIN: 100,
};

export const TITLE_FONT_SIZE = {
  MAX: 30,
  MIN: 0.41,
};

export const s = StyleSheet.create({
  image: {
    width: "100%",
    height: IMAGE_SIZE.MAX,
  },
  textContainer: {
    padding: 10,
    backgroundColor: "#00000054",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  title: {
    textAlign: "center",
    fontSize: TITLE_FONT_SIZE.MIN,
    color: "white",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
});
