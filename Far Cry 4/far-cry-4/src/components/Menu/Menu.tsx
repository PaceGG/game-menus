import React from "react";
import styles from "./Menu.module.scss";

interface Progress {
  progress: number;
  time: string;
  mission: string;
}
interface MenuItemType {
  label: string;
  description: string;
  mode?: string;
  statistics?: Progress;
}

interface MenuProps {
  menuItems: MenuItemType[];
  menuTitle: string;
}

const Menu: React.FC<MenuProps> = ({ menuItems, menuTitle }) => {
  const [currentDescription, setCurrentDescription] = React.useState<string>();
  const [currentProgress, setCurrentProgress] = React.useState<string>();

  const formateTime = (time: string) => {
    const [hours, minutes] = time.split(":");
    return `${hours}Ч ${minutes}М`;
  };

  return (
    <div className={styles["menu"]}>
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
