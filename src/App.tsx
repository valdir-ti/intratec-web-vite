import { ThemeProvider, DefaultTheme } from "styled-components";

import { SidebarProvider } from "./context/sidebar/sidebarContext";

import usePersistedState from "./hooks/usePersistedState";

import { Dashboard } from "./components/Dashboard";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";

import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

import { GlobalStyle } from "./styles/global";

import { Page, Nav, Side } from "./styles";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = (theme: string) => {
    if (theme === "light") {
      setTheme(light);
    } else {
      setTheme(dark);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <SidebarProvider>
        <GlobalStyle />
        <Page>
          <Nav>
            <Navbar toggleTheme={toggleTheme} theme={theme} />
          </Nav>
          <Side>
            <Sidebar toggleTheme={toggleTheme} theme={theme} />
          </Side>
          {/* <Dashboard />
          <Footer /> */}
        </Page>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
