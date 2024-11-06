import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { authActions } from "store/slices/auth/auth.slice";
import { headerActions } from "store/slices/header";
import { setAuthorizationHeader } from "api/api";
import { signin, verifyPhone } from "api/user";

import ReceiveVerification from "components/ReceiveVerification/ReceiveVerification";
import VerifyVerification from "components/VerifyVerification/VerifyVerification";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData } = useSelector((state: RootState) => state.auth);

  const [loginStep, setLoginStep] = useState(1);
  const [verifyCode, setVerifyCode] = useState<string>("");
  const [statePhone, setStatePhone] = useState<string>("");

  useEffect(() => {
    dispatch(headerActions.setTitle("회원가입/로그인"));
  }, [dispatch]);

  useEffect(() => {
    if (userData) {
      // 행동 카운트 변수 추가
      const updatedData = { ...userData, exerciseCount: 0, showerCount: 0, talkCount: 0, sleepCount: 0, petCount: 0 };
      localStorage.setItem("userData", JSON.stringify(updatedData));
    } else {
      console.log("there is no user data");
    }
  }, [userData]);

  const validAccount = async () => {
    // validation (인증번호)
    try {
      const userRes = await signin({ phone: statePhone });
      return userRes;
    } catch (e) {
      return false;
    }
  };

  const handleSubmit = (step: number) => async () => {
    if (step === 3) {
      //  보낸 번호가 일치하는 경우.
      setLoginStep(3);
      const userRes = await validAccount();
      console.log("userRes :: {}", userRes);
      if (userRes) {
        // SEL-1: 아이디 있는 경우 > mainPage 로 이동
        const { headers, data } = userRes;
        setAuthorizationHeader(headers.authorization);
        localStorage.setItem("authToken", headers.authorization);

        dispatch(authActions.loginRequestSuccess(data));
        navigate("/");
      } else {
        // SEL-2: 아이디 없는 경우 > select buddy 로 이동
        localStorage.setItem("temp_phone", statePhone);
        navigate(`/select-buddy`);
      }
    }
  };

  const handleSubmitPhone = async (payload: string) => {
    setStatePhone(payload);
    const params = {
      phone: payload,
    };
    const res = await verifyPhone(params);
    const { data } = res;
    setVerifyCode(data); // 앞의 6글자만
    setLoginStep(2);
  };

  return (
    <main>
      {loginStep === 1 ? (
        <ReceiveVerification onSubmit={(payload) => handleSubmitPhone(payload)} />
      ) : (
        <VerifyVerification onSubmit={handleSubmit(3)} verifyCode={verifyCode} />
      )}
    </main>
  );
};

export default LoginPage;
