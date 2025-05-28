import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function FruitList() {
  const fruits = ['apple', 'orange', 'mango'];
  const router = useRouter();
  
  const handlePress = (fruit_name: string) => {
    router.push(`/${fruit_name}`);
  };

  return (
    <View>
      {fruits.map((item) => (
        <TouchableOpacity key={item} onPress={() => handlePress(item)} style={{ padding: 10 }}>
          <Text style={{ fontSize: 18 }}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

