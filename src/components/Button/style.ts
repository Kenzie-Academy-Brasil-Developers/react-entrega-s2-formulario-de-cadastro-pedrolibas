import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  max-width: 100%;
  height: 1.5rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background-color: var(--color-grey-3);
  padding: 0;

  color: var(--color-white);
  transition: 444ms;

  &:hover {
    background-color: var(--color-grey-2);
  }
`;
