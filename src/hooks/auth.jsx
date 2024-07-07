import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }){
  const [data, setData] = useState({})

  async function signIn({ email, password}){
    try  {
      const response = await api.post('/session', { email, password })
      const { user, token } = response.data;

      localStorage.setItem('@foodexplorer:user', JSON.stringify(user));
      localStorage.setItem('@foodexplorer:token', token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({user, token});
      
    } catch (e) {
      if(e.response){
        alert(e.response.data.message);
      } else {
        alert("Ocorreu um erro");
      }
    }
  }

  function signOut(){
    localStorage.removeItem('@foodexplorer:token');
    localStorage.removeItem('@foodexplorer:user');
    
    setData({});
  }
  
  useEffect(() => {
    const token = localStorage.getItem('@foodexplorer:token');
    const user = JSON.parse(localStorage.getItem('@foodexplorer:user'));
    
    if(token && user){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({user, token});
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