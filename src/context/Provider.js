import React, { createContext, useReducer } from "react";
import authInitialState from "./initialStates/authInitialState";
import authReducer from "./reducers/authReducer";
import contactsInitialState from "./initialStates/contactsInitialState"
import contactsReducer from "./reducers/contactsReducer";

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(authReducer, authInitialState);
    const [contactState, contactDispatch] = useReducer(contactsReducer, contactsInitialState);

    return <GlobalContext.Provider value={{
        authState,
        authDispatch,
        contactState,
        contactDispatch
    }}>{children}</GlobalContext.Provider>
}

export default GlobalProvider;