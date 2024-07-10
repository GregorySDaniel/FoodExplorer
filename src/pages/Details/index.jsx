import { Container, Main, TagsSection, OrderSection, Select } from "./styles";
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { Tag } from '../../components/Tag'
import { LuPlus, LuMinus } from "react-icons/lu";
import Dish from '../../../assets/Dish.png'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useAuth } from '../../hooks/auth';
import { USER_ROLES } from "../../utils/roles";

  export function Details(){
    const [quantity, setQuantity] = useState(1);
    const [dish, setDish] = useState({});
    const { id } = useParams();
    const { user } = useAuth();

    useEffect(()=>{
      async function fetchData(){
        const response = await api.get(`dishes/${id}`);
        setDish(response.data);
      }
      fetchData();
    }, [])

    return(
      <Container>
        <Header/>
        <Main>
          <Link to="/">&lt; voltar</Link>
          <img src={`${api.defaults.baseURL}/files/${dish.image}`} alt="Foto do prato" />
          <section>
            <h1>{dish.name}</h1>
            <p>{dish.description}</p>
            <TagsSection>
              { dish.ingredients &&
                dish.ingredients.map((ingredient)=>(
                  <Tag key={ingredient.id} title={ingredient.name}/>
                ))
              }
            </TagsSection>
            <OrderSection>
              { user.role === USER_ROLES.CUSTOMER && 
                <Select>
                <LuMinus size={28} onClick={() => quantity > 1 ? setQuantity(quantity-1) : setQuantity(quantity)}/>
                <p>{quantity}</p>
                <LuPlus size={28} onClick={() => quantity < 10 ? setQuantity(quantity+1) : setQuantity(quantity)}/>
              </Select>}
              { user.role ===  USER_ROLES.ADMIN ?
                <Button title='Editar prato'/> :
                <Button title={`pedir ∙ R$ ${(dish.price * quantity).toFixed(2)}`}/>
              }
            </OrderSection>
          </section>
        </Main>
        <Footer/>
      </Container>
    )
  }