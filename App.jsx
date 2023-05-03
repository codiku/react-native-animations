import { StyleSheet, View } from "react-native";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { s } from "./App.style";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
LogBox.ignoreLogs(["No native splash"]);

export default function App() {
  const squareAnimTranslateX = useSharedValue(0);
  const squareAnimTranslateY = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.initialXPos = squareAnimTranslateX.value;
      ctx.initialYPos = squareAnimTranslateY.value;
    },
    onActive: (e, ctx) => {
      squareAnimTranslateX.value = ctx.initialXPos + e.translationX;
      squareAnimTranslateY.value = ctx.initialYPos + e.translationY;
    },
    onEnd: () => {
      console.log("onEnd");
    },
  });

  const squareAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: squareAnimTranslateX.value },
        { translateY: squareAnimTranslateY.value },
      ],
    };
  });
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={s.root}>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[s.square, squareAnimatedStyle]} />
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
}
