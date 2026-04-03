import { PropsWithChildren } from "react";
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function EmojiPicker({ isVisible, children, onClose }: Props) {
  return (
    <View>
      <Modal>
        <View>
          <View>
            <Text></Text>
            <Pressable>
              <MaterialIcons></MaterialIcons>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
