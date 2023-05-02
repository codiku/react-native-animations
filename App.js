import { useEffect } from "react";
import { Dimensions, View } from "react-native";
import { s, SQUARE_SIZE } from "./App.style";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
const W = Dimensions.get("screen").width;
export default function App() {
  // 1 - Define animation value
  const animSquareX = useSharedValue(0);
  const animSquareOpacity = useSharedValue(1);

  // 2 Run the animation
  useEffect(() => {
    animSquareX.value = withTiming(W - SQUARE_SIZE, { duration: 2000 });
    animSquareOpacity.value = withTiming(0, { duration: 4000 }, () => {
      animSquareX.value = withTiming(0, { duration: 2000 });
      animSquareOpacity.value = withTiming(1, { duration: 2000 });
    });
  }, []);

  // 3 - Link the animation to a style object
  const squareAnimStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: animSquareX.value }],
      opacity: animSquareOpacity.value,
    };
  });

  // 4 - Pass the animated style to an <Animated/> element
  return (
    <View style={s.root}>
      <Animated.View style={[s.square, squareAnimStyle]} />
    </View>
  );
}

/*
  Array(1000)
    .fill(0)
    .map((d) => {
      console.log("JS thread is working like a dog");
      return d;
    });
 
  Array(1000)
    .fill(0)
    .map((d) => {
      console.log("JS thread is working like a dog");
      return d;
    });
    Array(1000)
    .fill(0)
    .map((d) => {
      console.log("JS thread is working like a dog");
      return d;
    });
    */
