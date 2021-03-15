import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../../components/Button/Button";
import { useAuth } from "../../contexts/AuthContext";

const TabOneScreen = () => {
    const { logout } = useAuth();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab One</Text>
            <View style={styles.separator} />
            <Button title="Sign out" onPress={logout} />
        </View>
    );
};

export default TabOneScreen;

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
