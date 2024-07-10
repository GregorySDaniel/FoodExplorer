import { Container } from "./styles";
import { IoIosClose, IoMdAdd } from "react-icons/io";
import { useState } from "react";


export function AddTag({title , isNew, setIngredients, ingredients }){
  const [newIngredient, setNewIngredient] = useState('');


  function handleAddIngredients(e){
    setIngredients(ingredients=> [...ingredients, newIngredient])
  }

  function handleRemoveIngredients(ingredientToRemove) {
    setIngredients(ingredients => 
      ingredients.filter(ingredient => ingredient !== ingredientToRemove)
    );
  }

  return(
    <Container className={isNew ? 'new' : ''}>
      {isNew ? <input placeholder="Adicionar" onChange={(e)=>{setNewIngredient(e.target.value)}}/> : <p>{title}</p>}
      {isNew ? <IoMdAdd size={22} onClick={(e)=>{handleAddIngredients(e)}}/> : <IoIosClose size={22} onClick={()=>{handleRemoveIngredients(title)}}/>}
    </Container>
  )
}