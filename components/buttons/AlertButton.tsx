import {Colors, Fonts} from "@/constants/theme";
import {Pressable, Text, StyleSheet} from "react-native";
import { ComponentProps } from 'react'
import {FontAwesome5} from "@expo/vector-icons";

type IconName = ComponentProps<typeof FontAwesome5>['name']

interface AlertButtonProps {
    onPress?: () => void;
    text: string;
    icon?: IconName;
}

export default function AlertButton(props: AlertButtonProps) {
    return (
        <Pressable style={styles.buttonContainer} onPress={props.onPress}>
            {props.icon && (
                <FontAwesome5 name={props.icon} size={18} color={Colors.primary} />
            )}
            <Text style={styles.buttonText}>{props.text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        paddingVertical: 14,
        borderRadius: 14,
        borderWidth: 1.5,
        borderColor: Colors.primary_light,
        backgroundColor: Colors.primary_extra_light,
    },
    buttonText: {
        fontFamily: Fonts.medium,
        fontSize: 15,
        color: "#E53935",
    },
})