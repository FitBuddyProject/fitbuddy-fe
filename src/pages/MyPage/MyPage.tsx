import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { headerActions } from "store/slices/header";
import { RootState } from "store/store";
import { modalActions } from "store/slices/modal";

import Modal from "components/Modal/Modal";
import Toggle from "components/common/Toggle";
import { authActions } from "../../store/slices/auth/auth.slice";
import Icon from "components/common/Icon/Icon";

const MyPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(true);
  const { showModal } = useSelector((state: RootState) => state.modal);
  const { userData } = useSelector((state: RootState) => state.auth);
  const [idInput, setIdInput] = useState("");
  const [pwInput, setPwInput] = useState("");

  useEffect(() => {
    dispatch(headerActions.setTitle("마이페이지"));
  }, [dispatch]);

  const handleToggle = () => {
    setIsActive((prev) => !prev);

    // TODO :: push api 연결

    if (isActive) {
      pushOn();
    } else {
      pushOff();
    }
  };

  const pushOn = () => {
    dispatch(
      modalActions.pushNotificationModal({
        content: `푸시 알림 받는 것에 동의해요.`,
      })
    );
  };

  const pushOff = () => {
    dispatch(
      modalActions.pushNotificationModal({
        content: `푸시 알림을 받지 않을래요.\n(행동 완료 알림을 받을 수 없어요.)`,
        btnText: "취소",
      })
    );
  };

  const openModal = () => {
    dispatch(modalActions.openModal());
  };

  // const handleIDInput = (event: any) => {
  //     const { value } = event?.target;
  //     setIdInput(value);
  // };
  //
  // const handlePWInput = (event: any) => {
  //     const { value } = event?.target;
  //     setPwInput(value);
  // };

  const logout = () => {
    console.log("logging out");
    dispatch(modalActions.closeModal());
    dispatch(authActions?.logout());
    navigate("/login");
  };

  const login = () => {
    const payload = {
      id: idInput,
      pw: pwInput,
    };
    dispatch(authActions?.loginRequest(payload));
    dispatch(modalActions.closeModal());
  };

  return (
    <main>
      {userData && (
        <NicknameBox>
          <h3>{userData?.name}</h3>
          <button onClick={openModal}>로그아웃</button>
        </NicknameBox>
      )}

      <ul>
        <MenuBox onClick={() => navigate("/my-info")}>
          <Icon icon="IconKey" />
          개인 정보
        </MenuBox>
        <MenuBox onClick={() => navigate("/my-fitdex")}>
          <Icon icon="IconBook" />
          나의 도감
        </MenuBox>
        <MenuBox onClick={() => navigate("/history")}>
          <Icon icon="IconHistory" />
          <span>행동 기록</span>
        </MenuBox>
        <MenuBox>
          <Icon icon="IconNote" />
          이용약관
        </MenuBox>
        <MenuBox className="push">
          <div className="label">
            <Icon icon="IconBell" />
            푸시 알림
          </div>
          <Toggle isActive={isActive} handleChange={handleToggle} />
        </MenuBox>
      </ul>
      {showModal && (
        <Modal type="confirm" confirmText="로그아웃" handleConfirm={logout}>
          <h3>로그아웃 하시겠습니까?</h3>
          <div className="content">올망이를 보러 다시 들러주세요.🥲</div>
        </Modal>
      )}
    </main>
  );
};

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

const MenuBox = styled.li`
  padding: 1.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.blueGrey03};
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &.push {
    display: flex;
    justify-content: space-between;
    .label {
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
  }
`;

export default MyPage;
