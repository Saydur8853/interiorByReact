import React from "react";
import "./works.css"

const About = () => {
  const [header] = React.useState({
    subHeader: "Our Works"
  });

  const [state] = React.useState([
    {
      'id': '1',
      'heading': "White Blocks House",
      'msg1': "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet",
      'img' : 'https://preview.colorlib.com/theme/interior2/img/works/x1.png.pagespeed.ic.joMCYtdVbG.webp',
      "right" : false
    },

    {
      'id': '2',
      'heading': "Art Gallery Design",
      'msg1': "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet",
      'img' : 'https://preview.colorlib.com/theme/interior2/img/works/x2.png.pagespeed.ic.czTKcHHcnl.webp',
      "right" : true
    },

    {
      'id': '3',
      'heading': "Art Gallery Design",
      'msg1': "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet",
      'img' : 'https://preview.colorlib.com/theme/interior2/img/works/x3.png.pagespeed.ic.FIWrUHiVy7.webp',
      "right" : false
    },

    {
      'id': '4',
      'heading': "Office Space",
      'msg1': "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet",
      'img' : 'https://preview.colorlib.com/theme/interior2/img/works/x4.png.pagespeed.ic.Kpzez6bngH.webp',
      "right" : true
    },

  ]);
  
  return (
    <div className="about">
      <div className="head">
          <h1 className="mainHeader">{header.subHeader}</h1>
        </div>
        
       {state.map((About) => (
      <div className="common" key={About.id}>
        
        <div className={About.right? "row flex-row-reverse" : "row flex-row"}>
          <div className="col-7">
            <div className="about__img">
              <img src= {About.img} alt="work image here" />
            </div>
          </div>
          <div className="col-5">
            <div className="about__info">
              <h1>{About.heading}</h1>
              <div className="about__info-p1">
              {About.msg1}
              </div>
              <div className="info__contacts">
                <button>Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default About;
