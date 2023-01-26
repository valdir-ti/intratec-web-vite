import { useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import { SidebarContext } from "../../context/sidebar/sidebarContext";

// import "./styles.scss";

type NavBarProps = {
  toggleTheme: (theme: string) => void;
  theme: any;
};

export const Navbar = ({ toggleTheme, theme }: NavBarProps) => {
  const sidebarContext = useContext(SidebarContext);
  const {
    state: { open },
    dispatch,
  } = sidebarContext;

  function handleTheme() {
    if (theme.title === "light") {
      toggleTheme("dark");
    } else {
      toggleTheme("light");
    }
  }

  function handleToggleSidebar() {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  }

  return (
    <nav className="navbar">
      <div className="button">
        <MenuIcon onClick={handleToggleSidebar} />
      </div>
      <div className="menu">
        Menu
        <button onClick={handleTheme}>Theme</button>
      </div>
    </nav>
  );
};
