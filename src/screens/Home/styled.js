import styled from "@emotion/styled";
import AmbientalBanner from "../../assets/ambiente.jpg";
import AmbientalBanner2 from "../../assets/ambiente2.jpg";

export const Container = styled.div`
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-inline: 48px;
  box-shadow: 0px 0px 8px 0px #00000040;

  .logoInfo {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .divider {
    width: 2px;
    height: 24px;
    background-color: #454545;
  }

  .info {
    h1 {
      font-size: 20px;
      font-weight: bold;
      color: #454545;
    }
  }
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
  position: relative;
  background-image: url(${AmbientalBanner});
  background-size: cover;
  background-position: center;

  .textBanner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    padding: 48px;
    background-color: #000000b0;
    height: -webkit-fill-available;
    color: #fff;

    h1 {
      font-size: 48px;
      font-weight: bold;
      text-align: center;
      text-shadow: 0px 0px 8px #000000;
    }

    p {
      font-size: 24px;
      text-align: center;
      text-shadow: 0px 0px 8px #000000;
      line-height: 1.5;
      letter-spacing: 1px;
      font-family: 'Roboto', sans-serif;
    }
  }
`

export const TypeSection = styled.div`
  padding: 48px;
  background-color: #f2f2f2;

  h1 {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    color: #454545;
  }

  ul {
    display: flex;
    align-items: stretch;
    justify-content: center;
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
        color: #454545;
      }

      p {
        font-size: 14px;
        text-align: center;
        color: #454545;
        font-weight: 500;
      }

      svg {
        color: #454545;
        font-size: 80px;
      }

    }
  }
`

export const InfoSection = styled.div`
  padding: 48px;
  display: flex;
  align-items: self-start;
  gap: 24px;
  background-image: url(${AmbientalBanner2});
  background-size: cover;
  background-position: center;

  div {
    flex: 1;
  }

  h1 {
    font-size: 32px;
    font-weight: bold;
    color: #454545;
    margin-bottom: 24px;
  }

  p {
    font-size: 20px;
    color: #454545;
    line-height: 1.5;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 24px;

  }

  button {
    text-align: center;
    margin: 0 auto;
    align-self: center;
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

export const UsSection = styled.div`
  padding: 48px;
  background-color: #f2f2f2;
  background: rgb(255,255,255);
background: linear-gradient(266deg, rgba(255,255,255,1) 0%, rgba(208,228,171,1) 67%, rgba(197,218,144,1) 93%);
  
  h1 {
    font-size: 32px;
    font-weight: bold;
    color: #454545;
    margin-bottom: 24px;
    text-align: center;
  }

  .section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }

  .image {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 400px;
      height: 400px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  
  p {
    font-size: 22px;
    font-weight: 500;
    color: #454545;
    line-height: 1.5;
    font-family: 'Roboto', sans-serif;
  }


`

export const Footer = styled.div`
  text-align: center;
  padding: 24px;
  background-color: #fff;
  font-weight: 600;
`

