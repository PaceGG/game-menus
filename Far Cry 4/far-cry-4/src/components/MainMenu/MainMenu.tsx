import React from "react";
import Menu from "../Menu/Menu";
import styles from "./MainMenu.module.scss";

const MainMenu: React.FC = () => {
  const commonProgress = {
    progress: 100,
    time: "28:31:34",
    mission: "Кампания завершена",
  };
  const Campaign = [
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
  const Chroniques = [
    {
      label: "Битвы Кирата",
      description: "Соревнования по сети 5 на 5.",
    },
    { label: "Список игр", description: "Поиск активных игр" },
    {
      label: "Список карт",
      description:
        "Играйте на пользовательских картах в одиночку или с друзьями.",
    },
    {
      label: "Редактор карт",
      description: "Создайте свои карты и опубликуйте их.",
    },
    {
      label: "Побег из Дургеша",
      description: 'Открыть режим "Побег из Дургеша".',
    },
    {
      label: "Долина йети",
      description: 'Игиа в режиме "Долина йети".',
    },
  ];

  return (
    <div className={styles["main-menu"]}>
      <Menu menuItems={Campaign} menuTitle={"Кампания"} />
      <Menu menuItems={Chroniques} menuTitle={"Хроники"} />
    </div>
  );
};

export default MainMenu;
