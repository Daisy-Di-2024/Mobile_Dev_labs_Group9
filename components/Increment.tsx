import React from 'react';
import { Button, StyleSheet, TouchableOpacity, Text } from 'react-native';



type Props = {
  count: number;
  setCount: (n: number) => void;
};


export default function Increment({ count, setCount }: Props) {
    return(
        <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
            <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
    )
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