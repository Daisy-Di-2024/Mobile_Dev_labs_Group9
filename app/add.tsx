// app/add.tsx
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { createUser } from '../lib/supabase_crud';
import { router } from 'expo-router';
import React from 'react';

export default function AddUser() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const handleAdd = async () => {
    if (!name || !age || !email) {
      Alert.alert('All fields are required');
      return;
    }

    try {
      await createUser({
        name,
        age: Number(age),
        email,
      });
      router.push('/lab5');
    } catch (err) {
      console.error('Create error:', err);
      Alert.alert('Failed to add user');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New User</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        placeholder="Age"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
});