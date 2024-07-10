import { Container, Close, Content } from "./styles";
import { IoIosSearch } from "react-icons/io";
import { useAuth } from "../../hooks/auth";
import { USER_ROLES } from "../../utils/roles";
import { useNavigate } from "react-router-dom";

export function SideMenu({ isOpen, setSearch }){
  const { user, signOut } = useAuth(); 
  const navigation = useNavigate();

  return(
    <Container className={isOpen ? 'open' : 'closed'}>
      <Close>
        <p>Menu</p>
      </Close>
      <Content>
        <div className="search">
          <IoIosSearch size={28}/>
          <input type="text" placeholder="Busque por pratos ou ingredientes" onChange={(e)=>{setSearch(e.target.value)}}/>
        </div>
        {(user.role === USER_ROLES.ADMIN) && <h1 onClick={()=> {navigation('/new')}} >Novo Prato</h1>}
        <h1 onClick={()=> {signOut()}}>Sair</h1>
      </Content>
    </Container>
  )
}