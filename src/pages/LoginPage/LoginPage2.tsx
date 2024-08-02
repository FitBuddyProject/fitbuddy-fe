import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { authActions } from "../../store/slices/auth/auth.slice";
import { useEffect, useMemo, Fragment } from "react";
import { Button } from "components/common/Button";
import {
    TopSect,
    LoginWrapper,
    Title,
    BottomSect,
    InputWrapper,
    InputBox,
    HintWrapper, HintText, TimeLeft, PolicyWrapper
} from "./LoginPage2.styles";
import { headerActions } from "../../store/slices/header";


const LoginPage2 = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(headerActions.setTitle("회원가입/로그인"));
    }, [dispatch]);


    const handleClickNext = () => {
        console.log('handleClickNext:: ');
    };

    return (
        <LoginWrapper>
            <TopSect>
                <Title>인증번호 6자리를 입력하세요. </Title>
                <InputWrapper>
                    <InputBox></InputBox>
                    <InputBox></InputBox>
                    <InputBox></InputBox>
                    <InputBox></InputBox>
                    <InputBox></InputBox>
                    <InputBox></InputBox>
                </InputWrapper>
                <HintWrapper>
                    <HintText>인증번호 다시 받기</HintText>
                    <TimeLeft>3:00</TimeLeft>
                </HintWrapper>
            </TopSect>


            <BottomSect>
                <PolicyWrapper>
                    <div>이용약관</div>
                    <p>|</p>
                    <div>개인정보 취급방침</div>
                </PolicyWrapper>
                <Button type="button" color="primary" size="large" onClick={handleClickNext}>
                    동의하고 다음 단계로
                </Button>
            </BottomSect>

        </LoginWrapper>
    );
};

export default LoginPage2;
