import { LogBox, View } from "react-native";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { s, CIRCLE_RADIUS } from "./App.style";

LogBox.ignoreLogs(["No native splash"]);

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
    onEnd: (e, ctx) => {
      console.log("onEnd");
      const distanceFromCenter = Math.sqrt(
        squareAnimTranslateX.value ** 2 + squareAnimTranslateY.value ** 2
      );
      if (distanceFromCenter < CIRCLE_RADIUS) {
        squareAnimTranslateX.value = withSpring(0);
        squareAnimTranslateY.value = withSpring(0);
      }
    },
  });

  const squareAnimStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: squareAnimTranslateX.value,
        },
        {
          translateY: squareAnimTranslateY.value,
        },
      ],
    };
  });
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={s.root}>
        <View style={s.circle}>
          <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View style={[s.square, squareAnimStyle]} />
          </PanGestureHandler>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}
