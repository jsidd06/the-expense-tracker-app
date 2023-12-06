import { StyleSheet, View, Text, Alert } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import { GlobalStyles } from "../../constants/style";
import Button from "../UI/Button";
import { formattedDate } from "../../utils/formatedDate";

const ExpensesForm = ({
  onCancel,
  submitHandlerLabel,
  onSubmit,
  defaultValues,
}) => {
  const [inputValues, setInputValues] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : "",
    date: defaultValues ? formattedDate(defaultValues.date) : "",
    description: defaultValues ? defaultValues.description : "",
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

    const amountValid = !isNaN(expensesData.amount) && expensesData.amount > 0;
    const dateValid = expensesData.date.toString() !== "Invalid Date";
    const descriptionValid = expensesData.description.trim().length > 0;

    if (!amountValid || !dateValid || !descriptionValid) {
      Alert.alert("Invalid input", "Please check your input values");
      return;
    }

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
