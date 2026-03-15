import { ResponsiveLayout } from "@/components/layouts/ResponsiveLayout";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Planning() {
    return (
        <ResponsiveLayout>
            <SafeAreaView style={styles.container}>
                <Text>Hey twin</Text>
            </SafeAreaView>
        </ResponsiveLayout>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 }
});