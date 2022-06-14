import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  const onAdd = (cantidad) =>{
    console.log(`Seleccionaste ${cantidad} de unidades`)
  }
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting = "Aqui van los productos" />
      <ItemCount initial={0} stock={7} onAdd={onAdd}/>
    </div>
  );
}

export default App;
