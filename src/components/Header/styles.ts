import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100vw;
  height: 4.5rem;
  border-bottom: 1px solid var(--color-grey-2);
  background-color: var(--color-grey-4);

  div {
    width: 60%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--color-grey-0);
      background-color: var(--color-grey-3);
      width: 3.438rem;
      max-width: 100%;
      height: 2rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: 444ms;

      &:hover {
        background-color: var(--color-grey-2);
      }
    }
  }
`;
