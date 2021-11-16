import React, { useEffect, useState } from "react";

const ManageAllOrders = () => {
  const [orders, setorders] = useState([]);
  const [status, setStatus] = useState(false);

  // fetch data to load orders
  useEffect(() => {
    fetch(`https://mighty-fjord-00429.herokuapp.com/orders`).then((res) =>
      res.json().then((data) => {
        setorders(data);
      })
    );
  }, [status]);

  const [order, setOrder] = useState({});

  const handleApprovebtn = (id) => {
    orders.forEach((element) => {
      if (element._id === id) {
        setOrder(element);
      }
    });

    if (order?._id) {
      const updatedOrder = { ...order };
      console.log(orders);
      updatedOrder.status = "Shipped";
      setOrder(updatedOrder);

      fetch(`https://mighty-fjord-00429.herokuapp.com/orders/${id}`, {
        method: "put",
        headers: {
          "content-type": "Application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            alert("Order Shipped successfully");
            setStatus(true);
            setStatus(false);
          }
        });
    } else {
      alert("Data Loading... Please wait a little bit...");
    }
  };

  const handleCancelbtn = (id) => {
    const process = window.confirm(
      "Are you sure you want to delete this order?"
    );
    if (process) {
      fetch(`https://mighty-fjord-00429.herokuapp.com/orders/${id}`, {
        method: "delete",
        headers: {
          "content-type": "Application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Order cancelled successfully");
            setStatus(true);
          }
        });
    } else {
      return;
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-lg-4">
          <hr className="mt-4" />
        </div>
        <div className="col-sm-12 col-lg-4">
          <h1 className="text-white">All Orders</h1>
        </div>
        <div className="col-sm-12 col-lg-4">
          <hr className="mt-4" />
        </div>
      </div>
      <div className="text-center">Total {orders.length} Orders</div>
      <div className="row">
        {orders.map((order) => (
          <div className="col-12 mt-3">
            <div className="d-flex flex-wrap bg-light shadow position-relative rounded">
              <div className="col-sm-12 col-lg-3 text-start">
                <img
                  src={order.img}
                  alt="product"
                  className="img-fluid product-height ms-2 rounded"
                />
              </div>
              <div className="col-sm-12 col-lg-4 text-start">
                <div className="m-2">
                  <h2 className="text-fresh">{order.productName}</h2>
                  <span>FrameType time: {order.FrameType} months</span>
                  <br />
                  <span>Color: {order.color}</span>
                  <br />
                  <span>Will be delivered to {order.address}</span>
                </div>
              </div>
              <div className="col-sm-12 col-lg-5">
                <div className="m-2 mt-2 text-start">
                  <h5>Ordered by: {order.userName}</h5>
                  <span>Email: {order.email}</span>
                  <br />
                  <span>Price: {order.price} BDT</span>
                  <br />
                  <span>Delivery status: {order.status}</span>
                </div>

                <div className="position-absolute bottom-0 end-0 me-2 mb-2">
                  <button
                    onClick={() => handleApprovebtn(order._id)}
                    className={
                      order.status === "Shipped"
                        ? "btn btn-primary me-2 disabled"
                        : " btn me-2 btn-primary"
                    }
                  >
                    Ship
                  </button>
                  <button
                    onClick={() => handleCancelbtn(order._id)}
                    className="btn me-2 btn-primary"
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAllOrders;
