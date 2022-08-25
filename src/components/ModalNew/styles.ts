import styled from "styled-components";

export const ModalStyled = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(18, 18, 20, 0.5);

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;

    > div {
      width: 23.063rem;
      max-width: 90%;
      background-color: var(--color-grey-3);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: relative;

      div {
        width: 100%;
        background-color: var(--color-grey-2);
        border-radius: 4px 4px 0 0;

        div {
          width: 90%;
          height: 3.125rem;
          display: flex;
          margin: 0 auto;
          align-items: center;
          justify-content: space-between;

          h2 {
            font-size: 0.875rem;
            font-weight: 700;
            color: var(--color-grey-0);
          }

          button {
            background-color: transparent;
            border: none;
            cursor: pointer;
            color: var(--color-grey-1);
            transition: 444ms;

            &:hover {
              color: var(--color-grey-3);
            }
          }
        }
      }

      form {
        width: 100%;
        display: flex;
        flex-direction: column;

        label {
          font-size: 0.75rem;
          font-weight: 400;
          color: var(--color-grey-0);
          margin: 1rem 0 0 17px;
        }

        input,
        select {
          width: 90%;
          margin: 0.5rem auto;
          height: 3rem;
          background-color: var(--color-grey-2);
          border-radius: 4px;
          border: 1px solid var(--color-grey-0);
          padding: 0;
          outline: 0;

          &::placeholder,
          option {
            font-size: 1rem;
            font-weight: 400;
            color: var(--color-grey-0);
          }
        }

        input {
          padding-left: 0.3rem;
        }

        select {
          padding-left: 0.4rem;
          width: 91%;
          font-size: 1rem;
          font-weight: 400;
          color: var(--color-grey-0);
        }

        button {
          width: 91%;
          margin: 1rem auto;
          height: 3rem;
          background-color: var(--color-primary);
          border: none;
          border-radius: 4px;

          font-size: 1rem;
          font-weight: 500;
          color: var(--color-white);

          cursor: pointer;
          transition: 444ms;

          &:hover {
            background-color: var(--color-primary-focus);
          }
        }

        span {
          font-size: 0.8rem;
          font-weight: 400;
          color: var(--color-negative);
          margin-bottom: 1.25rem;
          margin-left: 17px;
        }
      }
    }
  }
`;
