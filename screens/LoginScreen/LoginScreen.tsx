import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useAuth } from "../../contexts/AuthContext";

import Button from "../../components/Button/Button";

const LoginScreen = () => {
    const { login } = useAuth();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Screen</Text>
            <View style={styles.separator} />
            <Button title="Sign in" onPress={login} />
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});
