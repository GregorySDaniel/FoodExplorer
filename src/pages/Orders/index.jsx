import { Container, Main } from "./styles";
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Link } from "react-router-dom";

export function Orders(){
  return(
    <Container>
      <Header/>
      <Main>
        <Link to="/">&lt; voltar</Link>
      </Main>
      <Footer/>
    </Container>
  )
}