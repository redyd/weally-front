import {Text, View, StyleSheet} from "react-native";
import {Colors, Fonts} from "@/constants/theme";

interface EyebrowProps {
    title: string;
    eyebrow?: string;
}

export default function Eyebrow(props: EyebrowProps) {
    return (
        <View>
            {props.eyebrow && (
                <Text style={styles.eyebrow}>{props.eyebrow}</Text>
            )}
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    eyebrow: {
        fontFamily: Fonts.medium,
        fontSize: 13,
        color: Colors.secondary,
        letterSpacing: 1.5,
        textTransform: "uppercase",
        marginBottom: 4,
    },
    title: {
        fontFamily: Fonts.bold,
        fontSize: 32,
        color: Colors.dark_outline,
        letterSpacing: -0.5,
    },
})