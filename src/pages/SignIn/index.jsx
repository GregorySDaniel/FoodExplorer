import { Container } from "./styles"
import logo from '../../../assets/logo.png'
import { Button } from "../../components/Button"

export function SignIn(){

  return(
    <Container>
      <img src={logo} alt="Logo do FoodExplorer" />
      <form>
        <label>
          Email
          <input type="text" placeholder="Exemplo: exemplo@exemplo.com.br"/>
        </label>
        <label>
          Senha
          <input type="password" placeholder="No mínimo 6 caracteres"/>
        </label>
        <Button title="Entrar"/>
      </form>
        <a>Criar uma conta</a>
    </Container>
  )

}