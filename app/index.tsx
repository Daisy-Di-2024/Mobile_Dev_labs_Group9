import React from 'react';
import { View, Text, Pressable, StyleSheet, Alert, ScrollView, Button, TouchableOpacity } from 'react-native';
import FruitList from '../components/fruit_list';
import { router, useRouter } from 'expo-router';

type GroupMember = {
  name: string;
  github_repo: string;
  group_no: string;
};

const groupMembers: GroupMember[] = [
  { name: 'Daisy Di', github_repo: 'daisy12345', group_no: '9' },
  { name: 'Xiaoshan Wang', github_repo: 'xiaoshan12345', group_no: '9' },
  { name: 'Samarbeer singh', github_repo: 'amy12345', group_no: '9' }
];




export default function App() {
  const handlePress = () => {
    Alert.alert('Lab 1 done');
  };

  // lab3:
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Group Members</Text>

      {groupMembers.map((member, index) => (
        <Text key={index} style={styles.member}>
          {member.name}
        </Text>
      ))}

      <Pressable onPress={handlePress}>
        <Text style={styles.button}>Click here when Lab is done</Text>
      </Pressable>
      <Text></Text>
      <Text></Text>
      <Text></Text>

      <Text style={styles.title}>Welcome to the Fruit App</Text>
      <FruitList />
      <Text></Text>
      <Text></Text>
      <Text></Text>
      
      {/* Lab 3 */}
      <View>
        <Text style={styles.title}>Lab 3</Text>
        <TouchableOpacity style={styles.lab3Button} onPress={() => router.push('/lab3')}>
        <Text style={styles.lab3Text}>Go to Lab 3</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    
  );
}






const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: '#f0f8ff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  member: {
    fontSize: 18,
    marginVertical: 5
  },
  button: {
    marginTop: 30,
    fontSize: 18,
    color: 'blue',
    textDecorationLine: 'underline'
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  lab3Button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
  },
  lab3Text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});