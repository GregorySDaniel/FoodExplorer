import { Container, Main, ThreeRow, TwoRow } from "./styles";
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { AddTag } from '../../components/AddTag';
import { Link } from "react-router-dom";
import { api } from '../../services/api';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineFileUpload } from "react-icons/md";


export function NewDish(){
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [imageFile, setImageFile] = useState(null)
  const [price, setPrice] = useState();
  const [category, setCategory] = useState("meals");
  const [ingredients, setIngredients] = useState([]);


  const navigation = useNavigate();

  function handleImageChange(e){
    const file = e.target.files[0];
    setImageFile(file);
  };

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
      await api.post('/dishes', fileUploadForm)
      alert("Prato criado com sucesso!");
      navigation("/");
    } catch (e) {
      if(e.response){
        alert(e.response.data.message);
      } else {
        alert("Não foi possivel criar prato");
      }
    }
  }

  return(
    <Container>
      <Header />
      <Main>

        <Link to="/">&lt; voltar</Link>
        <h1>Novo Prato</h1>

        <form onSubmit={handleSubmit}>
          <ThreeRow>
          <label>
            Imagem do prato
            <div className="divfile">
              <MdOutlineFileUpload size={34}/>
              <p>Selecione imagem</p>
              <input type="file" onChange={handleImageChange} className="file"/>
            </div>
          </label>

          <label>
            Nome do prato
            <input type="text" placeholder="Ex.: Salada Ceasar" onChange={(e) => setName(e.target.value)}/>
          </label>
          
          <label>
            Categoria
            <select name="category" onChange={(e) => setCategory(e.target.value)}>
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
            <input type="number" step="0.01" min="0" max="100" placeholder="00,00" onChange={(e) => setPrice(e.target.value)} />
          </label>
          </TwoRow>

          <label>
            Descrição
            <textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" rows="8" onChange={(e) => setDescription(e.target.value)}/>
          </label>

          <Button type="submit" title="Salvar alterações" />
          
        </form>

      </Main>
      <Footer />
    </Container>
  )
}