import React from "react";
import {
  View,
  Text,
  Pressable,
  Alert,
  StyleSheet,
  ScrollView,
} from "react-native";


const members: { name: string; github_repo: string; group_no: string }[] = [
  { name: "Florawang43", github_repo: "alice-zhang", group_no: "3" },
  { name: "Bob Li", github_repo: "bob-li", group_no: "3" },
  { name: "Charlie Wu", github_repo: "charlie-wu", group_no: "3" },
];

export default function App() {

  const onPressComplete = () => {
    Alert.alert("Lab 1 done");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>小组成员列表</Text>

      <ScrollView contentContainerStyle={styles.list}>
        {members.map((m, idx) => (
          <Text key={idx} style={styles.item}>
            {`${m.name} （GitHub: ${m.github_repo}，组号: ${m.group_no}）`}
          </Text>
        ))}
      </ScrollView>

      <Pressable onPress={onPressComplete} style={styles.button}>
        <Text style={styles.buttonText}>点我完成实验 1</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 16,
  },
  list: {
    flexGrow: 1,
    justifyContent: "flex-start",
  },
  item: {
    fontSize: 18,
    paddingVertical: 4,
  },
  button: {
    padding: 12,
    alignItems: "center",
    backgroundColor: "#2196F3",
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
});
