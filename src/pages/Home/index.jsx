import { Container, Main, Banner} from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import { DishCard } from "../../components/DishCard";
import Cookies from '../../../assets/cookies.png'
import Dish from '../../../assets/Dish.png'

export function Home(){
  return(
    <Container>
      <Header/>
      <Main>
        <Banner>
          <img src={Cookies} alt="Imagem de Cookies" />
          <section>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </section>
        </Banner>
        <Section title="Refeições">
          <DishCard img={Dish} title="Salada Ravanello" price="35,50"/>
        </Section>
        <Section title="Sobremesas">
          <DishCard img={Dish} title="Salada Ravanello" price="35,50"/>
        </Section>
        <Section title="Bebidas">
          <DishCard img={Dish} title="Salada Ravanello" price="35,50"/>
        </Section>
        
      </Main>
      <Footer/>
    </Container>
  )
}