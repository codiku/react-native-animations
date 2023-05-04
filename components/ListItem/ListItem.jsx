import { Image } from "react-native";
import { s } from "./ListItem.style";
export function ListItem({ image }) {
  return <Image source={image.picture} style={s.image} />;
}
