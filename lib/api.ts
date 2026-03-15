import { Platform } from 'react-native';
import {authClient} from "@/lib/auth-client";

function getBaseURL() {
    if (Platform.OS === 'web') return 'http://localhost:3000'
    return process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:3000'
}

export async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
    const isWeb = Platform.OS === 'web';
    const BASE_URL = getBaseURL();

    const cookies = !isWeb ? authClient.getCookie() : undefined;

    const res = await fetch(`${BASE_URL}${path}`, {
        ...options,
        credentials: isWeb ? 'include' : 'omit',
        headers: {
            'Content-Type': 'application/json',
            ...(!isWeb && cookies && { 'Cookie': cookies }),
            ...options?.headers,
        },
    });

    if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        throw new Error(error.message ?? `Erreur ${res.status}`);
    }

    return res.json();
}