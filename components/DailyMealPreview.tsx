import {View, StyleSheet} from "react-native";
import {MealsPerDay} from "@/types/api.types";
import {useEffect, useState} from "react";
import {DayCard} from "@/components/cards/DayCard";
import DailyMealPresenter from "@/components/cards/DailyMealPresenter";

interface DailyMealPreviewProps {
    planning: MealsPerDay[] | undefined;
    days: number;
}

export default function DailyMealPreview(props: DailyMealPreviewProps) {
    const [selectedDay, setSelectedDay] = useState<MealsPerDay | undefined>();

    useEffect(() => {
        if (props.planning && props.planning.length > 0 && !selectedDay) {
            setSelectedDay(props.planning[0]);
        }
    }, [props.planning, selectedDay]);

    if (!selectedDay || !props.planning) {
        return null;
    }

    return (
        <View style={styles.container}>

            {/*selector*/}
            <View style={styles.smallCardsContainer}>
                {props.planning.map((planning, index) => (
                    <DayCard
                        key={index}
                        planning={planning}
                        isSelected={selectedDay === planning}
                        onPress={() => setSelectedDay(planning)}
                    />
                ))}
            </View>

            {/*description*/}
            <DailyMealPresenter day={selectedDay}/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flex: 1,
        flexDirection: "column",
        gap: 20,
    },
    smallCardsContainer: {
        flexDirection: "row",
        gap: 10,
    }
});