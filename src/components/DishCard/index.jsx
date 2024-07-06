import { Container } from "./styles";
import { Button } from '../Button'
import { LuPlus, LuMinus } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";

export function DishCard({ img, title, price }){
  return(
    <Container>
      <FaRegHeart size={28}/>
      <img src={img} alt="Imagem do Prato" />
      <p>{title}</p>
      <p><span>R$ {price}</span></p>
      <section>
        <LuMinus size={28}/>
        <p>01</p>
        <LuPlus size={28}/>
      </section>
      <Button title="incluir"/>
    </Container>
  )
}