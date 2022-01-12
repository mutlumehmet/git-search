import styles from "./SideBar.module.css";
import SidebarMenuButton from "./components/SidebarMenuButton";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <SidebarMenuButton
        icon={InsertDriveFileIcon}
        title="Repositories"
        counter={2555}
        isClicked="normal"
      />
      <SidebarMenuButton
        icon={InsertEmoticonIcon}
        title="Users"
        counter={3}
        isClicked="active"
      />
      <SidebarMenuButton
        icon={BookmarkBorderIcon}
        title="Bookmarked"
        counter={12}
        isClicked="normal"
      />
    </div>
  );
};

export default SideBar;
