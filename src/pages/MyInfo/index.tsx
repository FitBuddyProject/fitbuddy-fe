import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { headerActions } from "../../store/slices/header";
import { Button } from "../../components/common/Button";
import { MyInfoContainer, MyInfoWrapper, MyInfoBodySect, MyInfoFooterSect, MyInfoHeaderSect } from "./MyInfo.styles";
import {
  EmailSect,
  CellphoneSect,
  MyInfoModifyContainer,
  MyInfoModifyWrapper,
  NicknameSect,
  FooterSect,
  InputBox,
  TitleBox,
} from "./MyInfoModify.styles";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

const MyInfo = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state: RootState) => state.auth);
  console.log(userData);
  const [isModify, setModify] = useState<boolean>(false);

  useEffect(() => {
    dispatch(headerActions.setTitle("개인정보"));
  }, []);

  const handleRegisterModified = () => {
    setModify(false);
  };

  const ScreenModifyTrue = () => (
    <MyInfoModifyWrapper>
      <MyInfoModifyContainer>
        <NicknameSect>
          {/* <TitleBox>{userData?.nickname}</TitleBox> */}
          <InputBox></InputBox>
        </NicknameSect>
        <CellphoneSect>
          <TitleBox>휴대폰 번호</TitleBox>
          <InputBox />
          <Button type="button" color="dark" size="large">
            인증번호 받기
          </Button>
        </CellphoneSect>
        <EmailSect>
          <TitleBox>이메일 주소</TitleBox>
          <InputBox />
          <Button type="button" color="dark" size="large">
            인증번호 받기
          </Button>
        </EmailSect>
        <FooterSect>
          <Button type="button" color="primary" size="large" onClick={handleRegisterModified}>
            수정 내용 등록하기
          </Button>
        </FooterSect>
      </MyInfoModifyContainer>
    </MyInfoModifyWrapper>
  );

  const ScreenModifyFalse = () => (
    <MyInfoWrapper>
      <MyInfoContainer>
        <MyInfoHeaderSect>
          <div>
            <p>{userData?.nickname}</p>
          </div>
          <Button>
            <p>회원탈퇴</p>
          </Button>
        </MyInfoHeaderSect>

        <MyInfoBodySect>
          <div className="input-sect">
            <p>휴대폰 인증</p>
            <input type="text" value={userData?.phone} />
          </div>
          {/* <div className="input-sect">
            <p>이메일 주소</p>
            <input type="text" />
          </div>

          <div className="hint-sect">
            <p>이메일 주소를 등록해주세요.</p>
            <p>휴대폰 번호가 바뀌었을 때 로그인 수단으로 이용할 수 있어요.</p>
          </div> */}
        </MyInfoBodySect>

        <MyInfoFooterSect>
          <Button type="button" color="primary" size="large" onClick={() => setModify(true)}>
            정보수정하기
          </Button>
        </MyInfoFooterSect>
      </MyInfoContainer>
    </MyInfoWrapper>
  );

  return <main>{isModify ? <ScreenModifyTrue /> : <ScreenModifyFalse />}</main>;
};

export default MyInfo;
