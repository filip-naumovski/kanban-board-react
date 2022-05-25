import { createContext } from "react";
import { ColumnData } from "./types";

export type ColumnContextInfo = {
  columns: ColumnData[];
  addColumn: (title: string) => void;
  removeColumn: (id: number) => void;
};

export const ColumnContext = createContext<ColumnContextInfo>({
  columns: [],
  addColumn: () => {},
  removeColumn: () => {},
});

export type CardsContextInfo = {
  addCard: (columnId: number, text: string) => void;
  removeCard: (id: number, columnId: number) => void;
  moveCardToOtherColumn: (cardId: number, toColumnId: number) => void;
  changeCardPriority: (cardId: number, inc: boolean) => void;
};

export const CardsContext = createContext<CardsContextInfo>({
  addCard: () => {},
  removeCard: () => {},
  moveCardToOtherColumn: () => {},
  changeCardPriority: () => {},
});
