import { User } from "@/types";
import { createContext, useEffect, useReducer } from "react";

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
}

interface Action {
  type: string;
  payload?: any;
}

export const AuthContext = createContext<{
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
}>({
  user: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const authReducer = (state: AuthState, action: Action): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload, isLoggedIn: true };
    case "LOGOUT":
      return { user: null, isLoggedIn: false };
    default:
      return state;
  }
};

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isLoggedIn: false,
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "null");
    const isLoggedIn = !!storedUser; // Check if user data is present

    if (isLoggedIn) {
      dispatch({
        type: "LOGIN",
        payload: storedUser,
      });
    }
  }, []);

  const login = (user: User) => {
    localStorage.setItem("user", JSON.stringify(user));
    dispatch({ type: "LOGIN", payload: user });
  };

  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
