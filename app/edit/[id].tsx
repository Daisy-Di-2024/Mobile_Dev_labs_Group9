// app/edit/[id].tsx
import { useLocalSearchParams, router } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { supabase } from '../../lib/supabase';
import { updateUser } from '../../lib/supabase_crud';
import React from 'react';

export default function EditUser() {
  const { id } = useLocalSearchParams();
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase
        .from('sampledatabase')
        .select('*')
        .eq('id', id)
        .single();
      if (data) {
        setName(data.name);
        setAge(data.age.toString());
        setEmail(data.email);
      }
      setLoading(false);
    };

    fetchUser();
  }, [id]);

  const handleSave = async () => {
    console.log('Updating user with:', {
    id: Number(id),
    name,
    age: Number(age),
    email,
  });

    await updateUser(Number(id), {
      name,
      age: Number(age),
      email,
    });
    router.push('/lab5');
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
        <Text>Loading user...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit User #{id}</Text>
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
      <Button title="Save" onPress={handleSave} />
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
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});