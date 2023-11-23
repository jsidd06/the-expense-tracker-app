import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/style";

const ExpensesItem = ({ description, amount, date }) => {
  return (
    <View style={styles.ctn}>
      <View style={styles.descriptionCtn}>
        <Text style={styles.textBase}>{description}</Text>
        <Text style={styles.textBase}>{date?.toString()}</Text>
      </View>
      <View style={styles.subCtn}>
        <Text
          style={{
            ...styles.textBase,
            color: GlobalStyles.colors.primary800,
            textAlign: "center",
          }}
        >
          ${amount}
        </Text>
      </View>
    </View>
  );
};

export default ExpensesItem;

const styles = StyleSheet.create({
  ctn: {
    flexDirection: "row",
    backgroundColor: GlobalStyles.colors.primary700,
    padding: 10,
    justifyContent: "space-between",
    marginVertical: 5,
    borderRadius: 8,
    elevation: 3,
    shadowColor: GlobalStyles.colors.primary500,
    shadowOffset: { width: 0, height: 0 },
  },
  textBase: {
    fontSize: 16,
    fontWeight: "500",
    color: GlobalStyles.colors.primary50,
  },
  subCtn: {
    backgroundColor: GlobalStyles.colors.white,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 8,
  },
  descriptionCtn: {
    marginVertical: 8,
  },
});
