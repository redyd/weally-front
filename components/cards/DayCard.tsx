import {StyleSheet, TouchableOpacity, View, Text} from "react-native";
import {MealsPerDay} from "@/types/api.types";
import {shortDate} from "@/lib/helper.func";
import {Colors, Fonts} from "@/constants/theme";

interface DayCardProps {
    planning: MealsPerDay;
    isSelected: boolean;
    onPress: () => void;
}

export function DayCard({ planning, isSelected, onPress }: DayCardProps) {
    return (
        <TouchableOpacity
            style={[styles.card, isSelected && styles.cardSelected]}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <Text style={[styles.cardDayLabel, isSelected && styles.cardDayLabelSelected]}>
                {shortDate(planning.day)}
            </Text>
            <Text style={[styles.cardDayNumber, isSelected && styles.cardDayNumberSelected]}>
                {new Date(planning.day).getDate()}
            </Text>
            <View style={styles.dotContainer}>
                {planning.meals.map((_, i) => (
                    <View key={i} style={[styles.dot, isSelected && styles.dotSelected]} />
                ))}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 12,
        borderRadius: 12,
        gap: 2,
        backgroundColor: "#f0f0f0",
        transform: [{scale: 1}],
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: Colors.accent
    },
    cardSelected: {
        backgroundColor: Colors.primary,
        transform: [{scale: 1.08}],
        zIndex: 1,
        shadowColor: Colors.primary,
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
        borderWidth: 0,
    },
    cardDayLabel: {
        fontSize: 11,
        fontFamily: Fonts.medium,
        color: Colors.dark_outline,
        textTransform: "uppercase",
    },
    cardDayLabelSelected: {
        color: Colors.light_outline,
    },
    cardDayNumber: {
        fontSize: 20,
        fontFamily: Fonts.bold,
        color: Colors.dark_outline,
    },
    cardDayNumberSelected: {
        color: "#fff",
    },
    dotContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 5
    },
    dot: {
        width: 5,
        height: 5,
        borderRadius: 3,
        backgroundColor: Colors.dark_outline,
        marginTop: 2,
    },
    dotSelected: {
        backgroundColor: Colors.light_outline,
    },
});