import { StyleSheet } from "react-native";
export const SQUARE_SIZE = 100;
export const CIRCLE_PERIMETER = 400;
export const CIRCLE_RADIUS = CIRCLE_PERIMETER / 2;
export const s = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  square: {
    height: SQUARE_SIZE,
    width: SQUARE_SIZE,
    backgroundColor: "rgba(0,140,256,1)",
    borderRadius: 15,
  },
  circle: {
    justifyContent: "center",
    alignItems: "center",
    height: CIRCLE_PERIMETER,
    width: CIRCLE_PERIMETER,
    borderRadius: CIRCLE_RADIUS,
    borderWidth: 5,
    borderColor: "rgba(0,140,256,1)",
  },
});
