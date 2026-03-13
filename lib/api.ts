import { authClient } from './auth-client';
import { Platform } from 'react-native';

const BASE_URL = Platform.OS === 'web'
    ? 'http://localhost:3000'
    : process.env.EXPO_PUBLIC_API_URL;

export async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
    const cookies = authClient.getCookie();

    console.log(path);

    const res = await fetch(`${BASE_URL}${path}`, {
        ...options,
        credentials: 'omit',
        headers: {
            'Content-Type': 'application/json',
            'Cookie': cookies,
            ...options?.headers,
        },
    });

    if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        throw new Error(error.message ?? `Erreur ${res.status}`);
    }

    return res.json();
}