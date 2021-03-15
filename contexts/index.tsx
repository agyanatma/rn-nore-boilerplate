import React, { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";

interface IAppProviderProps {
    children: ReactNode;
}

const AppProvider = ({ children }: IAppProviderProps) => {
    return <AuthProvider>{children}</AuthProvider>;
};

export default AppProvider;
