import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { authActions } from "../../store/slices/auth/auth.slice";
import { useEffect, useMemo, Fragment, useState } from "react";
import { Button } from "components/common/Button";
import { headerActions } from "../../store/slices/header";
import ReceiveVerifaction from "../../components/ReceiveVerification/ReceiveVerification";
import VerifyVerifaction from "../../components/VerifyVerification/VerifyVerification";


const LoginPage = () => {
    const dispatch = useDispatch();
    const { userData } = useSelector((state: RootState) => state.auth);

    const [loginStep, setLoginStep] = useState(1);

    useEffect(() => {
        dispatch(headerActions.setTitle("회원가입/로그인"));
    }, [dispatch]);

    useEffect(() => {
        if (userData) {
            console.log("user data added:: ", userData);
        } else {
            console.log("there is no user data");
        }
    }, [userData]);

    const isLogin = useMemo(() => {
        return !!(userData && Object.entries(userData)?.length > 0);
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

    const checkValidId = () => {
        // validation (인증번호)
        console.log("checking ");
        return false;
    };


    const handleClickVerfication = (step: number) => {
        console.log(step);
        if (step === 2) {
            setLoginStep(2);

        } else if (step === 3) {
            setLoginStep(3);
            const isValid = checkValidId();
            if (isValid) {
                console.log("yes id")
                // 아이디 있는 경우 > mainPage 로 이동

            } else {
                console.log("no id")
                // 아이디 없는 경우 > select buddy 로 이동

            }

        }

    };

    return (
        loginStep === 1
            ? (<ReceiveVerifaction onSubmit={() => handleClickVerfication(2)}/>)
            : (<VerifyVerifaction onSubmit={() => handleClickVerfication(3)}/>)
    );
};

export default LoginPage;
