import React from "react";
const Banner = () => {
  const [state] = React.useState({
    title: "Interior Design Solution for your Business"
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="header__content">
              <div className="header__section">
                
                <h1>{state.title}</h1>
                <div className="header__buttons">
                  <a href="x" className="banner-button">
                    View works
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
