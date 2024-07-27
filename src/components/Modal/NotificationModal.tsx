import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { modalActions, Notification } from "store/slices/modal";

import styled from "styled-components";
import { useEffect } from "react";

const Container = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  li {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    background-color: ${({ theme }) => theme.color.grey80};
    border-radius: 0.8rem;
    padding: 1.2rem 1.6rem;
    width: 328px;
    height: auto;
    margin-bottom: 1rem;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme }) => theme.color.white};
    white-space: pre;
    line-height: 150%;
  }

  button {
    color: ${({ theme }) => theme.color.white};
    text-decoration: underline;
    line-height: 150%;
  }
`;

const NotificationModal = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state: RootState) => state.modal.notifications);

  const handleClose = (id: number) => {
    dispatch(modalActions.removeNotificationModal({ id }));
  };

  useEffect(() => {
    console.log(notifications);
  }, [notifications]);
  return (
    <Container>
      {notifications?.map((item: Notification) => (
        <li key={item.id}>
          <p>{item.content}</p>
          <button onClick={() => handleClose(item.id)}>{item.btnText ? item.btnText : "닫기"}</button>
        </li>
      ))}
    </Container>
  );
};

export default NotificationModal;
