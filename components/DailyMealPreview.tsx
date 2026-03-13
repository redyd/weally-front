import {View, Text} from "react-native";
import {PlannedMeal} from "@/types/api.types";

interface DailyMealPreviewProps {
    planning: PlannedMeal[] | undefined;
}

export default function DailyMealPreview(props: DailyMealPreviewProps) {
    return (
        <View>
            {props.planning && props.planning.map((planning: PlannedMeal, index: number) => (
                <View key={index}>
                    <Text>{planning.date} - {planning.type}</Text>
                    <Text>{planning.meal.label}</Text>
                </View>
            ))}
        </View>
    );
}