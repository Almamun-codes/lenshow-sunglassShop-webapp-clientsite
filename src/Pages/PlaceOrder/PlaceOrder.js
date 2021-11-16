import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PlaceOrder = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const addressRef = useRef();
  const PhoneRef = useRef();
  const colorRef = useRef();

  useEffect(() => {
    fetch(`https://mighty-fjord-00429.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const history = useHistory();

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    const order = {
      userName: user.displayName,
      email: user.email,
      address: addressRef.current.value,
      Phone: PhoneRef.current.value,
      productName: product.name,
      FrameType: product.FrameType,
      img: product.img,
      price: product.price,
      color: colorRef.current.value,
      status: "Pending",
    };

    fetch("https://mighty-fjord-00429.herokuapp.com/place-order", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Order placed successfully");
          history.push("/dashboard/my-orders");
        }
      });
  };

  return (
    <div>
      <div className="bg-secondary">
        <div className="container-fluid">
          <div className="container bg-secondary">
            <div className="text-white">
              <form onSubmit={handlePlaceOrder}>
                <h3 className="border-bottom border-primary border-3 pt-4">
                  Product Information
                </h3>
                <div className="row">
                  <div className="col-sm-12 col-lg-6">
                    <label>Product Name</label>
                    <br />
                    <input
                      type="text"
                      value={product?.name}
                      readOnly
                      className="w-75 rounded outline-none"
                    />
                  </div>
                  <div className="col-sm-12 col-lg-6">
                    <label>FrameType</label>
                    <br />
                    <input
                      type="text"
                      value={product?.FrameType}
                      readOnly
                      className="w-75 rounded outline-none"
                    />
                  </div>
                  <div className="col-sm-12 col-lg-6">
                    <label>Color Family</label>
                    <br />
                    <input
                      type="text"
                      ref={colorRef}
                      required
                      className="w-75 rounded outline-none"
                    />
                  </div>
                  <div className="col-sm-12 col-lg-6">
                    <label>Cost</label>
                    <br />
                    <input
                      type="text"
                      value={product?.price}
                      readOnly
                      className="w-75 rounded outline-none"
                    />
                  </div>
                </div>

                {/* user information */}
                <h3 className="border-bottom border-primary border-3 mt-4">
                  Your Information
                </h3>
                <div className="row">
                  <div className="col-sm-12 col-lg-6">
                    <label htmlFor="name">Your Name</label>
                    <br />
                    <input
                      type="text"
                      name="name"
                      value={user.displayName}
                      readOnly
                      className="w-75 rounded outline-none"
                    />
                  </div>
                  <div className="col-sm-12 col-lg-6">
                    <label>Your Email</label>
                    <br />
                    <input
                      type="text"
                      value={user.email}
                      readOnly
                      className="w-75 rounded outline-none"
                    />
                  </div>
                  <div className="col-sm-12 col-lg-6">
                    <label>Address</label>
                    <br />
                    <input
                      type="text"
                      ref={addressRef}
                      className="w-75 rounded outline-none"
                    />
                  </div>
                  <div className="col-sm-12 col-lg-6">
                    <label>Phone Number</label>
                    <br />
                    <input
                      type="text"
                      ref={PhoneRef}
                      className="w-75 rounded outline-none"
                    />
                  </div>
                </div>
                <div>
                  <br />
                  <Link to="/explore">
                    <p className="text-white">
                      Not this product? Check out these products.
                    </p>
                  </Link>
                  <br />
                  <button type="submit" className="btn btn-primary mb-4">
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
