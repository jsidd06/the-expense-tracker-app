import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import AllExpensesScreen from "./src/screens/AllExpenses";
import RecentExpenseScreen from "./src/screens/RecentExpense";
import ManageExpenseScreen from "./src/screens/ManageExpense";
import { GlobalStyles } from "./src/constants/style";

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

function BottomNav() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: GlobalStyles.colors.white,
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      }}
    >
      <BottomTabs.Screen
        name="AllExpense"
        component={AllExpensesScreen}
        options={{
          title: "All Expense",
          tabBarLabel: "All Expense",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        options={{
          title: "Recent Expense",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" color={color} size={size} />
          ),
        }}
        name="RecentExpense"
        component={RecentExpenseScreen}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomNav"
          component={BottomNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ManageExpense" component={ManageExpenseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
