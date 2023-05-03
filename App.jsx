import { LogBox, View } from "react-native";
import { s } from "./App.style";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";
LogBox.ignoreLogs(["No native splash"]);

export default function App() {
  // 1 - Declare an animation value
  const squareAnimX = useSharedValue(0);

  // 2 - Run animation and update the animation value
  useEffect(() => {
    squareAnimX.value = withTiming(300, { duration: 2000 });
  }, []);

  // 3 - Create an animated style and send it the animation value
  const squareAnimStyle = useAnimatedStyle(() => {
    return {
      left: squareAnimX.value,
    };
  });
  // 4 - Send the animated style to an animated component
  return (
    <View style={s.root}>
      <Animated.View style={[s.square, squareAnimStyle]} />
    </View>
  );
}
