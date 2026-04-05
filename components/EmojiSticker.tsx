import { ImageSourcePropType, View } from "react-native";
import { ImageRef } from "expo-image";

type Props = {
  imageSize: number;
  stickerSource: ImageSourcePropType;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  return (
    <View>
      <Text>EmojiSticker</Text>
    </View>
  );
}
