import { Dimensions, LogBox, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { s } from "./App.style";
import { List } from "./components/List/List";
LogBox.ignoreLogs(["No native splash"]);

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get("screen");
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <List />
    </GestureHandlerRootView>
  );
}
