import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/style";
import Button from "../components/UI/Button";

const ManageExpenseScreen = ({ route, navigation }) => {
  const expensesId = route?.params?.expenseId;
  const isEditing = !!expensesId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const deleteHandler = () => {
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.rootCtn}>
      <View style={styles.btnCtn}>
        <Button mode="flat" style={styles.button} onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.subCtn}>
          <IconButton
            iconName="trash"
            size={24}
            color={GlobalStyles.colors.error50}
            onPress={deleteHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpenseScreen;

const styles = StyleSheet.create({
  rootCtn: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  subCtn: {
    marginTop: 16,
    padding: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
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
