import {Image, Text, View, StyleSheet} from 'react-native';
import {Colors, Fonts} from "@/constants/theme";

interface AvatarProps {
    size: number;
    image: string | null | undefined;
    name: string | null | undefined;
}

export default function Avatar(props: AvatarProps) {
    const initials = props?.name
        ?.split(' ')
        .map((n: string) => n[0])
        .join('')
        .toUpperCase() ?? '?';

    const avatarStyle = {
        width: props.size,
        height: props.size,
        borderRadius: props.size / 2,
    };

    if (props.image) {
        return (
            <Image
                source={{uri: props.image}}
                style={[avatarStyle, styles.image]}
            />
        );
    }

    return (
        <View style={[styles.avatar, avatarStyle]}>
            <Text style={[styles.avatarText, {fontSize: props.size * 0.36}]}>
                {initials}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    avatar: {
        backgroundColor: Colors.primary,
        alignItems: "center",
        justifyContent: "center",
    },
    avatarText: {
        fontFamily: Fonts.bold,
        color: "#fff",
    },
    image: {
        borderWidth: 2,
        borderColor: Colors.primary,
    },
});