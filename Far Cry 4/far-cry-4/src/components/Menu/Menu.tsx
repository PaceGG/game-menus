import React from "react";
import styles from "./Menu.module.scss";

const menuTitle: string = "Кампания";

interface MenuItem {
  label: string;
  description: string;
  mode?: string;
  statistics?: {
    progress: number;
    time: string;
    mission: string;
  };
}
const commonProgress = {
  progress: 100,
  time: "28:31:34",
  mission: "Кампания завершена",
};
const menuItems: MenuItem[] = [
  {
    label: "Продолжить",
    mode: "в сети",
    description: "Продолжить кампанию в сети (доступна совместная игра)",
    statistics: commonProgress,
  },
  {
    label: "Продолжить",
    mode: "автономно",
    description: "Продолжить кампанию автономно",
    statistics: commonProgress,
  },
  { label: "Новая игра", description: 'Начать новую игру "Кампания".' },
  {
    label: "Присоединиться к совместной игре",
    description: 'Найти совместную игру "Кампания".',
  },
  {
    label: "Uplay",
    description:
      "Авторизируйтесь на Uplay, чтобы разблокировать эксклюзивный контент",
  },
];

const Menu: React.FC = () => {
  const [currentDescription, setCurrentDescription] = React.useState<string>();
  const [currentProgress, setCurrentProgress] = React.useState<string>();

  const formateTime = (time: string) => {
    const [hours, minutes] = time.split(":");
    return `${hours}Ч ${minutes}М`;
  };

  return (
    <div className={styles.menu}>
      <h2 className={styles["menu-title"]}>{menuTitle}</h2>
      <div className={styles["menu-info"]}>
        <p className={styles["menu-progress"]}>{currentProgress}</p>
        <p>{currentDescription}</p>
      </div>
      <ul className={styles["menu-list"]}>
        {menuItems.map((item, index) => (
          <li
            key={`${item.label}-${item.mode || index}`}
            className={styles["menu-item"]}
            onMouseEnter={() => {
              setCurrentDescription(item.description);
              setCurrentProgress(
                item.statistics
                  ? `${item.statistics.progress}% / ${formateTime(
                      item.statistics.time
                    )} / ${item.statistics.mission}`
                  : ""
              );
            }}
          >
            {item.label} {item.mode ? `[${item.mode}]` : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
