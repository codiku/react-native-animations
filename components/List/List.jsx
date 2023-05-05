import { ScrollView } from "react-native-gesture-handler";
import { s } from "./List.style";
import { IMAGES } from "../../constant";
import { ListItem } from "../ListItem/ListItem";
import { useSharedValue } from "react-native-reanimated"

export function List() {
  const yDistance =  useSharedValue(0)
  return (
    <ScrollView>
      {IMAGES.map((image,i) => (
        <ListItem image={image} yDistance={yDistance} key={image.title+i}/>
      ))}
    </ScrollView>
  );
}
