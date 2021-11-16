import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../useProducts/useProducts";

const Explore = () => {
  const products = useProducts();

  return (
    <div>
      <div className="top-bg">
        <div className="row pt-3">
          <div className="col-sm-12 col-lg-4">
            <hr className="mt-4" />
          </div>
          <div className="col-sm-12 col-lg-4 text-center">
            <h1>More Glasses</h1>
          </div>
          <div className="col-sm-12 col-lg-4">
            <hr className="mt-4" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-sm-12 col-lg-3 my-3">
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
                  <p>{product.description}</p>
                  <p>FrameType: {product.FrameType} Months</p>
                  <p>Price {product.price} BDT</p>
                  <Link to={`/place-order/${product._id}`}>
                    <button className="btn bg-navbar">Order</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
