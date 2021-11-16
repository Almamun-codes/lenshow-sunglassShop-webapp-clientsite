import React from "react";

const Affiliates = () => {
  return (
    <div className="mt-3">
      <div className="top-bg pt-3 pb-2">
        <h1 className="text-center  pb-3">Our Affiliates</h1>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-4">
              <div class="card">
                <img
                  src="https://gumlet.assettype.com/nationalherald%2F2020-05%2F18c6db8b-e68a-49bf-adf5-5ceeb75dbfed%2FKarl_Marx.jpeg?rect=0%2C0%2C278%2C181&format=auto"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">karl Marx</h5>
                  <p class="card-text">
                    Karl Marx (1818-1883) was a philosopher, author, social
                    theorist, and economist. He is famous for his theories about
                    capitalism and communism.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div class="card">
                <img
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-944769320-1-1523468581.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Mark Zuckerberg</h5>
                  <p class="card-text">
                    Mark Elliot Zuckerberg (/ˈzʌkərbɜːrɡ/; bornMay 14, 1984) is
                    an American media magnate, internet entrepreneur, and
                    philanthropist.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div class="card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRThhHYunA3brauYV4-vX0aV9XVfznflCOC_A&usqp=CAU"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Steve Jobs</h5>
                  <p class="card-text">
                    Steve Jobs was a charismatic pioneer of the personal
                    computer era. With Steve Wozniak, Jobs founded Apple Inc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliates;
