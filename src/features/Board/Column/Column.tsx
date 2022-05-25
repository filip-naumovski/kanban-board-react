import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../themes";
import { Container, FlexContainer } from "../styled";
import { CardData, ColumnData } from "../types";
import { PurpleButton } from "../styled";
import { ColumnContainer, TransparentTextArea } from "./styled";
import Card from "./Card/Card";
import { CardsContext } from "../BoardContext";
import { CardContainer } from "./Card/styled";

type ColumnProps = {
  column: ColumnData;
  cards: CardData[];
};

const Column = ({ column, cards }: ColumnProps) => {
  const { addCard } = useContext(CardsContext);
  const [adding, setAdding] = useState(false);
  const [text, setText] = useState("");

  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSetAdd = () => {
    setAdding(true);
  };

  useEffect(() => {
    if (adding) {
      inputRef.current?.focus();
    }
  }, [adding]);

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      addCard(column.id, text);
      setAdding(false);
      setText("");
    }
    if (e.key === "Escape") {
      setAdding(false);
      setText("");
    }
  };

  return (
    <FlexContainer
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      padding="20px 0px"
      width="500px"
      backgroundColor={theme.secondary[0]}
      style={{ borderRadius: "5px", border: "2px solid black" }}>
      <h1>{column.title}</h1>
      <PurpleButton onClick={handleSetAdd}>＋</PurpleButton>
      <ColumnContainer
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        margin="30px 0px 0px 0px"
        padding="20px"
        rowGap="30px"
        width="90%">
        {[...cards]
          .sort((a, b) => (a.priority <= b.priority ? -1 : 1))
          .map((card, index) => (
            <Card card={card} columnId={column.id} key={card.id} />
          ))}
        {adding && (
          <CardContainer>
            <TransparentTextArea
              ref={inputRef}
              placeholder="Type in the card text..."
              onKeyDown={handleInputKeyDown}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </CardContainer>
        )}
      </ColumnContainer>
    </FlexContainer>
  );
};

export default Column;
