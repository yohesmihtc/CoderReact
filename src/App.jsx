import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemlistContainer/ItemListContainer'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:id" element={<ItemListContainer />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
