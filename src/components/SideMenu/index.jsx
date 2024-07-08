import { Container, Close, Content } from "./styles";
import { IoIosSearch } from "react-icons/io";

export function SideMenu({ isOpen }){

  return(
    <Container className={isOpen ? 'open' : 'closed'}>
      <Close>
        <p>Menu</p>
      </Close>
      <Content>
        <div className="search">
          <IoIosSearch size={28}/>
          <input type="text" placeholder="Busque por pratos ou ingredientes"/>
        </div>
      </Content>
    </Container>
  )
}