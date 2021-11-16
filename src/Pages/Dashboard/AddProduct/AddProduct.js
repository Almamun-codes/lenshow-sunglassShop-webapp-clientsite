import React, { useRef } from "react";

const AddProduct = () => {
  const nameref = useRef();
  const FrametypeRef = useRef();
  const imgref = useRef();
  const priceref = useRef();
  const descriptionref = useRef();
  const hadleAddService = (e) => {
    const product = {
      name: nameref.current.value,
      FrameType: FrametypeRef.current.value,
      img: imgref.current.value,
      price: priceref.current.value,
      description: descriptionref.current.value,
    };

    fetch("https://mighty-fjord-00429.herokuapp.com/add-a-product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("product added successfully");
          e.target.reset();
        }
      });

    e.preventDefault();
  };
  return (
    <div className="text-center m-5">
      <div className="container bg-light rounded shadow my-4">
        <form className="row py-4" onSubmit={hadleAddService}>
          <h1 className=" ">Add a product!</h1>
          <div className="col-6">
            <label className="text-start">product Name</label>
            <br />
            <input ref={nameref} type="text" name="name" className="w-75" />
            <br />
          </div>
          <div className="col-6">
            <label className="text-start  ">FrameType</label>
            <br />
            <input ref={FrametypeRef} type="text" className="w-75" />
          </div>
          <div className="col-6">
            <br />
            <label className="text-start  ">Image-Url</label>
            <br />
            <input ref={imgref} type="text" className="w-75" />
          </div>
          <div className="col-6">
            <br />
            <label className="text-start  ">Price</label>
            <br />
            <input ref={priceref} type="number" className="w-75" />
          </div>
          <br />
          <br />
          <div className="col-12">
            <br />
            <label className="text-start  ">Description</label>
            <br />
            <textarea className="w-75" rows="5" ref={descriptionref}></textarea>
          </div>

          <div className="text-center">
            <button className="btn btn-success text-center" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
