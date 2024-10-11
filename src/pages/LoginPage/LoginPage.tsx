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
import { signin, verifyPhone } from "../../api/user";
import { UserResponseDTO } from "../../types/user.types";
import { AxiosResponse } from "axios";





const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userData } = useSelector((state: RootState) => state.auth);

    const [loginStep, setLoginStep] = useState(1);
    const [verifyCode, setVerifyCode] = useState<string>('');
    const [statePhone, setStatePhone] = useState<string>('');

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

    const checkValidId = async () => {
        // validation (인증번호)
        try {
            const params = {
                phone: statePhone
            };
            const userRes = await signin(params);
            return userRes;
        } catch (e) {
            return false;
        }
    };


    const handleSubmit = (step: number) => async () => {
        if (step === 3) {
            //  보낸 번호가 일치하는 경우.
            setLoginStep(3);
            const userRes: AxiosResponse<UserResponseDTO> | boolean = await checkValidId();
            if (userRes) {
                // SEL-1: 아이디 있는 경우 > mainPage 로 이동
                // SEL-1-1: 아이디 있는 경우, store 에 저장 후, persist 사용
                navigate("/");
            } else {
                // SEL-2: 아이디 없는 경우 > select buddy 로 이동
                navigate("/select-buddy");
            }
        }

    };

    const handleSubmitPhone = async (payload: string) => {
        setStatePhone(payload);
        const params = {
            phone: payload
        };
        const res = await verifyPhone(params);
        const { data } = res;
        setVerifyCode(data); // 앞의 6글자만
        setLoginStep(2);
    };

    return (
        <main>
            {
                loginStep === 1
                    ? (<ReceiveVerification onSubmit={(payload) => handleSubmitPhone(payload)}/>)
                    : (<VerifyVerification onSubmit={handleSubmit(3)} verifyCode={verifyCode}/>)
            }
        </main>
    );
};

export default LoginPage;
