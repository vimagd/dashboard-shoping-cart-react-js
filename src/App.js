/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import productsApi from "./apis/products.api";
import { featchProducts } from "./state/products/product.slice";
import Loader from "./components/shared-components/loader/Loader";
import { useLocation } from 'react-router-dom';
import Header from "./components/shared-components/header/Header";
import { featchCatagory } from "./state/products/catagory.slice";
import RecentView from "./components/shared-components/recent-view/RecentView";
import Footer from "./components/shared-components/footer/Footer";

const App = (props) => {

  const { pathname } = useLocation();
  const [open, setOpen] = useState(false); // used for loader
  const [pathFlag, setPathFlag] = useState(true); // used for path
  const dispatch = useDispatch();
  let [catagory, setCatagory] = useState([]);

  const featchProductsApi = async () => {
    setOpen(true); // loader ON
    let response = await productsApi.get(`/products`)
      .catch((err) => {
        console.log('https://fakestoreapi.com/products \n' + err);
        alert('https://fakestoreapi.com/products \n' + err);
      }); //api call
    if (response.data) {
      setOpen(false); //loader OFF
      response.data.map((o) => {
        if (o.category === "men's clothing")
          o.category = 'Men';
        else if (o.category === "women's clothing")
          o.category = 'Women';
        else if (o.category === "jewelery")
          o.category = 'Jewelery';
        else
          o.category = 'Electronics';

        o.quantity = 1;
        o.addCart = false;
        o.totalAmount = o.quantity * o.price;
        return o;
      });

      dispatch(featchProducts(response.data)); //dispached response to action product

      let catagoryData = []
      catagoryData = response.data.map(o => o.category).filter((v, i, a) => a.indexOf(v) === i)
      catagoryData.push('All')
      setCatagory(catagoryData);
      dispatch(featchCatagory(catagoryData.sort())); //dispached response to action  catagory

    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    if (catagory.filter((o) => pathname === `/products/${o}`).length === 0 && pathFlag) {
      featchProductsApi();
      setPathFlag(false);
    }
    return
  }, [pathname]);

  return (
    <>
      <Loader open={open} />
      <Header />
      {props.children}
      <RecentView />
      <Footer />
    </>
  );
}

export default App;

