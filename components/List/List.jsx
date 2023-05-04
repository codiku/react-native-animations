import { ScrollView } from "react-native-gesture-handler";
import { s } from "./List.style";
import { IMAGES } from "../../constant";
import { ListItem } from "../ListItem/ListItem";
export function List() {
  return (
    <ScrollView>
      {IMAGES.map((image) => (
        <ListItem image={image} />
      ))}
    </ScrollView>
  );
}
