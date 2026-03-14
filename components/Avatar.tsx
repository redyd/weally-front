import { Image } from 'react-native';
import {Colors} from "@/constants/theme";

const DEFAULT_AVATAR = require('@/assets/images/avatar-default.jpg');
const SIZE = 38;

export default function Avatar({image}: {image: string | null | undefined}) {
    return (
        <Image
            source={image ? { uri: image } : DEFAULT_AVATAR}
            style={{
                width: SIZE,
                height: SIZE,
                borderRadius: SIZE / 2,
                borderWidth: 2,
                borderColor: Colors.dark_outline,
            }}
        />
    );
}