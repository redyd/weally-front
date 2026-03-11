import {ResponsiveLayout} from "@/components/ResponsiveLayout";
import {SafeAreaView} from "react-native-safe-area-context";
import {Pressable, Text, View} from 'react-native';
import {authClient} from '@/lib/auth-client';

export default function Account() {

    async function handleSignOut() {
        await authClient.signOut();
    }

    const { data: session, isPending } = authClient.useSession();

    if (isPending) return <Text>Chargement...</Text>;

    console.log(session?.user); // ← dans les logs Expo

    return (
        <ResponsiveLayout>
            <SafeAreaView>
                <Text>Hey twin, connecte toi bip bip</Text>
                <Pressable onPress={handleSignOut}>
                    <Text>Sign Out</Text>
                </Pressable>
                <View>
                    <Text>{session?.user?.name}</Text>
                    <Text>{session?.user?.email}</Text>
                </View>
            </SafeAreaView>
        </ResponsiveLayout>
    );
}