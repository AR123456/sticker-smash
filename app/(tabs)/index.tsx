// import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";
const PlaceholderImage = require("../../assets/images/background-image.png");
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World !</Text>
      {/* <Link href="/about" style={styles.button}>
        Go to About Screen
      </Link> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
