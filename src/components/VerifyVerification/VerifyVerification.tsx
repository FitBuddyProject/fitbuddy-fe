import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { headerActions } from "../../store/slices/header";
import {
    BottomSect,
    HintText,
    HintWrapper,
    InputBox,
    InputWrapper,
    LoginWrapper, PolicyWrapper, TimeLeft,
    Title,
    TopSect
} from "./VerifyVerification.styles";
import { Button } from "../common/Button";


interface VerifyVerificationProps {
    onSubmit: () => void;
}

const VerifyVerification: React.FC<VerifyVerificationProps> = ({ onSubmit }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(headerActions.setTitle("회원가입/로그인"));
    }, [dispatch]);


    const handleClickNext = () => {
        // validation

        // if - validation 성공 시
        onSubmit();

        // else - validation 실패 시
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

export default VerifyVerification;