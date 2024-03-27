import { Button } from "@mui/material";
import { BannerContainer, Container, Footer, Header, LogoContainer, MainContent, TypeSection } from "./styled";
import Logo from "../../assets/logo.png";
import AmbientalBanner from "../../assets/ambiente.jpg";

export default function Home() {

  return (
    <Container>
      <Header>
        <LogoContainer>
            <img src={Logo} alt="" />
        </LogoContainer>
          <Button 
            variant="contained"
            onClick={() => {
              window.location.href = "/contact"
            }}
          >Contato</Button>
      </Header>

      <MainContent>
        <BannerContainer>
          <img src={AmbientalBanner} alt="" />
        </BannerContainer>
        <section>
          <h1>Denuncie</h1>
          <p>
          Lembre-se de que existem diferentes formas de fazer uma denúncia, seja por meio de canais governamentais, organizações não governamentais ou até mesmo pela internet. Seja qual for o método escolhido, sua denúncia é valiosa e pode levar à ação e à justiça.
          </p>
          <Button
            variant="contained"
            onClick={() => {
              window.location.href = "/contact"
            }}
          >Denunciar</Button>
        </section>
      </MainContent>

      <TypeSection>
        <h1>Tipos de denúncia</h1>

        <ul>
          <li>
            <h2>Meio ambiente</h2>
            <p>
              Denuncie crimes ambientais, como desmatamento, poluição, caça e pesca ilegal, tráfico de animais silvestres, entre outros.
            </p>
          </li>
          <li>
            <h2>Trabalho escravo</h2>
            <p>
              Denuncie casos de trabalho escravo, como trabalho forçado, jornada exaustiva, condições degradantes, servidão por dívida, entre outros.
            </p>
          </li>
          <li>
            <h2>Trabalho infantil</h2>
            <p>
              Denuncie casos de trabalho infantil, como trabalho doméstico, trabalho na rua, trabalho no campo, entre outros.
            </p>
          </li>
          <li>
            <h2>Violência sexual</h2>
            <p>
              Denuncie casos de violência sexual, como abuso sexual, exploração sexual, pornografia infantil, entre outros.
            </p>
          </li>
          <li>
            <h2>Violência contra a mulher</h2>
            <p>
              Denuncie casos de violência contra a mulher, como violência física, psicológica, sexual, moral e patrimonial.
            </p>
          </li>
            
        </ul>
      </TypeSection>


      <Footer>
        @{
          new Date().getFullYear()
        } - Todos os direitos reservados
      </Footer>
    </Container>
  )
}
