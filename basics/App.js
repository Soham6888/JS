import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HistoryScreen from "./screens/HistoryScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ProjectScreen from "./screens/ProjectScreen";
import ScheduleScreen from "./screens/ScheduleScreen";
import SettingScreen from "./screens/SettingScreen";
import TimelineScreen from "./screens/TimelineScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="history" component={HistoryScreen} />
        <Stack.Screen name="profile" component={ProfileScreen} />
        <Stack.Screen name="projects" component={ProjectScreen} />
        <Stack.Screen name="settings" component={SettingScreen} />
        <Stack.Screen name="timelins" component={TimelineScreen} />
        <Stack.Screen name="schedule" component={ScheduleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
