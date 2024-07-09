import { Container } from "./styles";
import { IoIosMenu } from "react-icons/io";
import { RiFileList3Line } from "react-icons/ri";
import Logo from '../../../assets/logo.png'
import { SideMenu } from "../SideMenu";
import { useState } from "react";
import { IoMdClose, IoIosLogOut, IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { Button } from '../Button';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks/auth';

export function Header({orders}){
  const [sideMenu, setSideMenu] = useState(false);
  const navigation = useNavigate();

  const { signOut } = useAuth();
  return(
    <Container>
      <IoIosMenu className="mobile" size={32} onClick={()=> setSideMenu(!sideMenu)}/> 
      <Link to="/"><img src={Logo} alt="Logo do FoodExplorer" /></Link>
      <Link to="/orders" className="mobile">
      <p>{orders ? orders : 0}</p>
      <RiFileList3Line size={32}/>
      </Link>
      <div className="search desktop">
        <IoIosSearch size={28}/>
        <input type="text" placeholder="Busque por pratos ou ingredientes"/>
     </div>
      <Button className="desktop" title={`Pedidos (${orders ? orders : 0})`} onClick={()=>navigation('/orders')}/>
      <SideMenu isOpen={sideMenu}/>
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