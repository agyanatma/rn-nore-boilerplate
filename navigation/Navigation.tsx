import React from "react";
import { ColorSchemeName } from "react-native";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useAuth } from "../contexts/AuthContext";
import {
    AppStackParamList,
    AuthStackParamList,
    RootStackParamList,
} from "../constants/Types";

import LinkingConfiguration from "./LinkingConfiguration";
import BottomTabNavigator from "./BottomTabNavigator";
import LoginScreen from "../screens/LoginScreen/LoginScreen";

interface INavigationProps {
    colorScheme: ColorSchemeName;
}

interface IRootNavigatorProps {
    isAuthenticated: boolean;
}

const Navigation = ({ colorScheme }: INavigationProps) => {
    const { isAuthenticated } = useAuth();

    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <RootNavigator isAuthenticated={isAuthenticated} />
        </NavigationContainer>
    );
};

export default Navigation;

const RootStack = createStackNavigator<RootStackParamList>();
const AuthStack = createStackNavigator<AuthStackParamList>();
const AppStack = createStackNavigator<AppStackParamList>();

const RootNavigator = ({ isAuthenticated }: IRootNavigatorProps) => {
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            {isAuthenticated ? (
                <RootStack.Screen
                    name="App"
                    component={AppStackScreen}
                    options={{ animationEnabled: false }}
                />
            ) : (
                <RootStack.Screen
                    name="Auth"
                    component={AuthStackScreen}
                    options={{ animationEnabled: false }}
                />
            )}
        </RootStack.Navigator>
    );
};

const AuthStackScreen = () => {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="Login" component={LoginScreen} />
        </AuthStack.Navigator>
    );
};

const AppStackScreen = () => {
    return (
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="Main" component={BottomTabNavigator} />
        </AppStack.Navigator>
    );
};
