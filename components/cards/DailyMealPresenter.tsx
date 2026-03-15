import {MealsPerDay} from "@/types/api.types";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Colors, Fonts} from "@/constants/theme";
import MealIcon from "@/components/icons/MealIcon";
import {resolveName} from "@/lib/helper.func";

interface DailyMealPresenterProps {
    day: MealsPerDay;
}

export default function DailyMealPresenter(props: DailyMealPresenterProps) {

    if (props.day.meals.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyTitle}>Rien de prévu</Text>
                <Text style={styles.emptySubtitle}>Aucun repas planifié pour cette journée</Text>
                <TouchableOpacity style={styles.emptyButton} onPress={() => console.log('pressed')}>
                    <Text style={styles.emptyButtonText}>+ Ajouter un repas</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Repas du jour</Text>
            {props.day.meals.map((meal, index) => (
                <TouchableOpacity onPress={() => (console.log(`${meal.id} pressed`))} key={index} style={styles.subCard}>
                    <View style={styles.subCardHeader}>
                        <MealIcon type={meal.type}/>
                        <View>
                            <Text style={styles.subCardTitle}>{meal.label}</Text>
                            <Text style={styles.subCardSubTitle}>{resolveName(meal.type)}</Text>
                        </View>
                    </View>
                    {meal.description && (
                        <Text style={styles.subCardSubTitle}>{meal.description}</Text>
                    )}
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        borderRadius: 10,
        padding: 15,
        gap: 10
    },
    title: {
        fontFamily: Fonts.semiBold,
        fontSize: 18,
        color: Colors.light_outline
    },
    subCard: {
        backgroundColor: Colors.primary_light,
        padding: 15,
        borderRadius: 15,
        gap: 5
    },
    subCardHeader: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 15
    },
    subCardTitle: {
        fontFamily: Fonts.bold,
        fontSize: 15,
        color: Colors.light_outline
    },
    subCardSubTitle: {
        fontFamily: Fonts.regular,
        fontSize: 13,
        color: Colors.light_outline_gray
    },
    emptyContainer: {
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        gap: 8,
        borderWidth: 1.5,
        borderColor: Colors.accent,
        borderStyle: "dashed",
    },
    emptyTitle: {
        fontFamily: Fonts.bold,
        fontSize: 16,
        color: Colors.dark_outline,
    },
    emptySubtitle: {
        fontFamily: Fonts.regular,
        fontSize: 13,
        color: Colors.dark_outline,
        opacity: 0.5,
    },
    emptyButton: {
        marginTop: 8,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: Colors.primary,
    },
    emptyButtonText: {
        fontFamily: Fonts.medium,
        fontSize: 13,
        color: Colors.light_outline,
    },
});