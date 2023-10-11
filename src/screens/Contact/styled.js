import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 8px 0px #00000040;
  width: 100%;
  max-width: 500px;
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