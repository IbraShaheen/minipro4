// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import {SearchBar, SearchBarKm} from "./SearchBar";
// import ProductDetail from "./ProductDetail";
// Data
import products from "../products";
import { useState } from "react";
// import ProductItem from "./ProductItem";

import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

const ProductList = (props) => {
  const [query, setQuery] = useState("");
                                                                            
    const [km, setKm] = useState("");

  const productList = props.products
    .filter((product) => (product.name.toLowerCase().includes(query.toLowerCase()) || product.city.toLowerCase().includes(query.toLowerCase()))
    && product.length <= Number(km))
    .map((product) => (



      <ProductItem
        product={product}
        key={product.id}
        setProduct={props.setProduct}
        deleteProduct={props.deleteProduct}
      />
    ));



  return (
    <>
      <SearchBar setQuery={setQuery} />


      <Helmet>
      <title>Trips</title>
      </Helmet>
      
      <ListWrapper>{productList}</ListWrapper>

          <center>
      <p>Filtering by the length of the trip</p>
     <input type="range" min="20" max="110" step="10" class="slider-Square" id="myRange" onChange={(event) => setKm(event.target.value)}/>
     </center>

    </>
  );
};

export default ProductList;
