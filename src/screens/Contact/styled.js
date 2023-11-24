import styled from "@emotion/styled";

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;

  padding: 24px;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border-radius: 8px;
  color: #242424;

  .title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    width: 100%;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  width: 100%;
`

export const BackButton = styled.button`
  border-radius: 999px;
  border: none;
  background-color: #fff;
  box-shadow: 0px 0px 8px 0px #00000040;
  padding: 8px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f2f2f2;
  }
`