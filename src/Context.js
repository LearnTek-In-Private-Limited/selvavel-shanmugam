import React, { createContext, useReducer } from "react";

const themeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, { darkMode: false });

  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {children}
    </themeContext.Provider>
  );
};

export { themeContext, ThemeProvider };
