import styled from 'styled-components';
import { theme } from '../../themes';

export const Container = styled.div<{
  backgroundColor?: string;
  height?: string;
  width?: string;
  rowGap?: string;
  columnGap?: string;
  padding?: string;
  margin?: string;
}>`
  background-color: ${(props) => props.backgroundColor || 'inherit'};
  height: ${(props) => props.height || '100%'};
  width: ${(props) => props.width || '100%'};
  padding: ${(props) => props.padding || '0'};
  margin: ${(props) => props.margin || '0'};
  ${({ rowGap }) => rowGap && `row-gap: ${rowGap}`};
  ${({ columnGap }) => columnGap && `column-gap: ${columnGap}`};
`;

export const GridContainer = styled(Container)<{
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  children?: React.ReactNode;
}>`
  display: grid;
  grid-template-columns: ${(props) => props.gridTemplateColumns || '1fr'};
  grid-template-rows: ${(props) => props.gridTemplateRows || '1fr'};
`;

export const FlexContainer = styled(Container)<{
  flexDirection?: 'row' | 'column';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  minWidth?: string;
  children?: React.ReactNode;
}>`
  display: flex;
  min-width: ${(props) => props.minWidth || props.width || '100%'};
  flex-direction: ${(props) => props.flexDirection || 'row'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  align-items: ${(props) => props.alignItems || 'flex-start'};
`;

export const PurpleButton = styled.button`
  background-color: ${theme.primary[0]};
  color: ${theme.primary.contrastText};
  border: 2px solid black;
  border-radius: 3px;
  height: 100px;
  width: 100px;
  min-width: 100px;
  padding: 0px;
  line-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  cursor: pointer;
  transition: all 0.1s ease-out;
  &:hover {
    background-color: ${theme.primary[2]};
  }
  &:active {
    background-color: ${theme.primary[-1]};
  }
`;

export const TransparentInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid black;
  font-size: 1.5rem;
  padding: 0.5rem;
  width: 100%;
  transition: all 0.1s ease-out;
  &:focus {
    color: ${theme.secondary.contrastText};
    outline: none;
    font-size: 1.65rem;
    border-bottom: 2px solid ${theme.primary[-1]};
  }
  ::placeholder {
    color: #bbb;
  }
`;
