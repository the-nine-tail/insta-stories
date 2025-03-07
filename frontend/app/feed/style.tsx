import styled from "styled-components";
import { Theme } from "../theme";

export const FeedStyle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: ${Theme.background.primary};
  padding: 16px;
`;
