import React from "react";
import { Button, TouchableOpacity, StyleSheet, Text } from "react-native";



type Props = {
    count: number;
    setCount: (n: number) => void;
}

export default function Decrement({ count, setCount }: Props) {
    return (
        <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
            <Text style={styles.buttonText}>Dncrement</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#234567',
    paddingVertical: 5,
    paddingHorizontal: 3,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 10,
  },

buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    },
});