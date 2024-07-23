import { useState } from "react";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    // TODO:: 로그인 로직
    setIsLoggedIn(true);
  };

  const logout = () => {
    // TODO:: 로그아웃 로직
    setIsLoggedIn(false);
  };

  return { isLoggedIn, login, logout };
};

export default useAuth;
