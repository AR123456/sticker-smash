import { View, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
  onPress: () => void;
};
export default function CircleButton({ onPress }: Props) {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable>
        <MaterialIcons></MaterialIcons>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
