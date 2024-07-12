import { Container, Select } from "./styles";
import { Button } from '../Button'
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { LuPlus, LuMinus } from "react-icons/lu";
import { useState, useContext } from 'react';
import { useAuth } from "../../hooks/auth";
import { USER_ROLES } from '../../utils/roles'
import { GrEdit } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../hooks/cart";

export function DishCard({ img, title, price, id, description }){
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const { addToCart, cart } = useContext(CartContext);
  
  const { user } = useAuth();

  const navigation = useNavigate();

  function handleSetOrders(){
    addToCart({
      img,
      quantity,
      price,
      dish: title
    })
  }

  return(
    <Container>
      <div onClick={() => setIsLiked(!isLiked)} className="svg">
        {(user.role === USER_ROLES.ADMIN) ? <GrEdit size={28} onClick={()=>{navigation(`edit/${id}`)}}/> : (isLiked ? <FaHeart size={28} color='#750310'/> : <FaRegHeart size={28}/>)}
      </div>
      <Link to={`details/${id}`}><img src={img} alt="Imagem do Prato"></img></Link>
      <p>{title}</p>
      <p className="desktop">{description}</p>
      <p><span>R$ {(price * quantity).toFixed(2)}</span></p>
      {(user.role === USER_ROLES.CUSTOMER) &&
      <Select>
        <LuMinus size={28} onClick={() => quantity > 1 ? setQuantity(quantity-1) : setQuantity(quantity)}/>
        <p>{quantity}</p>
        <LuPlus size={28} onClick={() => quantity < 10 ? setQuantity(quantity+1) : setQuantity(quantity)}/>
      </Select>}
      {(user.role === USER_ROLES.CUSTOMER) &&    
      <Button title="incluir" onClick={()=>{
        handleSetOrders();
        setQuantity(1);
        }}/>}
    </Container>
  )
}