import React, { createContext, useReducer } from "react";
import authInitialState from "./initialStates/authInitialState";
import authReducer from "./reducers/authReducer";
import contactsInitialState from "./initialStates/contactsInitialState"
import contactsReducer from "./reducers/contactsReducer";
import postsInitialState from "./initialStates/postsInitialState";
import postsReducer from "./reducers/postsReducer";
import messagesReducer from "./reducers/messagesReducer";
import chatsInittalState from "./initialStates/chatsInittalState";

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(authReducer, authInitialState);
    const [contactState, contactDispatch] = useReducer(contactsReducer, contactsInitialState);
    const [postsState, postsDispatch] = useReducer(postsReducer, postsInitialState);
    const [chatsState, ChatsDispatch] = useReducer(messagesReducer, chatsInittalState);

    return <GlobalContext.Provider value={{
        authState,
        authDispatch,
        contactState,
        contactDispatch,
        postsState,
        postsDispatch,
        chatsState,
        ChatsDispatch
    }}>{children}</GlobalContext.Provider>
}

export default GlobalProvider;