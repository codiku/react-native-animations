import { ScrollView } from "react-native-gesture-handler";
import { s } from "./List.style";
import { IMAGES } from "../../constant";
import { ListItem } from "../ListItem/ListItem";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { IMAGE_SIZE } from "../ListItem/ListItem.style";
import { Dimensions } from "react-native";

const SCREEN_H = Dimensions.get("screen").height;
export function List() {
  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollY.value = e.contentOffset.y;
    },
  });
  return (
    <Animated.ScrollView
      contentContainerStyle={{
        height: IMAGES.length * IMAGE_SIZE.MAX + (SCREEN_H - IMAGE_SIZE.MAX),
      }}
      scrollEventThrottle={16}
      onScroll={scrollHandler}
    >
      {IMAGES.map((image, i) => (
        <ListItem
          image={image}
          key={image.title + i}
          scrollY={scrollY}
          index={i}
        />
      ))}
    </Animated.ScrollView>
  );
}
