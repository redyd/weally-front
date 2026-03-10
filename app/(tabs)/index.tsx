import {Text, View, StyleSheet} from "react-native";
import {Colors} from "@/constants/theme";
import {Link} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";

export default function Index() {

    return (
        <SafeAreaView style={styles.container}>
            <Text>Edit app/index.tsx to edit this screen.</Text>
            <Link href="/planning">Go to planning</Link>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.lightOutline
    }
});
