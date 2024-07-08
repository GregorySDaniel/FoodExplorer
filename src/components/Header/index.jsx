import { Container } from "./styles";
import { IoIosMenu } from "react-icons/io";
import { RiFileList3Line } from "react-icons/ri";
import Logo from '../../../assets/logo.png'
import { SideMenu } from "../SideMenu";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export function Header(){
  const [sideMenu, setSideMenu] = useState(false);

  return(
    <Container>
      <IoIosMenu size={32} onClick={()=> setSideMenu(!sideMenu)}/>
      <img src={Logo} alt="Logo do FoodExplorer" />
      <RiFileList3Line size={32}/>
      <SideMenu isOpen={sideMenu}/>
      {
        sideMenu &&       
      <div className="close">
        <IoMdClose size={32} onClick={() => setSideMenu(!sideMenu)}/>
      </div>
      }
      
    </Container>
  )
}