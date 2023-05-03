import { View } from "react-native";
import { s } from "./App.style";
import { useEffect, useState } from "react";

export default function App() {
  const [x, setX] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setX((x) => x + 1);
    }, 25);
  }, []);

  return (
    <View style={s.root}>
      <View style={[s.square, { left: x }]} />
    </View>
  );
}
