import { Container, Main, Banner} from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import { DishCard } from "../../components/DishCard";
import Cookies from '../../../assets/cookies.png'
import Dish from '../../../assets/Dish.png'
import { api } from '../../services/api';
import { useEffect, useState } from "react";

export function Home(){
  const [dishes, setDishes] = useState([]);
  console.log(dishes)

  useEffect(()=>{
    async function fetchData(){
      const response = await api.get('dishes');
      setDishes(response.data);
    }
    fetchData();
  }, [])

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
          {dishes && dishes
          .filter(dish => dish.category === 'meals')
          .map((dish) => (
            <DishCard 
            key={String(dish.id)}
            img={`${api.defaults.baseURL}/files/${dish.image}`} 
            title={dish.name} 
            price={dish.price}/>
          ))}
        </Section>
        <Section title="Sobremesas">
          {dishes && dishes
          .filter(dish => dish.category === 'dessert')
          .map((dish) => (
            <DishCard 
            key={String(dish.id)}
            img={`${api.defaults.baseURL}/files/${dish.image}`} 
            title={dish.name} 
            price={dish.price}/>
          ))}
        </Section>
        <Section title="Bebidas">
          {dishes && dishes
          .filter(dish => dish.category === 'drinks')
          .map((dish) => (
            <DishCard 
            key={String(dish.id)}
            img={`${api.defaults.baseURL}/files/${dish.image}`} 
            title={dish.name} 
            price={dish.price}/>
          ))}
        </Section>
        
      </Main>
      <Footer/>
    </Container>
  )
}