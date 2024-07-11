import { Container } from "./styles";
import { Link } from "react-router-dom";

export function PageNotFound(){
  return(
    <Container>
      <h1>404 - Página não encontrada</h1>
      <p>Desculpe, a página que você está procurando não foi encontrada.</p>
      <Link to='/'>
      Voltar para o início
      </Link>
    </Container>
  )
}