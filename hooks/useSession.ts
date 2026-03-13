import { authClient } from '@/lib/auth-client';

export function useSession() {
    const { data: session, isPending, error } = authClient.useSession();

    const status = isPending
        ? 'loading'
        : session?.user
            ? 'authenticated'
            : 'unauthenticated';

    return { status, session, isPending, error };
}