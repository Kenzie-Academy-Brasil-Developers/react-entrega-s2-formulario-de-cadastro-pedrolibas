import styled from "styled-components";

export const LoginStyled = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  section {
    width: 23.063rem;
    max-width: 100%;
    background-color: var(--color-grey-3);
    margin-top: 2.188rem;
    border-radius: 4px;

    div {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 90%;
      margin: 1.875rem auto;

      span {
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--color-grey-1);
        margin-bottom: 1.063rem;
      }

      button {
        width: 100%;
        height: 3rem;
        background-color: var(--color-grey-1);
        color: var(--color-white);
        border: none;
        border-radius: 4px;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        transition: 444ms;

        &:hover {
          background-color: var(--color-grey-2);
        }
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
    margin: 1rem auto;

    h2 {
      font-size: 1.125rem;
      font-weight: 700;
      color: var(--color-grey-0);
      margin: 2.063rem auto;
    }

    label {
      font-size: 0.75rem;
      font-weight: 400;
      color: var(--color-grey-0);
      margin-bottom: 1.063rem;
    }

    input {
      width: 19.85rem;
      max-width: 100%;
      height: 3rem;
      background-color: var(--color-grey-2);
      border: none;
      border-radius: 4px;
      padding: 0rem 0rem 0rem 1rem;
      margin-bottom: 1.25rem;

      &::placeholder {
        font-weight: 400;
        font-size: 1rem;
        color: var(--color-grey-1);
      }

      &:focus {
        color: var(--color-grey-0);
        outline: 1px solid var(--color-white);
      }
    }

    span {
      font-size: 0.8rem;
      font-weight: 400;
      color: var(--color-negative);
      margin-bottom: 1.25rem;
    }

    button {
      width: 100%;
      height: 3rem;
      background-color: var(--color-primary);
      font-weight: 500;
      font-size: 1rem;
      color: var(--color-white);
      border: none;
      cursor: pointer;
      border-radius: 4px;
      transition: 444ms;

      &:hover {
        background-color: var(--color-primary-focus);
      }
    }
  }
`;
