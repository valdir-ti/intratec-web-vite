import { useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import { SidebarContext } from "../../context/sidebar/sidebarContext";

import "./styles.scss";

export const Navbar = () => {
  const sidebarContext = useContext(SidebarContext);
  const {
    state: { open },
    dispatch,
  } = sidebarContext;

  function handleToggleSidebar() {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  }

  return (
    <nav className="navbar">
      <div className="button">
        <MenuIcon onClick={handleToggleSidebar} />
      </div>
      <div className="menu">Menu</div>
    </nav>
  );
};
