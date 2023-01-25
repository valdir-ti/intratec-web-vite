import { useContext } from "react";
import { Close } from "@mui/icons-material";

import { SidebarContext } from "../../context/sidebar/sidebarContext";

import "./styles.scss";

export const Sidebar = () => {
  const {
    state: { open },
    dispatch: SidebarDispatch,
  } = useContext(SidebarContext);

  function handleClose() {
    SidebarDispatch({ type: "TOGGLE_SIDEBAR" });
  }

  return (
    <div className={`sidebar ${open ? "sidebar-open" : "sidebar-close"}`}>
      <div className="company">
        <p className="company-name">
          {open ? "Intratec Tecnologia" : "Intratec"}
        </p>
        <Close onClick={handleClose} className="close-button" />
      </div>
      <div className="menu">Menu</div>
    </div>
  );
};
