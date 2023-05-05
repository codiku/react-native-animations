import { IMAGE_SIZE, s } from "./ListItem.style";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

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
  return (
    <Animated.Image source={image.picture} style={[s.image, imgAnimStyle]} />
  );
}
