import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  return (
    <div className='App'>
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos a TSL: The strength lab'}/>
    </div>
  )
}

export default App
