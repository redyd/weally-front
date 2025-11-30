import {Colors, Spacing, TextStyles} from "@/constants";
import { Text, View, StyleSheet } from 'react-native';
import TodayPreview from "@/components/cards/TodayPreview";
import {DaySchedule} from "@/types/models";

const todayPreview : DaySchedule = {
    morning: {
        name: "Pain au chocolat",
        images: ["https://img.freepik.com/premium-vector/monochrome-chickened-geometric-retro-pattern_225753-4956.jpg?semt=ais_hybrid&w=740&q=80"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    }
}

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>Aujourd&#39;hui</Text>
            <TodayPreview schedule={todayPreview}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        gap: Spacing.md
    },
    mainTitle: {
        textAlign: "left",
        ...TextStyles.mainTitle,
    }
});