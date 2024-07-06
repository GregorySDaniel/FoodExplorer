import { Container } from "../Footer/styles";
import FooterLogo from '../../../assets/footerlogo.png'

export function Footer(){
    return(
      <Container>
        <img src={FooterLogo} alt="Logo do FoodExplorer" />
        <p>© 2024 - Todos os direitos reservados.</p>
      </Container>
    )
}