import { View } from "react-native";
import { s } from "./App.style";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";

export default function App() {
  // 1 - Define an animation value
  const squareAnimX = useSharedValue(0);

  // 2 - Run the animation and update the anim value
  useEffect(() => {
    squareAnimX.value = withTiming(300, { duration: 2000 });
  }, []);

  // 3 - Create a style that will contain the animation value
  const squareAnimStyle = useAnimatedStyle(() => {
    return {
      left: squareAnimX.value,
    };
  });
  // 4 - Send the style to an Animated component
  return (
    <View style={s.root}>
      <Animated.View style={[s.square, squareAnimStyle]} />
    </View>
  );
}
