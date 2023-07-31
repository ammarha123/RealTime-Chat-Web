import { createContext, useState, useCallback } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setState] = useState(null)
    const [registerInfo, setRegisterInfo] = useState({
        name: "",
        email: "",
        password: "",
    })

    console.log("registerInfo", registerInfo)

    const updateRegisterInfo = useCallback((info) => {
        setRegisterInfo(info);
    }, []);

    return (
        <AuthContext.Provider value={{ user, registerInfo, updateRegisterInfo }}>
            {children}
        </AuthContext.Provider>
    );
}