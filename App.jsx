import { View } from "react-native";
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

export default function App() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.initialPosX = translateX.value;
      ctx.initialPosY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.initialPosX + event.translationX;
      translateY.value = ctx.initialPosY + event.translationY;
    },
    onEnd: (_) => {
      const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);
      console.log("***", "end", distance, CIRCLE_RADIUS);
      if (distance < CIRCLE_RADIUS) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={s.root}>
        <View style={s.circle}>
          <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View style={[s.square, animatedStyle]} />
          </PanGestureHandler>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}
