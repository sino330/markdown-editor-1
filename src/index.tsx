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
import { History } from "./pages/history";
import { useStateWithStorage } from "./hooks/use_state_with_strage";

const GlobalStyle = createGlobalStyle`
    body * {
        box-sizing:border-box;
    }
`;

const StorageKey = "/editor:text";

const Main: React.FC = () => {
  const [text, setText] = useStateWithStorage("", StorageKey);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Editor text={text} setText={setText} />} />
          <Route path="/history" element={<History setText={setText} />} />
          <Route path="*" element={<Editor text={text} setText={setText} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

render(<Main />, document.getElementById("app"));
