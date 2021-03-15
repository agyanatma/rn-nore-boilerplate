import * as Linking from "expo-linking";

// deeplinking purpose
export default {
    prefixes: [Linking.makeUrl("/")],
    config: {
        screens: {},
    },
};
