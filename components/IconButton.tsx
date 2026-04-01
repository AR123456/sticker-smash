import { Text, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props={
    icon:keyof typeof MaterialIcons.glyphMap;
}


export default function IconButton({icon,label,onPress}:Props) {
    return()
}