import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Subscriptions from "./Subscriptions";
import Home from "./Home";
import Plan from "./Plan";

export default function Main() {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/sign-up" element={<Signup/>} />
            <Route path="/subscriptions" element={<Subscriptions/>} />
            <Route path="/subscriptions/plan" element={<Plan/>} />
            <Route path="/home" element={<Home/>} />
          </Routes>
        </BrowserRouter>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  align-items: center;
  background-color: #0E0E13;
  color: #fff;
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  height: 100vh;
  justify-content: center;
  max-width: 100vw;
  overflow: hidden;
`;
