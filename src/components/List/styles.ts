import styled from "styled-components";

export const ListStyled = styled.div`
  width: 100vw;

  div{
    width: 60%;
    margin: 1rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2{
        font-size: 1rem;
        font-weight: 600;
        color: var(--color-grey-0);
    }
  }

  ul {
    width: 60%;
    background-color: var(--color-grey-3);
    padding: 0.75rem 0 0.75rem 0;
    margin: 2rem auto;
    border-radius: 4px;
}
`;
