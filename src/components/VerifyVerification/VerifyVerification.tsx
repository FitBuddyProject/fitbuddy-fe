import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { headerActions } from "../../store/slices/header";
import {
    BottomSect,
    HintText,
    HintWrapper,
    InputBox,
    InputWrapper,
    VerifyVerificationWrapper, PolicyContainer, TimeLeft,
    Title,
    TopSect
} from "./VerifyVerification.styles";
import { Button } from "../common/Button";
import main from "../../../.storybook/main";


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


    const handlePolicy = (path: string) => () => {
        // TODO: 개인정보/이용약관 정리 시, 사용 예정
        let url = 'https://www.naver.com';
        if (path === 'use-terms') {
            url = 'https://www.google.com';
        }
        window.open(url);

    };

    return (
        <VerifyVerificationWrapper>
            <TopSect>
                <Title>인증번호 6자리를 입력하세요. </Title>
                <InputWrapper>
                    <InputBox maxLength={1}></InputBox>
                    <InputBox maxLength={1}></InputBox>
                    <InputBox maxLength={1}></InputBox>
                    <InputBox maxLength={1}></InputBox>
                    <InputBox maxLength={1}></InputBox>
                    <InputBox maxLength={1}></InputBox>
                </InputWrapper>
                <HintWrapper>
                    <HintText>인증번호 다시 받기</HintText>
                    <TimeLeft>3:00</TimeLeft>
                </HintWrapper>
            </TopSect>


            <BottomSect>
                <PolicyContainer>
                    <div onClick={handlePolicy('use-terms')}>이용약관</div>
                    <p>|</p>
                    <div onClick={handlePolicy('privacy-policy')}> 개인정보 취급방침</div>
                </PolicyContainer>
                <Button type="button" color="primary" size="large" onClick={handleClickNext}>
                    동의하고 다음 단계로
                </Button>
            </BottomSect>

        </VerifyVerificationWrapper>
    );

};

export default VerifyVerification;