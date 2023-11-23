import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const ExpensesList = ({ expenses }) => {
  const renderItem = (itemData) => {
    return <Text>{itemData.item.description}</Text>;
  };

  return (
    <View>
      <FlatList
        data={expenses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
