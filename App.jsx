import { Dimensions, LogBox, View } from "react-native";

import { s } from "./App.style";
import { List } from "./components/List/List";
import { useSharedValue } from "react-native-reanimated";
LogBox.ignoreLogs(["No native splash"]);

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get("screen");
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <List />
    </View>
  );
}
