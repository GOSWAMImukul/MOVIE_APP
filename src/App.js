import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import './App.css';
import SimpleBottomNavigation from "./components/MainNav";
import Container from '@mui/material/Container';

import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Search from "./Pages/Search/Search";
import Series from "./Pages/Series/Series";


function App() {
  return (
    <BrowserRouter> 
     <Header />
      <div className="app">
      <Container>
        <Routes>
          <Route path='/' Component={Trending} exact/>
          <Route path='/movies' Component={Movies}/>
          <Route path='/series' Component={Series}/>
          <Route path='/search' Component={Search}/>
        </Routes>
      </Container>
       
      </div>
      <SimpleBottomNavigation/>
     
    </BrowserRouter>
   
  );
}

export default App;
