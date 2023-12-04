import { StyleSheet, View } from "react-native";
import React from "react";
import Input from "./Input";

const ExpensesForm = () => {
  const amountHandler = () => {};
  return (
    <View>
      <Input
        label="Amount"
        textConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountHandler,
        }}
      />
      <Input
        label="Date"
        textConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label="Description"
        textConfig={{
          multiline: true,
        }}
      />
    </View>
  );
};

export default ExpensesForm;

const styles = StyleSheet.create({});
