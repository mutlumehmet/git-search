import { FC } from "react";

import styles from "./SidebarMenuButton.module.css";

type State = "normal" | "active";
export interface ISideMenuButtonProps {
  icon: Element | any;
  title: string;
  counter: number;
  isClicked: State;
}

const SidebarMenuButton: FC<ISideMenuButtonProps> = (props) => {
  //No logic has been set here, this is just for preview purposes

  const { icon, title, counter, isClicked } = props;
  let state: State = isClicked;
  const MenuIcon = icon;
  return (
    <a
      href="./"
      className={`${styles["menu-button__container"]} ${
        styles[`menu-button__container--bgcolor--${state}`]
      }`}
    >
      <MenuIcon className={styles[`menu-button__icon--${state}`]} />
      <span
        className={`${styles["menu-button__title"]} ${
          styles[`menu-button__title--color--${state}`]
        }`}
      >
        {title}
      </span>
      <div
        className={`${styles["menu-button__counter"]} ${
          styles[`menu-button__counter--color--${state}`]
        }`}
      >
        {counter}
      </div>
    </a>
  );
};

export default SidebarMenuButton;
