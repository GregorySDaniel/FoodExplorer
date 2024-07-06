import { Container } from "./styles";

export function Section({title, children}){
  return(
    <Container>
      <p>{title}</p>
      <div>
        {children}
      </div>
    </Container>
  )
}