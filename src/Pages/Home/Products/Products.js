import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../useProducts/useProducts";

const Products = () => {
  // import useProducts to load products
  const products = useProducts();

  // take only 6 from the Products
  const allProducts = products.slice(0, 6);

  return (
    <div className="bg-banner-top">
      <h1 className="text-center text-dark bg-fresh rounded p-2">Products</h1>
      <div className="container mt-4">
        <div className="row">
          {allProducts.map((product) => (
            <div key={product._id} className="col-sm-6 col-lg-4 my-3">
              <div className="h-100 m-2 bg-light shadow">
                <div>
                  <img
                    src={product.img}
                    alt="thumbnail"
                    className="img-fluid product-h w-100"
                  />
                </div>
                <div className="text-center m-2">
                  <h3 className="text-fresh">{product.name}</h3>
                  <p>Description: {product.description}</p>
                  <p>FrameType: {product.FrameType}</p>
                  <p>Price {product.price} BDT</p>
                  <Link to={`/place-order/${product._id}`}>
                    <button className="btn bg-navbar text-white">Order</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-footer"></div>
    </div>
  );
};

export default Products;
