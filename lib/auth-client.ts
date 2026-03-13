import {createAuthClient} from 'better-auth/react';
import * as SecureStore from 'expo-secure-store';
import {expoClient} from "@better-auth/expo/client";
import {Platform} from "react-native";

const baseURL = Platform.OS === 'web'
    ? 'http://localhost:3000'
    : process.env.EXPO_PUBLIC_API_URL;

export const authClient = createAuthClient({
    baseURL: baseURL,
    plugins: [
        expoClient({
            scheme: 'weally',
            storagePrefix: 'weally',
            storage: SecureStore,
        })
    ]
});

export type Session = typeof authClient.$Infer.Session;