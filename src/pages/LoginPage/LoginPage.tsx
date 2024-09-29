import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { authActions } from "../../store/slices/auth/auth.slice";
import { useEffect, useMemo, Fragment, useState } from "react";
import { Button } from "components/common/Button";
import { headerActions } from "../../store/slices/header";
import ReceiveVerification from "../../components/ReceiveVerification/ReceiveVerification";
import VerifyVerification from "../../components/VerifyVerification/VerifyVerification";
import { useNavigate } from "react-router-dom";
import main from "../../../.storybook/main";
import { signin } from "../../api/user";


const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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


    const handleSubmit = (step: number) => () => {
        console.log(step);
        if (step === 2) {
            // phone true
            // setLoginStep(2);


        } else if (step === 3) {
            setLoginStep(3);
            const isValid = checkValidId();
            if (isValid) {
                // SEL-1: 아이디 있는 경우 > mainPage 로 이동
                navigate("/");
            } else {
                // SEL-2: 아이디 없는 경우 > select buddy 로 이동
                navigate("/select-buddy");
            }

        }

    };

    const handleSubmitPhone = async (payload: any) => {
        console.log(payload)

        // TODO:: API TEST
        const res = await signin(payload);
        console.log(res)


        setLoginStep(2)
    }

    return (
        <main>
            {
                loginStep === 1
                    ? (<ReceiveVerification onSubmit={(payload)=>handleSubmitPhone(payload)}/>)
                    : (<VerifyVerification onSubmit={handleSubmit(3)}/>)
            }
        </main>
    );
};

export default LoginPage;
