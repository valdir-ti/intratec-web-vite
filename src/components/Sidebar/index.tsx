import { useContext } from "react";
import { Close } from "@mui/icons-material";

import { SidebarContext } from "../../context/sidebar/sidebarContext";

// import "./styles.scss";

type SideBarProps = {
  toggleTheme: (theme: string) => void;
  theme: any;
};

export const Sidebar = ({ toggleTheme, theme }: SideBarProps) => {
  const {
    state: { open },
    dispatch: SidebarDispatch,
  } = useContext(SidebarContext);

  function handleClose() {
    SidebarDispatch({ type: "TOGGLE_SIDEBAR" });
  }

  function handleTheme() {
    if (theme.title === "light") {
      toggleTheme("dark");
    } else {
      toggleTheme("light");
    }
  }

  return (
    <div className={`sidebar ${open ? "sidebar-open" : "sidebar-close"}`}>
      <div className="company">
        <p className="company-name">
          {open ? "Intratec Tecnologia" : "Intratec"}
        </p>
        <Close onClick={handleClose} className="close-button" />
      </div>
      <div className="menu">
        Menu
        <button onClick={handleTheme}>Theme</button>
      </div>
    </div>
  );
};
