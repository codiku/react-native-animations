import { Image } from "react-native";
import { s } from "./ListItem.style";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
export function ListItem({ image, yDistance }) {
  const imgAnimStyle = useAnimatedStyle(() => {
    const height = interpolate(yDistance, [], []);
    return {
      height,
    };
  });
  return (
    <Animated.Image source={image.picture} style={[s.image, imgAnimStyle]} />
  );
}
