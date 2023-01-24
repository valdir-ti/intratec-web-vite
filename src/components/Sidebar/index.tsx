import { useContext } from "react";

import { SidebarContext } from "../../context/sidebar/sidebarContext";

import "./styles.scss";

export const Sidebar = () => {
  const {
    state: { open },
    dispatch: SidebarDispatch,
  } = useContext(SidebarContext);

  return (
    <div className={`sidebar ${open ? "sidebar-open" : "sidebar-close"}`}>
      <div className="company-name">Intratec</div>
      <div className="menu">Menu</div>
    </div>
  );
};
