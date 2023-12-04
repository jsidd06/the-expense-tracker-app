import { StyleSheet, View, Text } from "react-native";
import React from "react";
import Input from "./Input";
import { GlobalStyles } from "../../constants/style";

const ExpensesForm = () => {
  const amountHandler = () => {};
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textConfig={{
            keyboardType: "decimal-pad",
            onChangeText: amountHandler,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: () => {},
          }}
        />
      </View>
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

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: GlobalStyles.colors.white,
    textAlign: "center",
    marginVertical: 10,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowInput: {
    flex: 1,
  },
});
