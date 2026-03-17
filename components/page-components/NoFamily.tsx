import {Text, View, StyleSheet} from "react-native";
import {Colors, Fonts} from "@/constants/theme";
import PrimaryLargeButton from "@/components/buttons/PrimaryLargeButton";
import SecondaryLargeButton from "@/components/buttons/SecondaryLargeButton";
import {FontAwesome6} from "@expo/vector-icons";
import {router} from "expo-router";
import ActionColumns from "@/components/buttons/ActionColumns";

export default function NoFamily() {
    const goToCreateFamily = () => {
        router.push({pathname: "/(main)/family/join", params: {action: 'create'}});
    }

    const goToJoinFamily = () => {
        router.push({pathname: "/(main)/family/join", params: {action: 'join'}});
    }

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <FontAwesome6 name="house-chimney" size={32} color={Colors.secondary}/>
            </View>
            <Text style={styles.title}>Pas encore de famille</Text>
            <Text style={styles.subtitle}>
                Crée ta famille ou rejoins celle d&#39;un proche
            </Text>

            <ActionColumns>
                <PrimaryLargeButton text="Créer ma famille" onPress={goToCreateFamily}/>
                <SecondaryLargeButton text="Rejoindre une famille" onPress={goToJoinFamily}/>
            </ActionColumns>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: 32,
        paddingHorizontal: 8,
    },
    iconContainer: {
        width: 88,
        height: 88,
        borderRadius: 44,
        backgroundColor: Colors.accent,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    title: {
        fontFamily: Fonts.semiBold,
        fontSize: 20,
        color: Colors.dark_outline,
        marginBottom: 8,
        textAlign: "center",
    },
    subtitle: {
        fontFamily: Fonts.regular,
        fontSize: 14,
        color: Colors.primary_light,
        textAlign: "center",
        lineHeight: 20,
        marginBottom: 36,
        maxWidth: 260,
    }
})