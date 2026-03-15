import {ResponsiveLayout} from "@/components/layouts/ResponsiveLayout";
import Avatar from "@/components/Avatar";
import {SafeAreaView} from "react-native-safe-area-context";
import {Pressable, Text, View, StyleSheet} from 'react-native';
import {authClient} from '@/lib/auth-client';
import {Colors, Fonts} from "@/constants/theme";
import {MaterialIcons} from "@expo/vector-icons";
import {router} from "expo-router";

export default function Account() {
    const {data: me, isPending} = authClient.useSession();

    async function handleSignOut() {
        await authClient.signOut();
    }

    const goToFamily = function () {
        router.push("/(main)/(family)");
    }

    if (isPending) return null;

    return (
        <ResponsiveLayout>
            <SafeAreaView style={styles.container}>

                {/* Avatar + infos */}
                <View style={styles.profileSection}>
                    <Avatar size={72} image={me?.user.image} name={me?.user.name} />
                    <Text style={styles.name}>{me?.user?.name}</Text>
                    <Text style={styles.email}>{me?.user?.email}</Text>
                </View>

                {/* Actions */}
                <View style={styles.actionsSection}>
                    <Pressable style={styles.actionRow} onPress={() => console.log('edit')}>
                        <MaterialIcons name="edit" size={20} color={Colors.primary}/>
                        <Text style={styles.actionText}>Modifier le profil</Text>
                        <MaterialIcons name="chevron-right" size={20} color={Colors.dark_outline} style={styles.chevron}/>
                    </Pressable>

                    <View style={styles.separator}/>

                    <Pressable style={styles.actionRow} onPress={goToFamily}>
                        <MaterialIcons name="group" size={20} color={Colors.primary}/>
                        <Text style={styles.actionText}>Ma famille</Text>
                        <MaterialIcons name="chevron-right" size={20} color={Colors.dark_outline} style={styles.chevron}/>
                    </Pressable>
                </View>

                {/* Sign out */}
                <Pressable style={styles.signOutButton} onPress={handleSignOut}>
                    <MaterialIcons name="logout" size={18} color="#E53935"/>
                    <Text style={styles.signOutText}>Se déconnecter</Text>
                </Pressable>

            </SafeAreaView>
        </ResponsiveLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        gap: 24,
    },
    profileSection: {
        alignItems: "center",
        paddingVertical: 24,
        gap: 6,
    },
    name: {
        fontFamily: Fonts.bold,
        fontSize: 20,
        color: Colors.dark_outline,
    },
    email: {
        fontFamily: Fonts.regular,
        fontSize: 14,
        color: Colors.dark_outline,
        opacity: 0.5,
    },
    actionsSection: {
        backgroundColor: "#F5F5F5",
        borderRadius: 14,
        paddingHorizontal: 16,
    },
    actionRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 14,
        gap: 12,
    },
    actionText: {
        fontFamily: Fonts.medium,
        fontSize: 15,
        color: Colors.dark_outline,
        flex: 1,
    },
    chevron: {
        opacity: 0.4,
    },
    separator: {
        height: 1,
        backgroundColor: Colors.accent,
        opacity: 0.5,
    },
    signOutButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        paddingVertical: 14,
        borderRadius: 14,
        borderWidth: 1.5,
        borderColor: "#FFCDD2",
        backgroundColor: "#FFF5F5",
    },
    signOutText: {
        fontFamily: Fonts.medium,
        fontSize: 15,
        color: "#E53935",
    },
});