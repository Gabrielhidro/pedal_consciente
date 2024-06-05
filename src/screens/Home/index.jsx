import { Button } from "@mui/material";
import { BannerContainer, Container, Footer, Header, InfoSection, LogoContainer, MainContent, TypeSection, UsSection } from "./styled";
import Logo from "../../assets/logo.png";
import Quemsomos from "../../assets/noos.jpeg";
import { MdBackHand, MdChildCare, MdFace2, MdForest } from "react-icons/md";



export default function Home() {

  return (
    <Container>
      <Header>
        <div className="logoInfo">
          <LogoContainer>
              <img src={Logo} alt="" />
          </LogoContainer>
          <div className="divider" />
          <div className="info">
            <h1>Canal de denúncias</h1>
          </div>
        </div>
        <Button 
          variant="contained"
          onClick={() => {
            window.location.href = "/contact"
          }}
        >
          Contato
        </Button>
      </Header>

      <MainContent>
        <BannerContainer>
          <div className="textBanner">
            <h1>Denuncie</h1>
            <p>
              Ajude a combater crimes ambientais, trabalho escravo, trabalho infantil, violência sexual e violência contra a mulher.
              Lembre-se de que existem diferentes formas de fazer uma denúncia, seja por meio de canais governamentais, organizações não governamentais ou até mesmo pela internet. Seja qual for o método escolhido, sua denúncia é valiosa e pode levar à ação e à justiça.
            </p>
          </div>
        </BannerContainer>
      </MainContent>

      <TypeSection>
        <h1>Tipos de denúncia</h1>

        <ul>
          <li>
            <MdForest />
            <h2>Meio ambiente</h2>
            <p>
              Denuncie crimes ambientais, como desmatamento, poluição, caça e pesca ilegal, tráfico de animais silvestres, entre outros.
            </p>
          </li>
          <li>
            <MdBackHand />
            <h2>Trabalho escravo</h2>
            <p>
              Denuncie casos de trabalho escravo, como trabalho forçado, jornada exaustiva, condições degradantes, servidão por dívida, entre outros.
            </p>
          </li>
          <li>
            <MdChildCare />
            <h2>Trabalho infantil</h2>
            <p>
              Denuncie casos de trabalho infantil, como trabalho doméstico, trabalho na rua, trabalho no campo, entre outros.
            </p>
          </li>
          <li>
            <MdFace2 />
            <h2>Violência contra a mulher</h2>
            <p>
              Denuncie casos de violência contra a mulher, como violência física, psicológica, sexual, moral e patrimonial.
            </p>
          </li>
            
        </ul>
      </TypeSection>

      <InfoSection>
        <div>
        <h1>Denuncie</h1>
          <p>
            Caso você tenha informações sobre algum crime ou violação, denuncie. Sua denúncia é importante e pode ajudar a combater a impunidade e a proteger os direitos humanos.
          </p>
          <Button
            variant="contained"
            onClick={() => {
              window.location.href = "/contact"
            }}
          >Denunciar</Button>
        </div>
        <div />
      </InfoSection>
      
      <UsSection>
        <h1>Quem somos</h1>
        
        <div className="section">
          <div className="image">
            <img src={Quemsomos} alt="" />
          </div>
          <div>
            <p>
              Somos uma organização sem fins lucrativos que atua na defesa dos direitos humanos e na promoção da justiça social. Nosso trabalho é p
              romover a conscientização, prevenir violações e proteger as vítimas de crimes e abusos. Contamos com uma equipe de profissionais qualificados e comprometidos com a causa, que atuam em diversas áreas, como direito, psicologia, assistência social e comunicação.
            </p>
          </div>
        </div>
      </UsSection>

      <Footer>
        @{
          new Date().getFullYear()
        } - Todos os direitos reservados
      </Footer>
    </Container>
  )
}
