import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { headerActions } from "store/slices/header";

import { IconBox, ListItem } from "./HistoryPage.styles";
import Icon from "components/common/Icon/Icon";
import { getHistories } from "api/action";

interface HistoryListProps {
  id: number;
  type: string;
  date: string;
  mp?: number;
  hp?: number;
}

const HistoryPage = () => {
  const dispatch = useDispatch();
  const [historyList, setHistoryList] = useState<HistoryListProps[]>([]);

  useEffect(() => {
    dispatch(headerActions.setTitle("행동기록"));
  }, [dispatch]);

  const renderIcon = (type: string) => {
    switch (type) {
      case "WORKOUT":
        return <Icon icon="LiftingWeights" />;
      case "SHOWER":
        return <Icon icon="Bathtub" />;
      case "SLEEP":
        return <Icon icon="Bad" />;
      case "TALK":
        return <Icon icon="ThoughtBalloon" />;
      case "PAT":
        return <Icon icon="Love" />;
      case "RECOVERY":
        return <Icon icon="Recovery" />;
      default:
        return null;
    }
  };

  const renderAction = (type: string) => {
    switch (type) {
      case "WORKOUT":
        return "운동하기";
      case "SHOWER":
        return "샤워하기";
      case "SLEEP":
        return "잠자기";
      case "TALK":
        return "대화하기";
      case "PAT":
        return "쓰다듬기";
      case "RECOVERY":
        return "피로도 회복";
      default:
        return null;
    }
  };

  useEffect(() => {
    // TODO :: API 연결, 무한 스크롤 적용
    const fetchHistoryList = async () => {
      const data = [
        {
          id: 1,
          type: "WORKOUT",
          date: "7월 6일 13:11",
          mp: 10,
          hp: -10,
        },
        {
          id: 2,
          type: "SHOWER",
          date: "7월 6일 13:11",
          hp: -10,
        },
        {
          id: 3,
          type: "SLEEP",
          date: "7월 6일 13:11",
          mp: 10,
          hp: -10,
        },
        {
          id: 4,
          type: "TALK",
          date: "7월 6일 13:11",
          mp: 10,
          hp: -10,
        },
        {
          id: 5,
          type: "PAT",
          date: "7월 6일 13:11",
          mp: 10,
          hp: -10,
        },
        {
          id: 6,
          type: "RECOVERY",
          date: "7월 6일 13:11",
          mp: 10,
        },
      ];
      setHistoryList(data);
    };
    fetchHistoryList();
  }, []);

  const fetchHistory = async () => {
    const res = await getHistories();
    console.log(res);
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <main>
      <ul>
        {historyList.map((item: HistoryListProps) => (
          <ListItem key={item.id}>
            <div className="left">
              <IconBox>{renderIcon(item.type)}</IconBox>
              <div className="text">
                <span className="action">{renderAction(item.type)}</span>
                <span className="date">{item.date}</span>
              </div>
            </div>
            <div className="right">
              {item.mp && (
                <span className="mp">
                  경험치 {item.mp > 0 ? "+" : ""}
                  {item.mp}%
                </span>
              )}
              {item.hp && (
                <span className="hp">
                  피로도 {item.hp > 0 ? "+" : ""}
                  {item.hp}%
                </span>
              )}
            </div>
          </ListItem>
        ))}
      </ul>
    </main>
  );
};

export default HistoryPage;
