import { PropsWithChildren } from "react";
import {
  Modal,
  View,
  Text,
  Pressable,
  StyleSheet,
  registerCallableModule,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function EmojiPicker({ isVisible, children, onClose }: Props) {
  return <View></View>;
}
