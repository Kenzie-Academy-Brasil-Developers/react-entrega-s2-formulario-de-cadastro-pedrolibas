import styled from "styled-components";

export const HomeStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--color-grey-4);

  header {
    width: 100vw;
    height: 4.5rem;
    border-bottom: 1px solid var(--color-grey-2);

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
  }

  main{
    width: 100%;

    div{
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

    div + div{
        border-bottom: 1px solid var(--color-grey-2);
        width: 100%;
        height: 0;
        display: block;
    }

    div + div + div{
        width: 60%;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        border: none;
        margin-top: 2.313rem;

        h2{
            font-size: 1.125rem;
        }

        h3{
            font-size: 1rem;
            font-weight: 400;
            color: var(--color-white);
            margin-top: 1.125rem;
        }
    }
  }
`;

export const Loading = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    h1{
      color: var(--color-primary);
      font-size: 3rem;
    }
`