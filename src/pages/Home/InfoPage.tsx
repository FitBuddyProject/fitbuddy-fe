import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { headerActions } from "store/slices/header";
import styled from "styled-components";

const Container = styled.main`
  margin: 1.6rem;
  h3 {
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    margin-bottom: 1rem;
  }
  ul {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  li {
    margin-left: 1.2rem;
    list-style-type: disc;
    word-break: break-all;
  }
`;

const InfoPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(headerActions.setTitle("FitBuddy 안내"));
  }, [dispatch]);

  return (
    <Container>
      <h3> TIP for Fit Buddy</h3>
      <ul>
        <span>1. 레벨올리기</span>
        <li>운동, 샤워, 잠자기, 대화, 쓰다듬기를 통해 경험치를 올릴 수 있어요.</li>
        <li>쓰다듬기는 캐릭터를 터치해 보세요! 캐릭터가 반응할거에요! (단, 하루에 N번만 가능해요.)</li>
        <li>
          운동, 샤워, 대화는 피로도가 쌓여요. 피로도가 100%일 때는 행동을 할 수 없으니 피로도를 적절하게 해소시켜
          주세요.
        </li>
        <span>2. 피로도 내리기</span>
        <li>잠자기, 쓰다듬기를 통해 피로도를 내려줄 수 있어요.</li>
        <li>
          행동을 하고 있지 않을 때는 1시간에 N% 피로도를 내려줘요. 시간도 잘 체크하면서 캐릭터와 함께 운동을 해봐요!
        </li>
        <span>3. 행동별 시간 및 가능 횟수</span>
        <li>운동: 1시간 / 하루 1회</li>
        <li>샤워: 30분 / 하루 1회</li>
        <li>잠자기: 3시간 / 하루 1회 </li>
        <li>쓰다듬기운동: : 시간X / 하루 N회</li>
        <li>대화: 시간X / 하루 N회</li>

        <br />
        <p>
          *레벨은 총 3단계까지 있어요! 레벨을 다 올리고 나면 다른 캐릭터를 골라서 키워볼 수 있고, 다 키운 캐릭터는
          캐릭터 도감에서 확인할 수 있어요!
        </p>
      </ul>
    </Container>
  );
};

export default InfoPage;
