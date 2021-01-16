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

  height: 30vh;
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
  visibility: ${(props) => (props.showOptions ? "initial" : "collapse")};
  width: 100%;

  margin: 0 auto;

  display: flex;
  justify-content: space-evenly;

  transition: all ease 0.4s;

  @media (max-width: 550px) {
    display: grid;
  }
`;

export const Option = styled.div`
  display: ${(props) => (props.showOptions ? "flex" : "none")};
  flex-direction: column;

  align-items: center;

  height: 100%;
  width: 100%;

  padding: 2.5rem;

  transition: all ease 0.4s;

  & h1 {
    font-size: 1.75rem;
  }

  & p {
    font-size: 1.25rem;
    font-weight: 400;

    text-align: justify;

    margin: 1rem;
  }

  & a {
    font-size: 1.25rem;
    font-weight: 700;

    text-decoration: none;

    background: none;
    border-radius: 4px;

    border: 2px solid black;
    color: #000;

    padding: 8px;

    transition: all ease-in-out 0.4s;
  }

  & a:hover {
    background-color: black;
    color: white;
  }

  @media (max-width: 1024px) {
    padding: 1rem;
  }

  @media (max-width: 550px) {
    padding: ${(props) => (props.showOptions ? "1rem 0" : 0)};

    & h1 {
      font-size: 1.5rem;
    }

    & p {
      font-size: 1rem;

      margin: 1rem 0;
    }

    & a {
      font-size: 1rem;
    }
  }
`;
