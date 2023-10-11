'use client'

import styled from "@emotion/styled"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FormContainer = styled.div`
  width: 50%;
  height: 50%;

  max-width: 500px;
  max-height: 500px;

  border-radius: 12px;
  background-color: #f7f7f7;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);

  padding: 24px;
  box-sizing: border-box;
  overflow: hidden;

  .title {
    text-align: center;
    margin-bottom: 24px;
    font-size: 24px;
    font-weight: 600;
  }
`