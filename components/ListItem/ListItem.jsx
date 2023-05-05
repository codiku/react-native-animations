import { TouchableOpacity } from "react-native-gesture-handler";
import { IMAGE_SIZE, TITLE_FONT_SIZE, s } from "./ListItem.style";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Text, View } from "react-native";

export function ListItem({ image, scrollY, index }) {
  const imgAnimStyle = useAnimatedStyle(() => {
    const height = interpolate(
      scrollY.value,
      [index * IMAGE_SIZE.MAX, index * IMAGE_SIZE.MAX - IMAGE_SIZE.MAX],
      [IMAGE_SIZE.MAX, IMAGE_SIZE.MIN],
      Extrapolate.CLAMP
    );
    return {
      height,
    };
  });
  const textAnimStyle = useAnimatedStyle(() => {
    const fontSize = interpolate(
      scrollY.value,
      [index * IMAGE_SIZE.MAX, index * IMAGE_SIZE.MAX - IMAGE_SIZE.MAX],
      [TITLE_FONT_SIZE.MAX, TITLE_FONT_SIZE.MIN],
      Extrapolate.CLAMP
    );
    const opacity = interpolate(
      scrollY.value,
      [
        index * IMAGE_SIZE.MAX,
        index * IMAGE_SIZE.MAX - IMAGE_SIZE.MAX + IMAGE_SIZE.MAX / 2,
      ],
      [1, 0],
      Extrapolate.CLAMP
    );
    return {
      fontSize,
      opacity,
    };
  });
  return (
    <TouchableOpacity onPress={() => alert("You clicked !")}>
      <Animated.Image source={image.picture} style={[s.image, imgAnimStyle]} />
      <View style={s.textContainer}>
        <Text style={s.subtitle}>{image.subtitle}</Text>
        <Animated.Text style={[s.title, textAnimStyle]}>
          {image.title}
        </Animated.Text>
      </View>
    </TouchableOpacity>
  );
}
