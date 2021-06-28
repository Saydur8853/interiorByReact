import React from "react";
import "./Instagram.css"

const Instagram = () => {
  const [header] = React.useState({
    subHeader: "@Instagram"
  });

  const [state] = React.useState([
    {
      'id': '1',
      'img' : 'https://preview.colorlib.com/theme/interior2/img/works/x1.png.pagespeed.ic.joMCYtdVbG.webp',
    },

    {
      'id': '2',
      'img' : 'https://preview.colorlib.com/theme/interior2/img/works/x2.png.pagespeed.ic.czTKcHHcnl.webp',
    },

    {
      'id': '3',
      'img' : 'https://preview.colorlib.com/theme/interior2/img/works/x3.png.pagespeed.ic.FIWrUHiVy7.webp',
    },

  ]);
  
  return (
    <div className=" row insta">
        <div className="">
      <div className="row col-xl-12">
          <div className="section_title text-center mb-70">
          <h3>{header.subHeader}</h3>
        </div>
        </div>
        
       {state.map((Instagram) => (
      <div className="" key={Instagram.id}>
        <div className="container">
            <div className="column insta__img">
              <img src= {Instagram.img} alt="work image here" />
            </div>
            </div>
      </div>
      ))}
    </div>
    </div>
  );
};

export default Instagram;
