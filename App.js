import { useEffect, useState } from "react";
import { View } from "react-native";
import { s } from "./App.style";

export default function App() {
  const [x, setX] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setX((x) => x + 1);
    }, 10);
  }, []);
  /*
  Array(1000)
    .fill(0)
    .map((d) => {
      console.log("JS thread is working like a dog");
      return d;
    });
 
  Array(1000)
    .fill(0)
    .map((d) => {
      console.log("JS thread is working like a dog");
      return d;
    });
    Array(1000)
    .fill(0)
    .map((d) => {
      console.log("JS thread is working like a dog");
      return d;
    });
    */
  return <View style={[s.square, { left: x }]} />;
}
