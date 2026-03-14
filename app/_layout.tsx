import {useEffect} from 'react';
import {Stack, useRouter, useSegments} from 'expo-router';
import {authClient} from '@/lib/auth-client';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
} from '@expo-google-fonts/poppins';

export default function RootLayout() {
    const queryClient = new QueryClient();

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    const {data: session, isPending} = authClient.useSession();
    const router = useRouter();
    const segments = useSegments();

    useEffect(() => {
        if (isPending) return;

        const inAuthGroup = segments[0] === '(auth)';

        if (!session?.user && !inAuthGroup) {
            router.replace('/(auth)/sign-in');
        } else if (session?.user && inAuthGroup) {
            router.replace('/(main)/(tabs)');
        }
    }, [session, isPending, segments, router]);

    if (isPending) return null;

    return (
        <QueryClientProvider client={queryClient}>
            <Stack screenOptions={{ headerShown: false }} />
        </QueryClientProvider>
    );
}