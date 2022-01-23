import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

import SidebarMenuButton, {
  ISideMenuButtonProps,
} from "./components/SidebarMenuButton";
import styles from "./SideBar.module.css";

const menuButtonsData: ISideMenuButtonProps[] = [
  {
    icon: InsertDriveFileIcon,
    title: "Repositories",
    counter: 2555,
    isClicked: "normal",
  },
  {
    icon: InsertEmoticonIcon,
    title: "Repositories",
    counter: 6,
    isClicked: "active",
  },
  {
    icon: BookmarkBorderIcon,
    title: "Repositories",
    counter: 12,
    isClicked: "normal",
  },
];

const SideBar = () => {
  const menuButtons = menuButtonsData.map((buttonProps, index) => (
    <SidebarMenuButton key={index} {...buttonProps} />
  ));

  return <div className={styles.sidebar}>{menuButtons}</div>;
};

export default SideBar;
