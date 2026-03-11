import {Text, StyleSheet} from "react-native";
import {Colors} from "@/constants/theme";
import {SafeAreaView} from "react-native-safe-area-context";

export default function Planning() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Bienvenue sur le planning</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.lightOutline
    }
});