import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>        
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:name" element={<ItemListContainer />} />
        <Route path="/itemDetail/:id" element={<ItemDetail />} />      
      </Routes>      
    </BrowserRouter>
  );
}

export default App;
