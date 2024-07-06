import { Container, Main, Banner} from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import { DishCard } from "../../components/DishCard";
import Cookies from '../../../assets/cookies.png'
import Dish from '../../../assets/Dish.png'

export function Home(){
  const dish = {img: Dish, title: "Salada Ravanello", price: 35.90}
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
          <DishCard img={dish.img} title={dish.title} price={dish.price}/>
        </Section>
        <Section title="Sobremesas">
          <DishCard img={dish.img} title={dish.title} price={dish.price}/>
        </Section>
        <Section title="Bebidas">
          <DishCard img={dish.img} title={dish.title} price={dish.price}/>
        </Section>
        
      </Main>
      <Footer/>
    </Container>
  )
}