import { useState, createContext } from "react";

export const UserContext = createContext();

const UserProvider = props => {
    const [isLogged, setLogged] = useState(false);
    const value = {
        isLogged,
        setLogged,
    };

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;