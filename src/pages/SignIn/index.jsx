import { Container } from "./styles"
import logo from '../../../assets/logo.png'
import { Button } from "../../components/Button"
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function SignIn(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn }= useAuth();

  function handleSignIn(e){
    e.preventDefault();

    if(!email || !password){
      return alert("Preencha todos os campos necessários");
    }

    signIn({email, password});
  }

  return(
    <Container>
      <img src={logo} alt="Logo do FoodExplorer" />
      <form onSubmit={handleSignIn}>
        <label>
          Email
          <input type="text" placeholder="Exemplo: exemplo@exemplo.com.br" onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          Senha
          <input type="password" placeholder="No mínimo 6 caracteres" onChange={e => setPassword(e.target.value)}/>
        </label>
        <Button type="submit" title="Entrar"/>
      </form>
        <Link to="/register">Criar uma conta</Link>
    </Container>
  )

}