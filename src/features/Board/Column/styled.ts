import styled from 'styled-components';
import { theme } from '../../../themes';
import { FlexContainer } from '../styled';

export const ColumnContainer = styled(FlexContainer)`
  overflow: overlay;
  overflow-x: hidden;
  transition: all 0.3s ease;
  &:hover {
    background-color: #ccc;
  }
  scroll-behavior: smooth;
`;

export const TransparentTextArea = styled.textarea`
  background-color: transparent;
  border: none;
  color: ${theme.primary[0]};
  font-size: 1.5rem;
  outline: none;
  padding: 0.5rem;
  width: 100%;
  min-height: 150px;
`;
