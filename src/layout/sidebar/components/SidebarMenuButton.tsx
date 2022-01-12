import { FC } from "react";
import styles from "./SidebarMenuButton.module.css";

interface Props {
  icon: Element | any;
  title: string;
  counter: number;
  isClicked: State;
}

type State = "normal" | "active";

const SidebarMenuButton: FC<Props> = (props) => {
  //No logic has been set here, this is just for preview purposes
  let state: State = props.isClicked;

  return (
    <div
      className={`${styles["menu-button__container"]} ${
        styles[`menu-button__container--bgcolor--${state}`]
      }`}
    >
      <props.icon className={styles[`menu-button__icon--${state}`]} />
      <div
        className={`${styles["menu-button__title"]} ${
          styles[`menu-button__title--color--${state}`]
        }`}
      >
        {props.title}
      </div>
      <div
        className={`${styles["menu-button__counter"]} ${
          styles[`menu-button__counter--color--${state}`]
        }`}
      >
        {props.counter}
      </div>
    </div>
  );
};

export default SidebarMenuButton;
