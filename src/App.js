
import './App.css';
import Navbar from './components/navbar/Navbar';
import {Routes,Route} from 'react-router-dom'
import Home from './components/home/Home';
import RecipeDetails from './components/recipeDetails/RecipeDetails';
import Favourite from './components/favourite/Favourite';
import Explore from './components/explore/Explore';
import { GlobalProvider } from './context/GlobalState';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div>
      <GlobalProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipe/:id' element={<RecipeDetails />} />
        <Route path='/favourite' element={<Favourite/>} />
        <Route path='/explore' element={<Explore/>} />
      </Routes>
      <Footer/>
      </GlobalProvider>
      
    </div>
  );
}

export default App;
