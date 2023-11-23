import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";

const ManageExpenseScreen = ({ route, navigation }) => {
  const expensesId = route?.params?.expenseId;
  const isEditing = !!expensesId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View>
      <Text>ManageExpenseScreen</Text>
    </View>
  );
};

export default ManageExpenseScreen;

const styles = StyleSheet.create({});
