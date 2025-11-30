import {DaySchedule, Meal} from "@/types/models";
import {StyleSheet, View, Text} from "react-native";
import {Image} from "expo-image"
import {Colors, Spacing, TextStyles} from "@/constants";

export default function TodayPreview({schedule}: { schedule: DaySchedule }) {
    return (
        <View style={styles.container}>
            {schedule.morning && (
                <>
                    <Text style={styles.scheduleTitle}>Ce matin</Text>
                    <TodayPreviewItem meal={schedule.morning}/>
                </>
            )}
        </View>
    );
}

function TodayPreviewItem({meal}: { meal: Meal }) {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Image
                    source={{uri: meal.images[0]}}
                    style={styles.image}
                />
            </View>
            <View style={styles.itemRight}>
                <Text style={styles.mealName}>{meal.name}</Text>
                {meal.description && (
                    <Text style={styles.mealDescription}>{meal.description}</Text>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: Colors.primary
    },
    scheduleTitle: {
        ...TextStyles.subTitle
    },
    item: {
        display: "flex",
        flexDirection: "row",
        maxHeight: 96,
        gap: Spacing.md,
        backgroundColor: Colors.secondary,
    },
    itemRight: {
        flex: 3 / 4,
        backgroundColor: Colors.primary
    },
    itemLeft: {
        flex: 1 / 4,
        justifyContent: "center",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    mealName: {
        ...TextStyles.important,
    },
    mealDescription: {
        ...TextStyles.descriptive
    }
});
