import * as React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
//HashRouter as RouterはHashRouterという要素をRouterという名前で扱うという意味
import {
  HashRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Editor } from "./pages/editor";

const GlobalStyle = createGlobalStyle`
    body * {
        box-sizing:border-box;
    }
`;
const Main = (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Editor />} />
        <Route path="/history" element={<h1>History</h1>}></Route>
        <Route path="*" element={<Editor />} />
      </Routes>
    </BrowserRouter>
  </>
);

render(Main, document.getElementById("app"));
