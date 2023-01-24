import { useContext } from "react";

import { SidebarContext } from "./context/sidebar/sidebarContext";

import { Dashboard } from "./components/Dashboard";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";

import "./App.scss";

function App() {
  const {
    state: { open },
  } = useContext(SidebarContext);

  return (
    <div className={`App ${open ? "App-open" : "App-close"}`}>
      <Navbar />
      <Sidebar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
