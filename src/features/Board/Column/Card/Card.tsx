import { useContext } from "react";
import { CardsContext } from "../../BoardContext";
import { Container, FlexContainer } from "../../styled";
import { CardData } from "../../types";
import { ArrowContainer, CardContainer, CloseButtonContainer } from "./styled";

const Card = ({ card, columnId }: { card: CardData; columnId: number }) => {
  const { removeCard, moveCardToOtherColumn, changeCardPriority } =
    useContext(CardsContext);

  return (
    <CardContainer>
      <FlexContainer justifyContent="space-between" width="100%" height="20px">
        <div style={{ width: "20px" }}></div>
        <FlexContainer
          width="auto"
          justifyContent="center"
          style={{ fontSize: "1.3rem" }}>
          <ArrowContainer onClick={() => changeCardPriority(card.id, false)}>
            &#x25B2;
          </ArrowContainer>
        </FlexContainer>
        <CloseButtonContainer
          title="Remove Card"
          onClick={(e) => {
            e.stopPropagation();
            removeCard(card.id, columnId);
          }}>
          &#x2715;
        </CloseButtonContainer>
      </FlexContainer>
      <FlexContainer
        justifyContent="space-between"
        alignItems="center"
        padding="20px 0px"
        height="auto">
        <ArrowContainer
          onClick={() => moveCardToOtherColumn(card.id, columnId - 1)}>
          {"<"}
        </ArrowContainer>
        <Container width="100%" padding="0px 10px">
          {card.text}
        </Container>
        <ArrowContainer
          onClick={() => moveCardToOtherColumn(card.id, columnId + 1)}>
          {">"}
        </ArrowContainer>
      </FlexContainer>
      <FlexContainer justifyContent="space-between" width="100%" height="20px">
        <div style={{ width: "80px" }}></div>
        <FlexContainer
          width="auto"
          justifyContent="center"
          style={{ fontSize: "1.3rem" }}>
          <ArrowContainer onClick={() => changeCardPriority(card.id, true)}>
            &#x25BC;
          </ArrowContainer>
        </FlexContainer>
        <div style={{ fontSize: "1rem", width: "80px" }}>
          Priority: {card.priority}
        </div>
      </FlexContainer>
    </CardContainer>
  );
};

export default Card;
