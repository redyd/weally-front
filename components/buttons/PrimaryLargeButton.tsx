import {Text, TouchableOpacity, StyleSheet} from "react-native";
import {Colors, Fonts} from "@/constants/theme";

interface PrimaryLargeButtonProps {
    onPress?: () => void;
    text: string;
}

export default function PrimaryLargeButton(props: PrimaryLargeButtonProps) {
    return (
        <TouchableOpacity style={styles.primaryButton} activeOpacity={0.85} onPress={props.onPress}>
            <Text style={styles.primaryButtonText}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    primaryButton: {
        backgroundColor: Colors.primary,
        borderRadius: 14,
        paddingVertical: 16,
        alignItems: "center",
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 6,
    },
    primaryButtonText: {
        fontFamily: Fonts.semiBold,
        fontSize: 15,
        color: Colors.light_outline,
        letterSpacing: 0.2,
    },
})