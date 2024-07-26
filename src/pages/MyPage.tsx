import Icon from "components/common/Icon";
import Toggle from "components/common/Toggle";
import Modal from "components/Modal/Modal";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { headerActions } from "store/slices/header";
import { modalActions } from "store/slices/modal";
import { RootState } from "store/store";
import styled from "styled-components";

const Container = styled.div``;

const NicknameBox = styled.div`
  margin: 1rem 1.6rem;
  padding: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.primaryLight};
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.color.primary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  button {
    padding: 0.4rem 1.2rem;
    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.blueGrey05};
    border-radius: 5rem;
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

const MenuWrap = styled.ul``;

const MenuBox = styled.li`
  padding: 1.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.blueGrey03};
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &.push {
    display: flex;
    justify-content: space-between;
  }
`;

const MyPage = () => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const { show } = useSelector((state: RootState) => state.modal);

  useEffect(() => {
    dispatch(headerActions.setTitle("마이페이지"));
  }, [dispatch]);

  const handleToggle = () => {
    // TODO :: push api 연결
    setIsActive((prev) => !prev);
  };

  const showLogoutModal = () => {
    dispatch(modalActions.showModal());
  };

  const logout = () => {
    // TODO :: 로그아웃
    dispatch(modalActions.closeModal());
    console.log("로그아웃");
  };

  return (
    <Container>
      <NicknameBox>
        <h3>달리는사자</h3>
        <button onClick={showLogoutModal}>로그아웃</button>
      </NicknameBox>
      <MenuWrap>
        <MenuBox>
          <Icon icon="IconKey" />
          개인 정보
        </MenuBox>
        <MenuBox>
          <Icon icon="IconBook" />
          나의 도감
        </MenuBox>
        <MenuBox>
          <Icon icon="IconHistory" />
          행동 기록
        </MenuBox>
        <MenuBox>
          <Icon icon="IconNote" />
          이용약관
        </MenuBox>
        <MenuBox className="push">
          푸시 알림
          <Toggle isActive={isActive} handleChange={handleToggle} />
        </MenuBox>
      </MenuWrap>
      {show && (
        <Modal
          type="confirm"
          title="로그아웃 하시겠습니까?"
          content="올망이를 보러 다시 들러주세요.🥲"
          confirmText="로그아웃"
          handleConfirm={logout}
        />
      )}
    </Container>
  );
};

export default MyPage;
