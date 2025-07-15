// app/lab5.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Button } from 'react-native';
import { getUsers, deleteUser } from '../lib/supabase_crud';
import { router } from 'expo-router';

export default function Lab5Screen() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data || []);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteUser(id);
      const updated = await getUsers();
      setUsers(updated || []);
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  const handleEdit = (id: number) => {
    router.push(`/edit/${id}`);
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
        <Text>Loading users...</Text>
      </View>
    );
  }

  return (
  <View style={styles.container}>
    <Text style={styles.title}>Users from Supabase</Text>

    <Button title="Add New User" onPress={() => router.push('/add')} />

    <FlatList
      data={users}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.userRow}>
          <Text style={styles.userItem}>
            {item.id}. {item.name} ({item.age}) - {item.email}
          </Text>
          <View style={styles.buttonRow}>
            <Text style={styles.editButton} onPress={() => handleEdit(item.id)}>Edit</Text>
            <Text style={styles.deleteButton} onPress={() => handleDelete(item.id)}>Delete</Text>
          </View>
        </View>
      )}
    />
  </View>
);
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  userRow: { marginBottom: 15, borderBottomWidth: 1, borderBottomColor: '#ccc', paddingBottom: 10 },
  userItem: { fontSize: 16 },
  buttonRow: { flexDirection: 'row', gap: 10, marginTop: 5 },
  editButton: { color: 'blue', marginRight: 15 },
  deleteButton: { color: 'red' },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});