import React, { createContext, useReducer } from "react";
import authInitialState from "./initialStates/authInitialState";
import authReducer from "./reducers/authReducer";

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(authReducer, authInitialState);

    return <GlobalContext.Provider value={{
        authState,
        authDispatch,
    }}>{children}</GlobalContext.Provider>
}

export default GlobalProvider;