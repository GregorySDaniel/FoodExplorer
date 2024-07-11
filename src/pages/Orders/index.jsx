import { Container, Main, OrdersList, Payment } from "./styles";
import { OrderCard } from "../../components/OrderCard";
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Link } from "react-router-dom";
import QRcode from '../../../assets/QR.png'
import { PiPixLogoBold } from "react-icons/pi";
import { CartContext } from "../../hooks/cart";
import { useContext, useEffect, useState } from "react";

export function Orders(){
  const [price, setPrice] = useState(0)
  const { cart } = useContext(CartContext);
  
  useEffect(()=>{
    let totalPrice=0;
    cart.map((cart)=>{
      totalPrice += cart.price*cart.quantity;
    })
    setPrice(totalPrice)
  }, [cart])


  return(
    <Container>
      <Header/>
      <Main>
        <Link to="/">&lt; voltar</Link>
        <OrdersList>
          <h1>Meu Pedido</h1>
          {
            cart.map((cart, index)=>(
              <OrderCard key={index} dish={cart.dish} quantity={cart.quantity} price={cart.price} img={cart.img}/>
            ))
          }
          <p>Total: R$ {price.toFixed(2)}</p>
        </OrdersList>
        <Payment>
          <h1>Pagamento</h1>
          <section>
            <img src={QRcode} alt="QrCode Pix" />
          </section>
        </Payment>
      </Main>
      <Footer/>
    </Container>
  )
}