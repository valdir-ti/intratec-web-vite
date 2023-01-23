import { Dashboard } from "./components/Dashboard";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
