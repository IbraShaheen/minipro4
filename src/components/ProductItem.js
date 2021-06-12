// Styling
import { ProLength, ProductWrapper } from "../styles";
import { Link } from "react-router-dom";

import DeleteButton from "./button/DeleteButton";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <ProductWrapper>
      <Link to={`/trips/${product.slug}`}  >
      <img
        alt={product.name}
        src={product.image} 
         />  

      {/* onClick={() => props.setProduct(product)} it was in line 16 */}
        
        </Link>
        <center>
      <p>{product.name}</p>
      <b>{product.city}</b>
      <ProLength >{product.length} KM</ProLength>
      </center>
      {/* <DeleteButton
        deleteProduct={props.deleteProduct}
        product={product}
        setProduct={props.setProduct}
      /> */}
    </ProductWrapper>
  );
};

export default ProductItem;
