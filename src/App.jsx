import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemlistContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'


function App() {
  return (
    <div className='App'>
      <NavBar/>
      <ItemListContainer/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)
       }/>
    </div>
  )
}

export default App
