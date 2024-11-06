import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { headerActions } from "store/slices/header";

import { IconBox, ListItem } from "./HistoryPage.styles";
import Icon from "components/common/Icon/Icon";
import { getHistories } from "api/action";
import { RootState } from "store/store";
import dayjs from "dayjs";
import { EmptyData } from "components/EmptyData";

interface HistoryListProps {
  id: number;
  action: "EXERCISE" | "SHOWER" | "SLEEP" | "TALK";
  start: string;
  mp?: number;
  hp?: number;
}

const HistoryPage = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state: RootState) => state.auth);
  const [historyList, setHistoryList] = useState<HistoryListProps[]>([]);

  useEffect(() => {
    dispatch(headerActions.setTitle("행동기록"));
  }, [dispatch]);

  const renderIcon = (type: string) => {
    switch (type) {
      case "EXERCISE":
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
      case "EXERCISE":
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

  const fetchHistory = async () => {
    const now = new Date();
    const params = {
      uuid: userData?.uuid,
      year: now.getFullYear(),
      month: now.getMonth(),
    };
    const res = await getHistories(params);
    if (res.status === 200) {
      setHistoryList(res.data);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);
  return (
    <main>
      {historyList.length === 0 && <EmptyData />}
      <ul>
        {historyList.map((item: HistoryListProps) => (
          <ListItem key={item.id}>
            <div className="left">
              <IconBox>{renderIcon(item.action)}</IconBox>
              <div className="text">
                <span className="action">{renderAction(item.action)}</span>
                <span className="date">{dayjs(item.start).format("MM월 DD일 HH:mm")}</span>
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
