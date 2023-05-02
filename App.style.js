import { StyleSheet } from "react-native";
export const SQUARE_SIZE = 100;
const s = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
  },
  square: {
    backgroundColor: "orange",
    height: SQUARE_SIZE,
    width: SQUARE_SIZE,
  },
});

export { s };
