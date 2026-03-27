import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LoginPage, SignupPage } from './features/auth';

export default function App() {
    const [currentScreen, setCurrentScreen] = useState('login');

    return (
        <SafeAreaProvider>
            {currentScreen === 'signup' ? (
                <SignupPage onNavigateToLogin={() => setCurrentScreen('login')} />
            ) : (
                <LoginPage onNavigateToSignup={() => setCurrentScreen('signup')} />
            )}
        </SafeAreaProvider>
    );
}
