import { Container } from "./styles";
import { IoIosMenu } from "react-icons/io";
import { RiFileList3Line } from "react-icons/ri";
import Logo from '../../../assets/logo.png'
import adminLogo from '../../../assets/adminlogo.png'
import { SideMenu } from "../SideMenu";
import { useState, useContext } from "react";
import { IoMdClose, IoIosLogOut, IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { Button } from '../Button';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks/auth';
import { USER_ROLES } from "../../utils/roles";
import { CartContext } from "../../hooks/cart";

export function Header({setSearch}){
  const [sideMenu, setSideMenu] = useState(false);
  const navigation = useNavigate();
  const { cart } = useContext(CartContext);

  const { signOut, user } = useAuth();
  return(
    <Container>
      <IoIosMenu className="mobile" size={32} onClick={()=> setSideMenu(!sideMenu)}/> 
      <Link to="/"><img src={(user.role === USER_ROLES.ADMIN) ? adminLogo : Logo} alt="Logo do FoodExplorer" /></Link>
      <Link to="/orders" className="mobile">
      { user.role === USER_ROLES.CUSTOMER && 
      <>
      <p>{cart.length}</p>
      <RiFileList3Line size={32}/>
      </>}

      </Link>

      <div className="search desktop">
        <IoIosSearch size={28}/>
        <input type="text" placeholder="Busque por pratos ou ingredientes" onChange={(e)=>{setSearch(e.target.value)}}/>
     </div>

      {(user.role === USER_ROLES.ADMIN) ?
      <Button className="desktop" title='Novo prato' onClick={()=>navigation('/new')}/> : 
      <Button className="desktop" title={`Pedidos (${cart.length})`} onClick={()=>navigation('/orders')}/>
      }

      <SideMenu isOpen={sideMenu} setSearch={setSearch}/>
      <IoIosLogOut className="desktop" size={32} onClick={()=>{signOut()}}/>
      {
        sideMenu &&       
      <div className="close mobile">
        <IoMdClose size={32} onClick={() => setSideMenu(!sideMenu)}/>
      </div>
      }
      
    </Container>
  )
}