import { Container } from "./styles"
import logo from '../../../assets/logo.png'
import { Button } from "../../components/Button"
import { AuthBox } from "../../components/AuthBox"
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { api } from '../../services/api'

export function SignUp(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigate();

  function handleSignUp(e){
    e.preventDefault()

    if(!name || !email || !password){
      return alert("Preencha todos os campos necessários");
    }
    
    api.post('/users', { name, email, password }).then(()=>{
      alert("Usuário cadastrado com sucesso!");
      navigation("/");
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);
      } else {
        alert("Não foi possivel cadastrar");
      }
    })

  }

  return(
    <Container>
      <img src={logo} alt="Logo do FoodExplorer" />
      <AuthBox>
        <h1 className="desktop">Crie sua conta</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Seu nome
          <input type="text" placeholder="Exemplo: Maria da Silva" onChange={e => setName(e.target.value)}/>
        </label>
        <label>
          Email
          <input type="text" placeholder="Exemplo: exemplo@exemplo.com.br" onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          Senha
          <input type="password" placeholder="No mínimo 6 caracteres" onChange={e => setPassword(e.target.value)}/>
        </label>
        <Button title="Criar conta" type="submit"/>
      </form>
      <Link to="/">Já tenho uma conta</Link>
      </AuthBox>
    </Container>
  )

}