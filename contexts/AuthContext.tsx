import React, { createContext, ReactNode, useCallback, useMemo, useState } from "react";
import { AuthState } from "../constants/Types";

interface IAuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthState | undefined>(undefined);

const AuthProvider = ({ children }: IAuthProviderProps) => {
    const [isAuthenticated, setAuthenticated] = useState<boolean>(false);

    const login = useCallback(() => {
        setAuthenticated(true);
    }, [setAuthenticated]);

    const logout = useCallback(() => {
        setAuthenticated(false);
    }, [setAuthenticated]);

    const value = useMemo(
        () => ({
            isAuthenticated,
            login,
            logout,
        }),
        [isAuthenticated, login, logout]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context;
};

export { AuthContext, AuthProvider, useAuth };
