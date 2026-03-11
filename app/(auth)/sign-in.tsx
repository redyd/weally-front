import {useState} from 'react';
import {Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import {useRouter} from 'expo-router';
import {authClient} from '@/lib/auth-client';
import {SafeAreaView} from "react-native-safe-area-context";

export default function SignIn() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSignIn() {
        setError('');
        setLoading(true);

        const {error} = await authClient.signIn.email({email, password});

        if (error) {
            setError('Email ou mot de passe incorrect: ' + error?.message);
        }

        setLoading(false);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Connexion</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            {error ? <Text style={styles.error}>{error}</Text> : null}

            <TouchableOpacity style={styles.button} onPress={handleSignIn} disabled={loading}>
                {loading
                    ? <ActivityIndicator color="#fff"/>
                    : <Text style={styles.buttonText}>Se connecter</Text>
                }
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/(auth)/sign-up')}>
                <Text style={styles.link}>Pas encore de compte ? S'inscrire</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: 'center', padding: 24},
    title: {fontSize: 28, fontWeight: 'bold', marginBottom: 32},
    input: {borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, marginBottom: 16},
    button: {backgroundColor: '#000', borderRadius: 8, padding: 16, alignItems: 'center', marginBottom: 16},
    buttonText: {color: '#fff', fontWeight: '600', fontSize: 16},
    link: {textAlign: 'center', color: '#666'},
    error: {color: 'red', marginBottom: 12},
});