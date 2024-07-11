import { Container } from "./styles";
import Dish from '../../../assets/Dish.png'
import { useContext } from "react";
import { CartContext } from "../../hooks/cart";

export function OrderCard({ quantity, img, dish, price }){
  const { deleteInCart } = useContext(CartContext);

  function handleDelete(){
    deleteInCart(dish);
  }
  return(
    <Container>
      <img src={img} alt="Imagem do prato" />
      <section>
        <p>{quantity}x {dish} <span>R${price}</span></p>
        <button onClick={handleDelete}>Excluir</button>
      </section>
    </Container>
  )
}