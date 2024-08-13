import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

const index = () => {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text>9JA PARRY</Text>
           
            <Link href={'/(tabs)'}>Explore</Link>
            <StatusBar style="dark" />
        </View>
    );
};

export default index;
