import {SplashScreen, Stack} from 'expo-router';
import 'react-native-reanimated';
import {StyleSheet, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Colors} from "@/constants";
import {useEffect} from "react";
import {useFonts} from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        Manrope: require('../assets/fonts/Manrope-Regular.ttf'),
        ManropeBold: require('../assets/fonts/Manrope-Bold.ttf'),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.mainView}>
                <Stack screenOptions={{headerShown: false}}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    mainView: {
        flex: 1,
        marginTop: 24,
        paddingInline: 24
    }
});