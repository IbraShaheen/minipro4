import { DetailWrapper } from "../styles";
import DeleteButton from "./button/DeleteButton";
import { Link } from "react-router-dom";



import { Redirect, useParams } from "react-router-dom";
import {Helmet} from "react-helmet";

const ProductDetail = (props) => {
  const tripsSlug = useParams().tripsSlug;

  const product = props.products.find(
    (product) => product.slug === tripsSlug
  );
  if (!product) return <Redirect to="/notfound" />;

  return (
    <DetailWrapper>
      <Helmet>
      <title>{product.name}</title>
      </Helmet>
        <center>
      <h1> {product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p><br/>
      <b>City: {product.city}</b><br/>
      <p>{product.length}KM</p>
      <p>Level: {product.difficulty}</p>
      <p>Rating <br/>{product.rating}</p>
      </center>
         
      {/* Recommendation */}
      <Link to={`/trips/${"wadi-al-mujib"}`}> Recommended: <br/> wadi-al-mujib </Link>

    </DetailWrapper>
  );
};

export default ProductDetail;
