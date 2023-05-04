import { Dimensions, Text, Touchable, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedScrollHandler,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";
import { s, IMG_SIZE, TITLE_FONT_SIZE } from "./App.style.js";
import { IMAGES } from "./constant";
import { TouchableOpacity } from "react-native-gesture-handler";

const H = Dimensions.get("screen").height;

export default function App() {
  const yDistance = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      yDistance.value = e.contentOffset.y;
    },
  });

  return (
    <Animated.ScrollView
      snapToInterval={IMG_SIZE.MAX}
      scrollEventThrottle={16}
      onScroll={scrollHandler}
      style={[s.container]}
      contentContainerStyle={{
        height: IMG_SIZE.MAX * IMAGES.length + (H - IMG_SIZE.MAX),
      }}
    >
      {IMAGES.map((item, i) => (
        <ListItem item={item} key={item.title} i={i} yDistance={yDistance} />
      ))}
    </Animated.ScrollView>
  );
}

const ListItem = ({ item, yDistance, i }) => {
  const imgAnimStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        yDistance.value,
        [i * IMG_SIZE.MAX, i * IMG_SIZE.MAX - IMG_SIZE.MAX],
        [IMG_SIZE.MAX, IMG_SIZE.MIN],
        Extrapolate.CLAMP
      ),
    };
  });

  const titleAnimStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        yDistance.value,
        [i * IMG_SIZE.MAX, i * IMG_SIZE.MAX - IMG_SIZE.MAX],
        [1, 0],
        Extrapolate.CLAMP
      ),
      fontSize: interpolate(
        yDistance.value,
        [i * IMG_SIZE.MAX, i * IMG_SIZE.MAX - IMG_SIZE.MAX],
        [TITLE_FONT_SIZE.MAX, 0],
        Extrapolate.CLAMP
      ),
    };
  });

  return (
    <TouchableOpacity onPress={() => alert("You clicked :)")}>
      <Animated.Image
        resizeMode="cover"
        style={[s.image, imgAnimStyle]}
        source={item.picture}
      />
      <View style={[s.backdrop]}>
        <View style={s.textContainer}>
          <Text style={[s.subtitle]}>{item.subtitle}</Text>
          <Animated.Text style={[s.title, titleAnimStyle]}>
            {item.title}
          </Animated.Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
