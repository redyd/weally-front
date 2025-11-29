import { Colors, TextStyles } from "@/constants";
import { Text, View, StyleSheet } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>Aujourd&#39;hui</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    mainTitle: {
        color: Colors.text,
        textAlign: "left",
        ...TextStyles.mainTitle,
    }
});