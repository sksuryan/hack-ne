import styled, { keyframes } from "styled-components";

const CursorAnimation = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 30vh;
  width: 100%;

  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    align-items: flex-start;
  } ;
`;

export const Text = styled.div`
  font-size: 2.5rem;
  font-weight: 900;

  user-select: none;

  transition: all 0.4s ease-in-out;

  margin-bottom: ${(props) => (props.showOptions ? "-96px" : 0)};

  & .cursor {
    display: inline-block;
    opacity: 0;

    animation-name: ${CursorAnimation};
    animation-timing-function: linear;
    animation-duration: 0.2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 550px) {
    font-size: 1.75rem;
  } ;
`;

export const GetStarted = styled.button`
  background: none;
  border-radius: 4px;

  border: ${(props) => (props.showButton ? "2px solid black" : "none")};
  outline: none;

  padding: ${(props) => (props.showButton ? "8px" : 0)};

  font-size: 1.25rem;
  font-weight: 500;

  margin: 16px 0;

  height: ${(props) => (props.showButton ? "initial" : 0)};

  cursor: pointer;

  opacity: ${(props) => (props.showButton ? 1 : 0)};

  transition: all 0.4s ease;

  &:hover {
    background-color: black;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const OptionCard = styled.div`
  height: ${(props) => (props.showOptions ? "70vh" : 0)};
  width: 100%;

  background: black;

  transition: all ease 1s;

  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;
