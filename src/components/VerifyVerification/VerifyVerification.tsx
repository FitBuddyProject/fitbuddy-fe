import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
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
import { verifyPhone } from "../../api/user";


interface VerifyVerificationProps {
    onSubmit: () => void;
    verifyCode: string;
}

const VerifyVerification: React.FC<VerifyVerificationProps> = ({ onSubmit, verifyCode }) => {
    const [stateVerifyCode, setStateVerifyCode] = useState<any[]>([]); // 사용자 입력한 번호
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(headerActions.setTitle("회원가입/로그인"));
    }, [dispatch]);

    useEffect(() => {
        console.log(123, stateVerifyCode); // 설정된

    }, [stateVerifyCode]);

    const handleClickNext = () => {
        const blockVerifyCode = stateVerifyCode.reduce((acc, cur) => {
            return acc += cur;
        }, '');

        // validation 여섯 글자인지 체크
        if (blockVerifyCode.length !== 6) {
            console.log('FAILED1');
            return false;
        } else if ((+blockVerifyCode !== +verifyCode)) { // validation 같은 번호인지 체크
            console.log('FAILED2');
            return false;
        }
        onSubmit();
    };


    const handlePolicy = (path: string) => () => {
        // TODO: 개인정보/이용약관 정리 시, 사용 예정
        let url = 'https://www.naver.com';
        if (path === 'use-terms') {
            url = 'https://www.google.com';
        }
        window.open(url);
    };

    const handleInput = (payload: { index: number, value: string }) => {
        console.log(payload);
        setStateVerifyCode((prev: any[]) => {
            const updatedArray: any[] = [...prev];
            updatedArray[payload.index] = payload.value;
            return updatedArray;
        });
    };

    return (
        <VerifyVerificationWrapper>
            <TopSect>
                <Title>인증번호 6자리를 입력하세요. </Title>
                <InputWrapper>
                    <InputBox maxLength={1} type="number"
                              onChange={(event) => handleInput({ index: 0, value: event.target.value })}></InputBox>
                    <InputBox maxLength={1} type="number"
                              onChange={(event) => handleInput({ index: 1, value: event.target.value })}></InputBox>
                    <InputBox maxLength={1} type="number"
                              onChange={(event) => handleInput({ index: 2, value: event.target.value })}></InputBox>
                    <InputBox maxLength={1} type="number"
                              onChange={(event) => handleInput({ index: 3, value: event.target.value })}></InputBox>
                    <InputBox maxLength={1} type="number"
                              onChange={(event) => handleInput({ index: 4, value: event.target.value })}></InputBox>
                    <InputBox maxLength={1} type="number"
                              onChange={(event) => handleInput({ index: 5, value: event.target.value })}></InputBox>
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