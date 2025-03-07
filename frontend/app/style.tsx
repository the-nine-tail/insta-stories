import styled from "styled-components";
import { Theme } from "./theme";

export const MainAppStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100vw;
  background: ${Theme.background.tertiary};
`;
