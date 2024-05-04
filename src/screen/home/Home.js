import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Card from "./components/Card";
import { getItems } from "../../api/store";

const Home = () => {
  const items = getItems();

  return (
    <View style={s.container}>
      <Text style={s.header}>Popular</Text>
      <ScrollView style={s.content}>
        {items.map((item, i) => (
          <Card key={item.title} data={item} index={i} />
        ))}
      </ScrollView>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    gap: 16,
    paddingBottom: 50,
  },
  header: {
    fontSize: 26,
    textAlign: "center",
    color: "orange",
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Home;
