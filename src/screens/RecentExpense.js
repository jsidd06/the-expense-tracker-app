import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

const RecentExpenseScreen = () => {
  return <ExpensesOutput expensesPeriodName="Last 7 Days" />;
};

export default RecentExpenseScreen;

const styles = StyleSheet.create({});
