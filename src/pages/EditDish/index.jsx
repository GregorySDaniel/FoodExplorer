import { Container, Main, ThreeRow, TwoRow } from "./styles";
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { AddTag } from '../../components/AddTag';
import { Link, useParams } from "react-router-dom";
import { api } from '../../services/api';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function EditDish(){
  const { id } = useParams();
  const [dish, setDish] = useState({});
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [imageFile, setImageFile] = useState(null)
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("meals");
  const [ingredients, setIngredients] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      const response = await api.get(`dishes/${id}`);
      setDish(response.data);
    }
    fetchData();
  }, [])


  useEffect(()=>{
    setName(dish.name || '');
    setDescription(dish.description || '');
    setImageFile(dish.image || '');
    setPrice(dish.price || '');
    setCategory(dish.category || '');
    if(dish.ingredients){
      const ingredientNames = dish.ingredients.map(ingredient => ingredient.name);
      setIngredients(ingredientNames);
    }
  }, [dish])


  const navigation = useNavigate();

  function handleImageChange(e){
    const file = e.target.files[0];
    setImageFile(file);
  };

  async function handleDelete(e){
    e.preventDefault();
    const sure = window.confirm('Tem certeza que deseja deletar esse prato?')
    if(!sure){
      return
    }
    try{
      await api.delete(`dishes/${id}`)
      alert("Prato deletado com sucesso!");
      navigation("/");
    } catch (e) {
      if(e.response){
        alert(e.response.data.message);
      } else {
        alert("Não foi possivel deletar o prato");
      }
    }
  }

  async function handleSubmit(e){
    e.preventDefault()
    if(!name || !category || !price || !imageFile || !description){
      return alert("Preencha todos os campos necessários");
    }
    
    const fileUploadForm = new FormData();
    fileUploadForm.append('image', imageFile);
    fileUploadForm.append('name', name);
    fileUploadForm.append('category', category);
    fileUploadForm.append('price', price);
    fileUploadForm.append('description', description);
    ingredients.forEach(ingredient => {
      fileUploadForm.append('ingredients', ingredient);
    });

    try{ 
      await api.patch(`dishes/${id}`, fileUploadForm)
      alert("Prato editado com sucesso!");
      navigation("/");
    } catch (e) {
      if(e.response){
        alert(e.response.data.message);
      } else {
        alert("Não foi possivel editar o prato");
      }
    }
  }

  return(
    <Container>
      <Header />
      <Main>

        <Link to="/">&lt; voltar</Link>
        <h1>Editar Prato</h1>

        <form onSubmit={handleSubmit}>
          <ThreeRow>
          <label>
            Imagem do prato
            <input type="file" onChange={handleImageChange}/>
          </label>

          <label>
            Nome do prato
            <input type="text" value={name} placeholder="Ex.: Salada Ceasar" onChange={(e) => setName(e.target.value)}/>
          </label>
          
          <label>
            Categoria
            <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="meals">Refeição</option>
              <option value="dessert">Sobremesa</option>
              <option value="drinks">Bebida</option>
            </select>
          </label>
          </ThreeRow>

          <TwoRow>
          <label >
            Ingredientes
            <div className="ingredients">
              { ingredients && ingredients.map((ingredient, index)=>
              (<AddTag key={index} className="tags" title={ingredient} setIngredients={setIngredients} ingredients={ingredients}/>)
              )}
              <AddTag className="tags" title="Adicionar" isNew setIngredients={setIngredients} ingredients={ingredients}/>
            </div>
          </label>

          <label className="price">
            Preço
            <p>R$</p>
            <input type="number" value={price} step="0.01" min="0" max="100" placeholder="00,00" onChange={(e) => setPrice(e.target.value)} />
          </label>
          </TwoRow>

          <label>
            Descrição
            <textarea value={description} placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" rows="8" onChange={(e) => setDescription(e.target.value)}/>
          </label>
          <div className="buttons">
          <Button title="Excluir prato" onClick={handleDelete}/>
          <Button type="submit" title="Salvar alterações" />  
          </div>
          
        </form>

      </Main>
      <Footer />
    </Container>
  )
}