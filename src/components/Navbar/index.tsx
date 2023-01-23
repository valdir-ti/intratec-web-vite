import MenuIcon from "@mui/icons-material/Menu";

import "./styles.scss";

export const Navbar = () => {
  function handleToggleSidebar() {
    alert("Toggle sidebar");
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
