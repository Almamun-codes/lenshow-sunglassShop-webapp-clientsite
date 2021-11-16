import React, { useEffect, useState } from "react";

const ManageProducts = () => {
  const [status, setStatus] = useState(false);
  const [products, setProducts] = useState([]);

  // load all products with dependency
  useEffect(() => {
    fetch("https://mighty-fjord-00429.herokuapp.com/products").then((res) =>
      res.json().then((data) => {
        console.log(data);
        setProducts(data);
      })
    );
  }, [status]);

  // deleteProduct
  const handleProductDelete = (id) => {
    const process = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (process) {
      fetch(`https://mighty-fjord-00429.herokuapp.com/products/${id}`, {
        method: "delete",
        headers: {
          "content-type": "Application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("product deleted successfully");
            setStatus(true);
            setStatus(false);
          }
        });
    } else {
      return;
    }
  };
  return (
    <div>
      <h1 className="text-white">manage products</h1>
      <div className="container mt-4">
        <div className="row">
          {products.map((product) => (
            <div key={product._id} className="col-sm-12 col-lg-6 my-3">
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
                  <button
                    onClick={() => handleProductDelete(product._id)}
                    className="btn bg-navbar text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
