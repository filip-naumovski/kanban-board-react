import { useEffect, useRef, useState } from "react";
import { CardsContext } from "./BoardContext";
import Column from "./Column/Column";
import NewColumnInput from "./NewColumnInput/NewColumnInput";
import { PurpleButton, TransparentInput } from "./styled";
import { FlexContainer } from "./styled";
import { CardData, ColumnData } from "./types";

const Board = () => {
  const [columns, setColumns] = useState<ColumnData[]>([]);

  const [cards, setCards] = useState<CardData[]>([]);

  const [addingColumn, setAddingColumn] = useState(false);
  const [columnTitle, setColumnTitle] = useState("");

  const getNextPriority = (columnId: number): number => {
    const columnCards = cards.filter((card) => card.columnId === columnId);
    if (!columnCards || !columnCards.length) {
      return 0;
    }
    return Math.max(...columnCards.map((card) => card.priority)) + 1;
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (addingColumn) {
      inputRef.current?.focus();
    }
  }, [addingColumn]);

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (columnTitle.length > 0) {
        setColumns([
          ...columns,
          {
            id: columns.length + 1,
            title: columnTitle,
          },
        ]);
        setAddingColumn(false);
        setColumnTitle("");
      }
    }
    if (e.key === "Escape") {
      setAddingColumn(false);
      setColumnTitle("");
    }
  };

  const removeCard = (cardId: number, columnId: number) => {
    setCards(cards.filter((card) => card.id !== cardId));
  };

  const addCard = (columnId: number, text: string) => {
    setCards([
      ...cards,
      {
        id: Math.ceil(Math.random() * 10000),
        text,
        priority: getNextPriority(columnId),
        columnId,
      },
    ]);
  };

  const moveCardToOtherColumn = (cardId: number, toColumnId: number) => {
    const card = cards.find((card) => card.id === cardId);
    if (!card) {
      return;
    }
    const column = columns.find((column) => column.id === toColumnId);
    if (!column) {
      return;
    }
    const newCards = cards.filter((card) => card.id !== cardId);
    const newCard = {
      ...card,
      columnId: toColumnId,
      priority: getNextPriority(toColumnId),
    };
    setCards([...newCards, newCard]);
  };

  const changeCardPriority = (cardId: number, inc: boolean) => {
    const originalCard = cards.find((card) => card.id === cardId);
    if (!originalCard) {
      return;
    }
    const newPriority = originalCard.priority + (inc ? 1 : -1);

    const newCards = cards.map((card) => {
      if (card.id === cardId) {
        return {
          ...card,
          priority: newPriority,
        };
      }
      if (card.priority === newPriority) {
        return {
          ...card,
          priority: originalCard.priority,
        };
      }
      return card;
    });
    setCards(newCards);
  };

  const cardsContextValue = {
    removeCard,
    addCard,
    moveCardToOtherColumn,
    changeCardPriority,
  };

  return (
    <CardsContext.Provider value={cardsContextValue}>
      <FlexContainer
        width="calc(100% - 100px)"
        height="calc(100% - 100px)"
        padding="50px"
        alignItems="center"
        justifyContent="center">
        <FlexContainer
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
          width="calc(100% - 80px)"
          height="calc(100% - 80px)"
          padding="40px"
          columnGap="100px"
          backgroundColor="#fff"
          style={{ overflowX: "scroll", overflowY: "hidden" }}>
          {columns.map((column) => (
            <Column
              key={column.id}
              column={column}
              cards={cards.filter((card) => card.columnId === column.id)}
            />
          ))}
          {addingColumn && (
            <NewColumnInput
              inputRef={inputRef}
              value={columnTitle}
              onKeyDown={handleInputKeyDown}
              onChange={(e) => setColumnTitle(e.target.value)}
            />
          )}
          {!addingColumn && (
            <PurpleButton onClick={() => setAddingColumn(true)}>
              ＋
            </PurpleButton>
          )}
        </FlexContainer>
      </FlexContainer>
    </CardsContext.Provider>
  );
};

export default Board;
