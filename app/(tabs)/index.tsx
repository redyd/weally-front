import { ResponsiveLayout } from "@/components/ResponsiveLayout";
import { Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    return (
        <ResponsiveLayout>
            <SafeAreaView style={styles.container}>
                <Text>Edit app/index.tsx to edit this screen.</Text>
                <Link href="/(tabs)/planning">Go to planning</Link>
            </SafeAreaView>
        </ResponsiveLayout>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 }
});