import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { headerActions } from "../../store/slices/header";
import { MyInfoContainer, MyInfoWrapper, MyInfoBodySect, MyInfoFooterSect, MyInfoHeaderSect } from "./MyInfo.styles";
import { Button } from "../../components/common/Button";

const MyInfo = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(headerActions.setTitle("개인정보"));

    }, []);
    return (
        <main>
            <MyInfoWrapper>
                <MyInfoContainer>
                    <MyInfoHeaderSect>
                        <div>
                            <p>
                                달리는 사자
                            </p>
                        </div>
                        <Button>
                            <p> 회원탈퇴</p>
                        </Button>
                    </MyInfoHeaderSect>

                    <MyInfoBodySect>
                        <div className="input-sect">
                            <p>휴대폰 인증</p>
                            <input type="text"/>
                        </div>
                        <div className="input-sect">
                            <p>이메일 주소</p>
                            <input type="text"/>
                        </div>

                        <div className="hint-sect">
                            <p>이메일 주소를 등록해주세요.</p>
                            <p>휴대폰 번호가 바뀌었을 때 로그인 수단으로 이용할 수 있어요.</p>
                        </div>

                    </MyInfoBodySect>


                    <MyInfoFooterSect>
                        <Button type="button" color="primary" size="large" onClick={() => {
                        }}>
                            정보수정하기
                        </Button>
                    </MyInfoFooterSect>
                </MyInfoContainer>
            </MyInfoWrapper>
        </main>
    );
};

export default MyInfo;