import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import { GlobalStyles } from "../../constants/style";
import Button from "../UI/Button";

const ExpensesForm = ({ onCancel, submitHandlerLabel, onSubmit }) => {
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    description: "",
  });
  const inputHandler = (key, value) => {
    setInputValues((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const submitHandler = () => {
    const expensesData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };
    onSubmit(expensesData);
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputHandler.bind(this, "amount"),
            value: inputValues.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputHandler.bind(this, "date"),
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label="Description"
        textConfig={{
          multiline: true,
          onChangeText: inputHandler.bind(this, "description"),
          value: inputValues.description,
        }}
      />
      <View style={styles.btnCtn}>
        <Button mode="flat" style={styles.button} onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitHandlerLabel}
        </Button>
      </View>
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
  btnCtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
