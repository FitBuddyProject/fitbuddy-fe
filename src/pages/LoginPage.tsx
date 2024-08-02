import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { authActions } from "../store/slices/auth/auth.slice";
import { useEffect, useMemo } from "react";
import { Button } from "components/common/Button/index";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { userData } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (userData) {
      console.log("user data added:: ", userData);
    } else {
      console.log("there is no user data");
    }
  }, [userData, dispatch]);

  const isPageReady = useMemo(() => {
    return userData && Object.entries(userData)?.length > 0;
  }, [userData]);

  const handleClickLogin = () => {
    const payload = {
      id: "hello@world.com",
      pw: "1234",
    };
    dispatch(authActions?.loginRequest(payload));
  };
  const handleClickLogout = () => {
    dispatch(authActions?.logout());
  };

  return (
    <>
      <div className="main-wrapper">
        <button onClick={handleClickLogin}>Login</button>
        <button onClick={handleClickLogout}>Logout</button>
        {isPageReady && (
          <div>
            {/*@ts-ignore*/}
            {userData.name}
          </div>
        )}
      </div>
      <Button type="button" color="primary" size="large" onClick={() => navigate("/")}>
        메인
      </Button>
    </>
  );
};

export default LoginPage;
