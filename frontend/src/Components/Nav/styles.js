import styled from "styled-components";

export const Container = styled.div`
  position: fixed;

  background-color: white;

  width: 100%;
  height: 10vh;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;

  font-size: 1.25rem;
  font-weight: 900;

  user-select: none;

  & span {
    margin: -2px 0px;
  }
`;
