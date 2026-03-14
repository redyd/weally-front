import { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, Pressable } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {Colors, Fonts} from "@/constants/theme";

export default function NotFound() {
    const spinAnim = useRef(new Animated.Value(0)).current;
    const fadeTitle = useRef(new Animated.Value(0)).current;
    const fadeSubtitle = useRef(new Animated.Value(0)).current;
    const fadeButton = useRef(new Animated.Value(0)).current;
    const slideButton = useRef(new Animated.Value(20)).current;
    const scaleButton = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        // Fourchette qui tourne en boucle
        Animated.loop(
            Animated.sequence([
                Animated.timing(spinAnim, {
                    toValue: 1,
                    duration: 900,
                    useNativeDriver: true,
                }),
                Animated.timing(spinAnim, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(spinAnim, {
                    toValue: 0,
                    duration: 900,
                    useNativeDriver: true,
                }),
                Animated.timing(spinAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ])
        ).start();

        // Apparition séquentielle
        Animated.sequence([
            Animated.delay(200),
            Animated.timing(fadeTitle, { toValue: 1, duration: 600, useNativeDriver: true }),
            Animated.delay(100),
            Animated.timing(fadeSubtitle, { toValue: 1, duration: 500, useNativeDriver: true }),
            Animated.delay(100),
            Animated.parallel([
                Animated.timing(fadeButton, { toValue: 1, duration: 400, useNativeDriver: true }),
                Animated.timing(slideButton, { toValue: 0, duration: 400, useNativeDriver: true }),
            ]),
        ]).start();
    }, []);

    const spin = spinAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

    const handlePressIn = () => {
        Animated.spring(scaleButton, {
            toValue: 0.95,
            useNativeDriver: true,
            speed: 50,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleButton, {
            toValue: 1,
            useNativeDriver: true,
            speed: 20,
        }).start();
    };

    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.container}>

                {/* Cercle décoratif fond */}
                <View style={styles.bgCircleLarge} />
                <View style={styles.bgCircleSmall} />

                {/* Icône animée */}
                <Animated.Text style={[styles.icon, { transform: [{ rotate: spin }] }]}>
                    🍴
                </Animated.Text>

                {/* 404 */}
                <Animated.Text style={[styles.errorCode, { opacity: fadeTitle }]}>
                    404
                </Animated.Text>

                {/* Trait décoratif */}
                <Animated.View style={[styles.divider, { opacity: fadeTitle }]} />

                {/* Message principal */}
                <Animated.Text style={[styles.title, { opacity: fadeSubtitle }]}>
                    Ce plat n&#39;est pas au menu
                </Animated.Text>

                <Animated.Text style={[styles.subtitle, { opacity: fadeSubtitle }]}>
                    La page que vous cherchez semble avoir disparu de notre cuisine.
                    Revenez à l&#39;accueil pour retrouver vos plats.
                </Animated.Text>

                {/* Bouton retour */}
                <Animated.View
                    style={[
                        { opacity: fadeButton, transform: [{ translateY: slideButton }, { scale: scaleButton }] },
                    ]}
                >
                    <Pressable
                        onPress={() => router.replace("/")}
                        onPressIn={handlePressIn}
                        onPressOut={handlePressOut}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Retour à l&#39;accueil</Text>
                    </Pressable>
                </Animated.View>

                {/* Petits éléments décoratifs */}
                <Animated.Text style={[styles.deco1, { opacity: fadeSubtitle }]}>🥕</Animated.Text>
                <Animated.Text style={[styles.deco2, { opacity: fadeSubtitle }]}>🫙</Animated.Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: Colors.accent,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 32,
        overflow: "hidden",
    },

    // Cercles décoratifs en arrière-plan
    bgCircleLarge: {
        position: "absolute",
        width: 380,
        height: 380,
        borderRadius: 190,
        backgroundColor: Colors.light_outline,
        opacity: 0.5,
        top: -80,
        right: -120,
    },
    bgCircleSmall: {
        position: "absolute",
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: Colors.primary,
        opacity: 0.06,
        bottom: 40,
        left: -60,
    },

    // Fourchette
    icon: {
        fontSize: 56,
        marginBottom: 16,
    },

    // 404
    errorCode: {
        fontSize: 120,
        fontFamily: Fonts.semiBold,
        color: Colors.primary,
        lineHeight: 120,
        letterSpacing: -4,
        fontWeight: "900",
    },

    // Trait
    divider: {
        width: 60,
        height: 3,
        backgroundColor: Colors.secondary,
        borderRadius: 2,
        marginTop: 8,
        marginBottom: 24,
    },

    // Titre
    title: {
        fontSize: 22,
        fontFamily: Fonts.semiBold,
        color: Colors.dark_outline,
        textAlign: "center",
        marginBottom: 14,
        fontWeight: "700",
        letterSpacing: 0.2,
    },

    // Sous-titre
    subtitle: {
        fontSize: 15,
        fontFamily: Fonts.medium,
        color: Colors.dark_outline,
        textAlign: "center",
        opacity: 0.65,
        lineHeight: 23,
        marginBottom: 40,
        maxWidth: 320,
    },

    // Bouton
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 50,
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 6,
    },
    buttonText: {
        color: Colors.light_outline,
        fontSize: 15,
        fontWeight: "700",
        fontFamily: Fonts.medium,
        letterSpacing: 0.3,
    },

    // Décorations flottantes
    deco1: {
        position: "absolute",
        fontSize: 30,
        bottom: 80,
        right: 40,
        opacity: 0.4,
        transform: [{ rotate: "15deg" }],
    },
    deco2: {
        position: "absolute",
        fontSize: 26,
        bottom: 120,
        left: 30,
        opacity: 0.4,
        transform: [{ rotate: "-10deg" }],
    },
});