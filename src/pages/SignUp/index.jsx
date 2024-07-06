import { Container } from "./styles"
import logo from '../../../assets/logo.png'
import { Button } from "../../components/Button"
import { Link } from 'react-router-dom';

export function SignUp(){

  return(
    <Container>
      <img src={logo} alt="Logo do FoodExplorer" />
      <form>
        <label>
          Seu nome
          <input type="text" placeholder="Exemplo: Maria da Silva"/>
        </label>
        <label>
          Email
          <input type="text" placeholder="Exemplo: exemplo@exemplo.com.br"/>
        </label>
        <label>
          Senha
          <input type="password" placeholder="No mínimo 6 caracteres"/>
        </label>
        <Button title="Criar conta"/>
      </form>
        <a><Link to="/">Já tenho uma conta</Link></a>
    </Container>
  )

}