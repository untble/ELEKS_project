import React, {useEffect, useState} from "react";
import axios from "axios";
import Home from './Pages/Home/Home';
import {useDispatch} from "react-redux";
import {ITEMS} from "./store/itemsReducer";

function App() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/products').then(res => {
      dispatch({type: ITEMS, payload: res.data});
    });

    axios.get('http://localhost:3001/categories').then(res => {
      setCategory(res.data);
    });

    axios.get('http://localhost:3001/brands').then(res => {
      setBrands(res.data);
    });

  }, []);

  return (
    <div className="App">

      <Home
        category={category}
        brands={brands}
      />
    </div>
  );
}

export default App;