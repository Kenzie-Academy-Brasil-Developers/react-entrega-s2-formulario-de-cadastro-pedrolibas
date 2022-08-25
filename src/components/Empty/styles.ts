import styled from "styled-components";

export const EmptyStyled = styled.div`
  width: 100vw;
  border-top: 1px solid var(--color-grey-2);

  div {
    width: 60%;
    margin: 2rem auto;

    h3 {
      font-size: 1.125rem;
      font-weight: 700;
      color: var(--color-grey-0);
    }

    h4 {
      font-size: 1rem;
      font-weight: 400;
      color: var(--color-white);
      margin: 1.125rem 0 1.125rem 0;
    }
  }
`;
