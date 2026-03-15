import {createAuthClient} from 'better-auth/react';
import {expoClient} from "@better-auth/expo/client";
import * as SecureStore from 'expo-secure-store';
import {Platform} from "react-native";

const baseURL = Platform.OS === 'web'
    ? 'http://localhost:3000'
    : process.env.EXPO_PUBLIC_API_URL;

export const authClient = createAuthClient({
    baseURL,
    plugins: Platform.OS !== 'web'
        ? [expoClient({ scheme: 'weally', storagePrefix: 'weally', storage: SecureStore })]
        : [],
});

export type Session = typeof authClient.$Infer.Session;