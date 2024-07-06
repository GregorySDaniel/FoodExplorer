import { Container } from './styles.js'
import { LuPlus, LuMinus } from "react-icons/lu";

export function Select(){
  return(
    <Container>
      <LuMinus size={28}/>
      <p>01</p>
      <LuPlus size={28}/>
    </Container>
  )
}