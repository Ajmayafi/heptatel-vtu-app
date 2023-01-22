import React, { createContext, useReducer } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "AUTH_IS_READY":
      return { ...state, authIsReady: true, user: action.payload };
    case "LOGIN":
      return { ...state, user: action.payload };
    case "UPDATE_USER":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

const mock = {
  name: "Test Test",
  balance: 90,
  gender: "Male",
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    user: mock,
    authIsReady: false,
    darkMode: false,
  });

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
