import React from "react";
import LinearProgressWithLabel from "./LinearProgressWithLabel"

const ProgressBar = () => {

  const [state] = React.useState([
    {
      'id': '1',
      'heading': "Professional and creative mind",
      'msg1': "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet",
      'img' : 'https://preview.colorlib.com/theme/interior2/img/creative_mind/x1.png.pagespeed.ic.ATsa1swhwi.webp',
    }

  ]);
  
  return (
    <div className="progressbar">
        
       {state.map((ProgressBar) => (
      <div className="cmn" key={ProgressBar.id}>
        
        <div className="row">
          <div className="col-6">
            <div className="creative_img">
              <img src= {ProgressBar.img} alt="image here" />
            </div>
          </div>
          <div className="col-6">
            <div className="data">
              <h1>{ProgressBar.heading}</h1>
              <div className="data1">
              {ProgressBar.msg1}
              </div>

              <div>
              <LinearProgressWithLabel/>
              </div>
              <div className="info__contacts">
                <button>About Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default ProgressBar;
