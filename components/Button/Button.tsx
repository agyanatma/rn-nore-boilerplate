import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

interface IButtonProps {
    title: string;
}

const Button = ({ title, ...props }: IButtonProps & TouchableOpacity["props"]) => {
    return (
        <TouchableOpacity style={styles.container} {...props}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
    },
    title: {
        color: "white",
        fontWeight: "700",
    },
});
