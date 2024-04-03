import styled from "styled-components";

interface WidthPaddingProps {
  width: string;
  padding: string;
}

export const ButtonStyled = styled.button<WidthPaddingProps>`
  background-color: rgb(18, 42, 87);
  color: white;
  font-weight: 600;
  border-radius: 40px;
  border: 2px solid rgb(18, 42, 87);
  margin-top: 10px;
  cursor: pointer;
  transition: all 0.2s ease 0s;
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};

  &:hover {
    background-color: rgb(75, 95, 135);
    color: rgb(255, 255, 255);
    border: 2px solid rgb(75, 95, 135);
  }
`;
