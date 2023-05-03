import { StyleSheet, View } from "react-native";
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
const SQUARE_SIZE = 100;
const CIRCLE_PERIMETER = 400;
const CIRCLE_RADIUS = CIRCLE_PERIMETER / 2;

export default function App() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.initialX = translateX.value;
      ctx.initialY = translateY.value;
    },
    onActive: (e, ctx) => {
      translateX.value = ctx.initialX + e.translationX;
      translateY.value = ctx.initialY + e.translationY;
      // translateY.value = event.translationY;
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
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[s.square, animatedStyle]} />
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
}

const s = StyleSheet.create({
  container: {
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
