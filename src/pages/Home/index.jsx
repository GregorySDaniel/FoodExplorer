import { Container, Main, Banner } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import { DishCard } from "../../components/DishCard";
import Cookies from '../../../assets/cookies.png'
import { api } from '../../services/api'; 
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { USER_ROLES } from "../../utils/roles";
import { useAuth } from "../../hooks/auth";

export function Home(){
  const [dishes, setDishes] = useState([]);
  const [orders, setOrders] = useState(0);
  const [search, setSearch] = useState('');


  const { user } = useAuth();

  useEffect(()=>{
    async function fetchData(){
      const response = await api.get('dishes');
      setDishes(response.data);
    }
    fetchData();
  }, [])

  useEffect(()=>{
    async function fetchData(){
      const response = await api.get(`dishes/?name=${search}`);
      setDishes(response.data);
    }
    fetchData();
  }, [search])

  return(
    <Container>
      <Header orders={orders} setSearch={setSearch}/>
      <Main>
        <Banner>
          <img src={Cookies} alt="Imagem de Cookies" />
          <section>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </section>
        </Banner>

        <Section title="Refeições">
          <Splide
            options={{
            width: '90vw',
            pagination: false,
            arrows: false,
            focus: 'center',
            autoWidth: true,
            gap: '24px'
          }}>
            {dishes && dishes
            .filter(dish => dish.category === 'meals')
            .map((dish) => (
              <SplideSlide key={String(dish.id)}>
                <DishCard
                id={dish.id}
                img={`${api.defaults.baseURL}/files/${dish.image}`} 
                title={dish.name}
                description={dish.description} 
                price={dish.price}
                orders={orders}
                setOrders={setOrders}/>
              </SplideSlide>
            ))}
          </Splide>
        </Section>

        <Section title="Sobremesas">
        <Splide
        options={{
          width: '90vw',
          pagination: false,
          arrows: false,
          focus: 'center',
          autoWidth: true,
          gap: '24px'
        }}>
          {dishes && dishes
          .filter(dish => dish.category === 'dessert')
          .map((dish) => (
            <SplideSlide key={String(dish.id)}>
              <DishCard
              id={dish.id}
              img={`${api.defaults.baseURL}/files/${dish.image}`} 
              title={dish.name} 
              description={dish.description} 
              price={dish.price}
              orders={orders}
              setOrders={setOrders}/>
            </SplideSlide>
          ))}
          </Splide>
        </Section>

        <Section title="Bebidas">
          <Splide
              options={{
              width: '90vw',
              pagination: false,
              arrows: false,
              focus: 'center',
              autoWidth: true,
              gap: '24px'
            }}>
          {dishes && dishes
          .filter(dish => dish.category === 'drinks')
          .map((dish) => (
            <SplideSlide key={String(dish.id)}>
            <DishCard
            id={dish.id}
            img={`${api.defaults.baseURL}/files/${dish.image}`} 
            title={dish.name}
            description={dish.description} 
            price={dish.price}
            orders={orders}
            setOrders={setOrders}/>
            </SplideSlide>
          ))}
          </Splide>
        </Section>
        
      </Main>
      <Footer/>
    </Container>
  )
}