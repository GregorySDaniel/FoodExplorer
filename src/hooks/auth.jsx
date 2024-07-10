import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }){
  const [data, setData] = useState({})

  async function signIn({ email, password}){
    try  {
      const response = await api.post('/session', { email, password }, { withCredentials: true })
      const { user } = response.data;

      localStorage.setItem('@foodexplorer:user', JSON.stringify(user));

      setData({user});
      
    } catch (e) {
      if(e.response){
        alert(e.response.data.message);
      } else {
        alert("Ocorreu um erro");
      }
    }
  }

  function signOut(){
    localStorage.removeItem('@foodexplorer:user');

    setData({})
  }
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('@foodexplorer:user'));
    
    if(user){
      setData({user});
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);

  return context;
}

export {AuthProvider, useAuth};