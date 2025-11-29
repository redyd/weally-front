import { Text, View, StyleSheet } from 'react-native';

export default function MealsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Meals Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontFamily: 'Sans ms',
        fontSize: 20
    },
});