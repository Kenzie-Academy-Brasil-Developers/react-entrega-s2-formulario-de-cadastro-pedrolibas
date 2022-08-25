import styled from "styled-components";

export const CardStyled = styled.li`
  width: 90%;
  height: 3.063rem;
  background-color: var(--color-grey-4);
  color: var(--color-white);
  border-radius: 4px;
  margin: 0 auto;
  margin-bottom: 0.3rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  section {
    width: 90%;

    h5 {
      font-size: 0.875rem;
      font-weight: 700;
      color: var(--color-white);
    }

    span {
      font-size: 0.75rem;
      font-weight: 400;
      color: var(--color-grey-1);
    }

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }

    svg {
      color: var(--color-white);
    }

    div {
      display: flex;
      width: 20%;
      margin: 0;
    }
  }

  @media (max-width: 768px) {
     section {
      div{
        width: 40%;
      }
    }
  }

  @media (max-width: 425px) {
     section {
      flex-direction: column;
      justify-content: center;
    }
  }
`;
