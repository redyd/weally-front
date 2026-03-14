import {MealType} from "@/types/api.types";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {View, StyleSheet} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {JSX} from "react";

interface MealIconProps {
    type: MealType;
}

const ICON_CONFIG: Record<MealType, { bg: string; icon: JSX.Element }> = {
    BREAKFAST: {
        bg: "#FFF3E0",
        icon: <MaterialIcons name="free-breakfast" size={28} color="#FB8C00" />,
    },
    LUNCH: {
        bg: "#E8F5E9",
        icon: <MaterialIcons name="lunch-dining" size={28} color="#43A047" />,
    },
    DINNER: {
        bg: "#EDE7F6",
        icon: <MaterialIcons name="dinner-dining" size={28} color="#7E57C2" />,
    },
    SNACK: {
        bg: "#FCE4EC",
        icon: <MaterialCommunityIcons name="food-apple" size={28} color="#E91E63" />,
    },
};

export default function MealIcon({type}: MealIconProps) {
    const config = ICON_CONFIG[type];
    if (!config) return null;

    return (
        <View style={[styles.container, {backgroundColor: config.bg}]}>
            {config.icon}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "flex-start",
        padding: 8,
        borderRadius: 10,
    },
});