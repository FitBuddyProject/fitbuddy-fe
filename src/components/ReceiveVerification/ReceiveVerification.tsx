import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import React, { useEffect, useMemo, useState } from "react";
import { headerActions } from "../../store/slices/header";
import { authActions } from "../../store/slices/auth/auth.slice";
import { BottomSect, LoginWrapper, Subtitle, Title, TopSect } from "./ReceiveVerification.styles";
import { Button } from "../common/Button";

interface ReceiveVerificationProps {
    onSubmit: () => void;
}

const ReceiveVerification: React.FC<ReceiveVerificationProps> = ({onSubmit}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(headerActions.setTitle("회원가입/로그인"));
    }, [dispatch]);


    const handleClickStart = () => {
        // validation (인증번호)

        // if - validation 성공 시
        onSubmit();

        // else - validation 실패 시
    };

    return (
        <LoginWrapper>
            <TopSect>
                <Title>휴대폰 번호를 인증해주세요.</Title>
                <Subtitle>
                    <p>휴대폰 번호로 회원가입과 로그인이 진행됩니다.</p>
                    <p>번호는 안전하게 보관됩니다</p>
                </Subtitle>
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

export default ReceiveVerification;