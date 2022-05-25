import styled from "styled-components";
import { theme } from "../../../../themes";
import { Container, FlexContainer } from "../../styled";

export const CloseButtonContainer = styled.div`
  width: 20px;
  visibility: hidden;
  opacity: 0;
  font-size: 1.5rem;
  transition: 0.2s ease;
  &:hover {
    cursor: pointer;
    color: ${theme.primary[0]};
    transform: scale(1.2);
  }
  &:active {
    transform: scale(0.9);
    color: ${theme.primary[2]};
  }
`;

export const ArrowContainer = styled.div`
  width: auto;
  visibility: hidden;
  opacity: 0;
  transition: 0.2s ease-out;
  &:hover {
    cursor: pointer;
    color: ${theme.primary[0]};
    transform: scale(1.2);
  }
  &:active {
    transform: scale(0.9);
    color: ${theme.primary[2]};
  }
`;

export const CardContainer = styled(Container)`
  background-color: #fff;
  border-radius: 2px;
  border: 2px solid black;
  width: calc(100% - 40px);
  font-size: 1.75rem;
  padding: 5px 5px;
  height: auto;
  word-wrap: break-word;
  &:hover ${CloseButtonContainer} {
    visibility: visible;
    opacity: 1;
  }
  &:hover ${ArrowContainer} {
    visibility: visible;
    opacity: 1;
  }
`;
