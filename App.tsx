import React from 'react';
import { View, Text, Pressable, StyleSheet, Alert, ScrollView } from 'react-native';

type GroupMember = {
  name: string;
  github_repo: string;
  group_no: string;
};

const groupMembers: GroupMember[] = [
  { name: 'Daisy Di', github_repo: 'daisy12345', group_no: '9' },
  { name: 'Xiaoshan Wang', github_repo: 'xiaoshan12345', group_no: '9' },
  { name: 'Amy Li', github_repo: 'amy12345', group_no: '9' }
];

export default function App() {
  const handlePress = () => {
    Alert.alert('Lab 1 done');
  };

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
    marginBottom: 20
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
  }
});