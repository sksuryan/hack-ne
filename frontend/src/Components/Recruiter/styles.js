import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  background: none;
  border-radius: 4px;

  border: 2px solid black;
  outline: none;

  padding: 8px;

  font-size: 1.25rem;
  font-weight: 500;

  margin: 16px 0;

  cursor: pointer;

  transition: all 0.4s ease;

  &:hover {
    background-color: black;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;
