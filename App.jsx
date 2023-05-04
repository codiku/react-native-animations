import { Dimensions, LogBox, View } from "react-native";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { s, SQUARE_SIZE } from "./App.style";

LogBox.ignoreLogs(["No native splash"]);

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get("screen");
export default function App() {
  const squareAnimTranslateX = useSharedValue(0);
  const squareAnimTranslateY = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.initialPosX = squareAnimTranslateX.value;
      ctx.initialPosY = squareAnimTranslateY.value;
    },
    onActive: (e, ctx) => {
      squareAnimTranslateX.value = ctx.initialPosX + e.translationX;
      squareAnimTranslateY.value = ctx.initialPosY + e.translationY;
    },
  });

  const squareAnimStyle = useAnimatedStyle(() => {
    console.log(SCREEN_W / 2);
    const scale = interpolate(
      squareAnimTranslateX.value,
      [0, SCREEN_W / 2 - SQUARE_SIZE / 2],
      [1, 3],
      Extrapolate.CLAMP
    );
    const opacity = interpolate(
      squareAnimTranslateX.value,
      [0, SCREEN_W / 2 - SQUARE_SIZE / 2],
      [1, 0],
      Extrapolate.CLAMP
    );
    return {
      transform: [
        {
          translateX: squareAnimTranslateX.value,
        },
        {
          translateY: squareAnimTranslateY.value,
        },
        {
          scale,
        },
      ],
      opacity,
    };
  });
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={s.root}>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[s.square, squareAnimStyle]} />
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
}
