import styled from "@emotion/styled";

export const Container = styled.div`
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-inline: 48px;
  box-shadow: 0px 0px 8px 0px #00000040;
`

export const LogoContainer = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 12px;

  img {
    width: 100%;
    height: 100%;
  }
`

export const MainContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  section {
    padding: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 24px;

    h1 {
      font-size: 32px;
      font-weight: bold;
      text-align: center;
    }

    p {
      font-size: 20px;
      text-align: center;
    }
  }
`

export const BannerContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;

  img {
    width: 100%;
  }
`

export const TypeSection = styled.div`
  padding: 48px;
  background-color: #f2f2f2;

  h1 {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    text-align: center;
  }

  ul {
    display: flex;
    align-items: stretch;
    justify-content: space-around;
    gap: 12px;
    list-style: none;
    padding-inline: 0;
    flex-wrap: wrap;

    li {
      margin-top: 42px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      width: 168px;
      border-radius: 8px;
      background-color: #fff;
      box-shadow: 0px 0px 8px 0px #00000040;
      padding: 24px;

      h2 {
        font-size: 18px;
        font-weight: bold;
        text-align: center;
      }

    }
  }
`

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 24px;
  padding: 48px;

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    img {
      width: 100%;
    }

    h2 {
      font-size: 24px;
      font-weight: bold;
      text-align: center;
    }

    p {
      font-size: 16px;
      text-align: center;
    }
  }
`

export const Footer = styled.div`
  text-align: center;
  padding: 24px;
  background-color: #f2f2f2;
  font-weight: 600;
`

