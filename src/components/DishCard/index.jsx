import { Container } from "./styles";
import { Button } from '../Button'
import { FaRegHeart } from "react-icons/fa";
import { Select } from "../Select";

export function DishCard({ img, title, price }){
  return(
    <Container>
      <FaRegHeart size={28}/>
      <img src={img} alt="Imagem do Prato" />
      <p>{title}</p>
      <p><span>R$ {price}</span></p>
      <Select/>
      <Button title="incluir"/>
    </Container>
  )
}