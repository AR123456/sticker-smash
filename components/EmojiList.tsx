import { useState } from "react";
import {
  ImageSourcePropType,
  StyleSheet,
  FlatList,
  Platform,
  Pressable,
} from "react-native";
import { Image } from "expo-image";

type Props = {
  onSelect: (image: ImageSourcePropType) => void;
  onCloseModal: () => void;
};

export default function EmojiList({}) {}
