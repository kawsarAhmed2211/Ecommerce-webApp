//got the installation link from https://mui.com/material-ui/getting-started/installation/
//npm install @mui/material @mui/styled-engine-sc styled-components
import styled, {ThemeProvider }from "styled-components";
import { lightTheme } from "./utils/Theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;


function App() {
  return <ThemeProvider theme = {lightTheme}>
    <BrowserRouter>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" exact element = {<Home/>} />
        </Routes>
        
      </Container>
    </BrowserRouter>

  </ThemeProvider>
}

export default App;
