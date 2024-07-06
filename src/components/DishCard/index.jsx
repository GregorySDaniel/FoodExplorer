import { Container, Select } from "./styles";
import { Button } from '../Button'
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { LuPlus, LuMinus } from "react-icons/lu";
import { useState } from 'react';

export function DishCard({ img, title, price }){
  const [quantity, setQuantity] = useState(1);

  return(
    <Container>
      <FaRegHeart size={28}/>
      <Link to="/details/2"><img src={img} alt="Imagem do Prato"></img></Link>
      <p>{title}</p>
      <p><span>R$ {(price * quantity).toFixed(2)}</span></p>
      <Select>
        <LuMinus size={28} onClick={() => quantity > 1 ? setQuantity(quantity-1) : setQuantity(quantity)}/>
        <p>{quantity}</p>
        <LuPlus size={28} onClick={() => quantity < 10 ? setQuantity(quantity+1) : setQuantity(quantity)}/>
      </Select>
      <Button title="incluir"/>
    </Container>
  )
}