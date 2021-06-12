import { Description, ShopImage, Title } from "../styles";

import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Title>First Hiking</Title>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Description>The best guide for hiking lovers</Description>
      <ShopImage
        alt="hiking trips"
        src="https://img.themanual.com/image/themanual/hiking-in-high-elevations.jpg"
     />


    </>
  );
};

export default Home;
