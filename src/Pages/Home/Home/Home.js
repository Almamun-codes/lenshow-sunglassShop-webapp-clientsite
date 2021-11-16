import useProducts from "../../useProducts/useProducts";
import Affiliates from "../Affiliates/Affiliates";
import HomeBanner from "../HomeBanner/HomeBanner";
import Products from "../Products/Products";
import Review from "../Review/Review";

const Home = () => {
  // import useProducts to load products
  const products = useProducts();

  return (
    <div>
      <HomeBanner></HomeBanner>
      {products ? (
        <>
          <Products></Products>
          <Review></Review>
          <Affiliates></Affiliates>
        </>
      ) : (
        <div className="text-center">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
