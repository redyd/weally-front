import {Text, TouchableOpacity, StyleSheet} from "react-native";
import {Colors, Fonts} from "@/constants/theme";

interface SecondaryLargeButtonProps {
    onPress?: () => void;
    text: string;
}

export default function SecondaryLargeButton(props: SecondaryLargeButtonProps) {
    return (
        <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.85} onPress={props.onPress}>
            <Text style={styles.secondaryButtonText}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    secondaryButton: {
        backgroundColor: Colors.light_outline_gray,
        borderRadius: 14,
        paddingVertical: 16,
        alignItems: "center",
    },
    secondaryButtonText: {
        fontFamily: Fonts.semiBold,
        fontSize: 15,
        color: Colors.dark_outline,
        letterSpacing: 0.2,
    },
})