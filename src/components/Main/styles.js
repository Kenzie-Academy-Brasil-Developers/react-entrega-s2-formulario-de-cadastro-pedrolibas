import styled from "styled-components";

export const MainStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--color-grey-4);

    section{
        width: 60%;
        height: 7.375rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        

        h2{
            font-size: 1rem;
            font-weight: 700;
            color: var(--color-grey-0);
        }

        span{
            font-size: 0.75rem;
            font-weight: 400;
            color: var(--color-grey-1);
        }
    }

    @media (max-width: 425px) {
     section {
      flex-direction: column;
      justify-content: center;

      >span{
        margin-top: 1rem;
      }
    }

  }
`;