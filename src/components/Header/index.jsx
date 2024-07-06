import { Container } from "./styles";
import { IoIosMenu } from "react-icons/io";
import { RiFileList3Line } from "react-icons/ri";
import Logo from '../../../assets/logo.png'

export function Header(){
  return(
    <Container>
      <IoIosMenu size={32}/>
      <img src={Logo} alt="Logo do FoodExplorer" />
      <RiFileList3Line size={32}/>
    </Container>
  )
}