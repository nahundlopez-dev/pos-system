import styled, { ThemeProvider } from "styled-components";
import {
  AuthContextProvider,
  GlobalStyles,
  Myroutes,
  Sidebar,
  Login,
} from "./index";
import { Device } from "./styles/breakpoints";
import { useThemeStore } from "./store/ThemeStore";
import { useState } from "react";
import { useLocation } from "react-router-dom";
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { themeStyle } = useThemeStore();
  const { pathname } = useLocation();
  return (
    <ThemeProvider theme={themeStyle}>
      <AuthContextProvider>
        <GlobalStyles />
        {pathname != "/login" ? (
          <Container className={sidebarOpen ? "active" : ""}>
            <section className="contentSidebar">
              <Sidebar
                state={sidebarOpen}
                setState={() => setSidebarOpen(!sidebarOpen)}
              />
            </section>
            <section className="contentMenuhambur">menuhambur</section>
            <section className="contentRouters">
              <Myroutes />
            </section>
          </Container>
        ) : (
          <Login />
        )}
      </AuthContextProvider>
    </ThemeProvider>
  );
}
/*Mobile mode*/
const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  transition: 0.1s ease-in-out;
  color: ${({ theme }) => theme.text};
  /*background-color: black;*/
  .contentSidebar {
    display: none;
    /*background-color: rgba(78, 45, 78, 0.5);*/
  }
  .contentMenuhambur {
    position: absolute;
    /*background-color: rgba(53, 219, 11, 0.5);*/
  }
  .contentRouters {
    /*background-color: rgba(231, 13, 136, 05);*/
    grid-column: 1;
    width: 100%;
  }
  /*Tablet mode*/
  @media ${Device.tablet} {
    grid-template-columns: 100px 1fr;
    &.active {
      grid-template-columns: 260px 1fr;
    }
    .contentSidebar {
      display: initial;
    }
    .contentMenuhambur {
      display: none;
    }
    .contentRouters {
      grid-column: 2;
    }
  }
`;

export default App;
