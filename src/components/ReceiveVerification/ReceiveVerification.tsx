import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useMemo, useState } from "react";
import { headerActions } from "../../store/slices/header";
import { BottomSect, ReceiveVerificationWrapper, Subtitle, Title, TopSect } from "./ReceiveVerification.styles";
import { Button } from "../common/Button";

interface ReceiveVerificationProps {
    onSubmit: (params: any) => void;
}

const ReceiveVerification: React.FC<ReceiveVerificationProps> = ({ onSubmit }) => {
    const dispatch = useDispatch();
    const [phone, setPhone] = useState('');
    const [isError, setError] = useState(false);
    useEffect(() => {
        dispatch(headerActions.setTitle("회원가입/로그인"));
    }, [dispatch]);


    const handleClickStart = () => {
        // validation (인증번호)
        const validTest = /^010\d{7,8}$/.test(phone);
        if (validTest) onSubmit(phone);
        else setError(true);
    };


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (isError) setError(false);
        const { value } = event?.target;
        setPhone(value);
    };


    return (
        <ReceiveVerificationWrapper>
            <TopSect>
                <Title>휴대폰 번호를 인증해주세요.</Title>
                <Subtitle>
                    <p>휴대폰 번호로 회원가입과 로그인이 진행됩니다.</p>
                    <p>번호는 안전하게 보관됩니다.</p>
                </Subtitle>
            </TopSect>


            <BottomSect>
                <input type="text" value={phone} onChange={handleInputChange} placeholder=" - 를 빼고 입력해주세요."/>

                {isError
                    ? <div className="validation">유효성 문구 노출 영역</div>
                    : <div className="validation" style={{ visibility: 'hidden' }}>비밀!</div>
                }

                <Button type="button" color="primary" size="large" onClick={handleClickStart} disabled={isError}>
                    인증번호 받기
                </Button>
                <div className="hint">
                    휴대폰 번호가 바뀌었다면 <span className="emphasis">이메일 인증</span>을 해주세요.
                </div>
            </BottomSect>
        </ReceiveVerificationWrapper>
    );
};

export default ReceiveVerification;