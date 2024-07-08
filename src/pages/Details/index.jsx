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

  export function Details(){
    const [quantity, setQuantity] = useState(1);
    const [dish, setDish] = useState({});
    const { id } = useParams();

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
          <h1>{dish.name}</h1>
          <p>{dish.description}</p>
          <TagsSection>
            <Tag title="arroz"/>
            <Tag title="alface"/>
            <Tag title="pão"/>
            <Tag title="tomate"/>
          </TagsSection>
          <OrderSection>
            <Select>
              <LuMinus size={28} onClick={() => quantity > 1 ? setQuantity(quantity-1) : setQuantity(quantity)}/>
              <p>{quantity}</p>
              <LuPlus size={28} onClick={() => quantity < 10 ? setQuantity(quantity+1) : setQuantity(quantity)}/>
            </Select>
            <Button title={`pedir ∙ R$ ${(dish.price * quantity).toFixed(2)}`}/>
          </OrderSection>
        </Main>
        <Footer/>
      </Container>
    )
  }