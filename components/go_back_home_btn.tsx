import React from 'react';
import { Button } from 'react-native';
import { useRouter } from 'expo-router';

const GoBackHomeBtn = () => {
    const router = useRouter();

    const handlePress = () => {
        router.push('/');
    };

    return (
        <Button title="Go Back Home" onPress={handlePress} />
    );
};

export default GoBackHomeBtn;