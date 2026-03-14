import {ResponsiveLayout} from "@/components/ResponsiveLayout";
import {Text, StyleSheet, View, ActivityIndicator} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Colors, Fonts} from "@/constants/theme";
import {useMe} from "@/hooks/useMe";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import Avatar from "@/components/Avatar";
import GlobalSearchBar from "@/components/GlobalSearchBar";
import {useNextDaysPlanning} from "@/hooks/useNextDaysPlanning";
import DailyMealPreview from "@/components/DailyMealPreview";

const DAYS_PREVIEW: number = 5;

export default function Index() {
    const {data: me, isLoading: meLoading} = useMe();
    const {data: planningPreview, isLoading: planningPreviewLoading} = useNextDaysPlanning(me?.familyId, DAYS_PREVIEW);

    if (meLoading || planningPreviewLoading) {
        return <ActivityIndicator size="large" color={Colors.dark_outline}/>;
    }

    const familyText = !me?.family ? "Sans famille" : `Famille ${me?.family?.name}`;

    return (
        <ResponsiveLayout>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.headerSmallText}>Bonjour,</Text>
                        <Text style={styles.headerMediumText}>{me?.name}</Text>
                        <Text style={styles.headerSmallText}>{familyText}</Text>
                    </View>
                    <View style={styles.inline}>
                        <Ionicons name="notifications-outline" size={25} color={Colors.dark_outline}/>
                        <Avatar image={me?.image}/>
                    </View>
                    <GlobalSearchBar/>
                </View>

                <DailyMealPreview planning={planningPreview} days={DAYS_PREVIEW}/>
            </SafeAreaView>
        </ResponsiveLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap:10
    },
    header: {
        display: "flex",
        flexDirection: "column",
        gap: 20,
    },
    inline: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
    },
    headerSmallText: {
        fontSize: 14,
        color: Colors.dark_outline,
        fontWeight: "400",
        fontFamily: Fonts.regular,
    },
    headerMediumText: {
        fontSize: 22,
        color: Colors.dark_outline,
        fontFamily: Fonts.bold,
    }
});