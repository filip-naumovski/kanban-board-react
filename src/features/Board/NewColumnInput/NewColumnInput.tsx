import { FlexContainer, TransparentInput } from "../styled";

type NewColumnInputProps = {
  inputRef: React.RefObject<HTMLInputElement>;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const NewColumnInput = ({
  inputRef,
  value,
  onKeyDown,
  onChange,
}: NewColumnInputProps) => (
  <>
    <FlexContainer
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="300px"
      height="300px"
      padding="20px"
      backgroundColor="#fff">
      <TransparentInput
        ref={inputRef}
        type="text"
        placeholder="Enter column title"
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
      />
    </FlexContainer>
  </>
);

export default NewColumnInput;
