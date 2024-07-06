import { Container, Main, TagsSection, OrderSection } from "./styles";
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { Select } from '../../components/Select'
import { Tag } from '../../components/Tag'
import Dish from '../../../assets/Dish.png'

export function Details(){
  return(
    <Container>
      <Header/>
      <Main>
        <a href="/">&lt; voltar</a>
        <img src={Dish} alt="Foto do prato" />
        <h1>Salada Ravanello</h1>
        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
        <TagsSection>
          <Tag title="arroz"/>
          <Tag title="alface"/>
          <Tag title="pão"/>
          <Tag title="tomate"/>
        </TagsSection>
        <OrderSection>
          <Select/>
          <Button title="pedir ∙ R$ 25,00"/>
        </OrderSection>

      </Main>
      <Footer/>
    </Container>
  )
}