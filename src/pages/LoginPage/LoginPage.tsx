import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { authActions } from "../../store/slices/auth/auth.slice";
import { useEffect, useMemo, Fragment } from "react";
import { Button } from "components/common/Button";
import { TopSect, LoginWrapper, Subtitle, Title, BottomSect } from "./LoginPage.styles";
import { headerActions } from "../../store/slices/header";


const LoginPage = () => {
    const dispatch = useDispatch();
    const { userData } = useSelector((state: RootState) => state.auth);

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

    const handleClickStart = () => {
        // isLogin > false 인 경우 로그인/회원가입 진행
    };

    return (
        <LoginWrapper>
            <TopSect>
                <Title>휴대폰 번호를 인증해주세요.</Title>
                <Subtitle>휴대폰 번호로 회원가입과 로그인이 진행됩니다.</Subtitle>
                <Subtitle>번호는 안전하게 보관됩니다</Subtitle>
            </TopSect>


            <BottomSect>
                <input type="text"/>

                <div className="validation">
                    유효성 문구 노출 영역
                </div>

                <Button type="button" color="primary" size="large" onClick={handleClickStart}>
                    인증번호 받기
                </Button>
                <div className="hint">
                    휴대폰 번호가 바뀌었다면 <span className="emphasis">이메일 인증</span>을 해주세요.
                </div>
            </BottomSect>

        </LoginWrapper>
    );
};

export default LoginPage;
