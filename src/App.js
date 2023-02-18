import React, {useEffect} from "react";
import axios from "axios";
import Home from './Pages/Home/Home';
import {useDispatch} from "react-redux";
import {ITEMS} from "./store/itemsReducer";
import {CATEGORIES} from "./store/categoriesReducer";
import {BRANDS} from "./store/brandsReducer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3001/products').then(res => {
      dispatch({type: ITEMS, payload: res.data});
    });

    axios.get('http://localhost:3001/categories').then(res => {
      dispatch({type: CATEGORIES, payload: res.data});
    });

    axios.get('http://localhost:3001/brands').then(res => {
      dispatch({type: BRANDS, payload: res.data});
    });

  }, [dispatch]);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;