import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constants/style";

const dummy_data = [
  {
    id: 1,
    description: "Another book",
    amount: 23.05,
    date: new Date("2023-12-02"),
  },
  {
    id: 2,
    description: "A trouser",
    amount: 3.05,
    date: new Date("2022-12-02"),
  },
  {
    id: 3,
    description: "A Paint",
    amount: 23.01,
    date: new Date("2023-02-02"),
  },
  {
    id: 4,
    description: "A but Pain",
    amount: 22.05,
    date: new Date("2023-12-12"),
  },
  {
    id: 5,
    description: "Closer Packet",
    amount: 53.05,
    date: new Date("2021-12-02"),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriodName }) => {
  return (
    <View style={styles.ctn}>
      <ExpensesSummary
        expenses={dummy_data}
        expensesPeriodName={expensesPeriodName}
      />
      <ExpensesList expenses={dummy_data} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  ctn: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary800,
    padding: 20,
  },
});
