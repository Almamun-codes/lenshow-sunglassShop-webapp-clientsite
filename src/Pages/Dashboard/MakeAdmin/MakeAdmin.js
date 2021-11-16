import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMakeAdmin = (e) => {
    e.preventDefault();

    console.log(email);
    if (email.length) {
      fetch(`https://mighty-fjord-00429.herokuapp.com/users/${email}`, {
        method: "put",
        headers: {
          "content-type": "Application/json",
        },
        body: JSON.stringify(),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            alert("Admin made successfully");
          }
        });
    } else {
      alert("please add an email");
    }
  };

  return (
    <div className="mt-4 m-5">
      <div className="shadow bg-light rounded d-flex flex-wrap p-3">
        <div className="p3">
          <h1 className="text-start">Make an admin</h1>
        </div>
        <input
          type="email"
          name="email"
          onBlur={handleEmailChange}
          className="w-75"
        />
        <input
          type="button"
          value="Make Admin"
          onClick={handleMakeAdmin}
          className="btn bg-navbar text-white ms-3"
        />
      </div>
    </div>
  );
};

export default MakeAdmin;
