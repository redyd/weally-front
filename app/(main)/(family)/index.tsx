import {Text, StyleSheet} from "react-native";
import {ResponsiveLayout} from "@/components/ResponsiveLayout";
import {Colors, Fonts} from "@/constants/theme";

export default function FamilyHome() {
    return (
        <ResponsiveLayout>
            <Text style={styles.title}>Ma famille</Text>
        </ResponsiveLayout>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: Fonts.bold,
        fontSize: 18,
        color: Colors.dark_outline
    }
});