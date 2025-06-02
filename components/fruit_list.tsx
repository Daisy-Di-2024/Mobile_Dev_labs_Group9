import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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
          <Text style={styles.button}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 6,
    fontSize: 18,
    color: 'blue',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

