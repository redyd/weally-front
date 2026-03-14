import {Image, Text, View, StyleSheet} from 'react-native';
import {Colors, Fonts} from "@/constants/theme";
import {authClient} from "@/lib/auth-client";

export default function Avatar({size = 38}: { size?: number }) {
    const {data: session, isPending} = authClient.useSession();

    if (isPending) return null;

    const initials = session?.user?.name
        ?.split(' ')
        .map((n: string) => n[0])
        .join('')
        .toUpperCase() ?? '?';

    const avatarStyle = {
        width: size,
        height: size,
        borderRadius: size / 2,
    };

    if (session?.user?.image) {
        return (
            <Image
                source={{uri: session.user.image}}
                style={[avatarStyle, styles.image]}
            />
        );
    }

    return (
        <View style={[styles.avatar, avatarStyle]}>
            <Text style={[styles.avatarText, {fontSize: size * 0.36}]}>
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