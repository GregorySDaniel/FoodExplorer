import { Container, Main, TagsSection, OrderSection, Select } from "./styles";
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { Tag } from '../../components/Tag'
import { LuPlus, LuMinus } from "react-icons/lu";
import Dish from '../../../assets/Dish.png'
import { Link } from 'react-router-dom'
import { useState } from "react";

export function Details(){
  const [quantity, setQuantity] = useState(1);
  const dish = {img: Dish, title: "Salada Ravanello", price: 35.90}

  return(
    <Container>
      <Header/>
      <Main>
        <Link to="/">&lt; voltar</Link>
        <img src={dish.img} alt="Foto do prato" />
        <h1>Salada Ravanello</h1>
        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
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