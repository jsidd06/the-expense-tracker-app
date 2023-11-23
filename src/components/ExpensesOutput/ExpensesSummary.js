import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ExpensesSummary = ({ expenses, expensesPeriodName }) => {
  const expensesSum = expenses?.reduce((sum, expenses) => {
    return sum + expenses.amount;
  }, 0);
  return (
    <View>
      <Text>{expensesPeriodName}</Text>
      <Text>${expensesSum?.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({});
