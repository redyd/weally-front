import { useEffect } from 'react';
import { Slot, useRouter, useSegments } from 'expo-router';
import { authClient } from '@/lib/auth-client';

export default function RootLayout() {
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();
    const segments = useSegments();

    useEffect(() => {
        if (isPending) return;

        const inAuthGroup = segments[0] === '(auth)';

        if (!session?.user && !inAuthGroup) {
            router.replace('/(auth)/sign-in');
        } else if (session?.user && inAuthGroup) {
            router.replace('/(app)');
        }
    }, [session, isPending, segments]);

    if (isPending) return null;

    return <Slot />;
}