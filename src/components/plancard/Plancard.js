import React from "react";

const Plancard = () => {
  const [state] = React.useState([
    {
        'id': '1',
        'heading': "Planning",
        'MidNum': "01",
        'msg1': "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet",
        'img' : 'https://s3-us-west-2.amazonaws.com/prosky/talkingtalent/articles/image_prevs/000/000/157/original/planning.jpg?1563973788'
      },
      {
        'id': '2',
        'heading': "Architecture",
        'MidNum': "02",
        'msg1': "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of making it over 2000 years old.",
        'img' : 'https://images.adsttc.com/media/images/54f7/d4c0/e58e/ce08/b400/025d/medium_jpg/Portada_Casa_A___08023_Arquitectos_-02-ESQ_NOCHE.jpg?1425527985'
      },
      {
        'id': '3',
       'heading': "3D Design",
        'MidNum': "03",
        'msg1': "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
        'img' : 'https://5.imimg.com/data5/LQ/BS/MZ/ANDROID-81832725/1556828896005-jpg-500x500.jpg'
    
    },
  ]);
  return (
    <div className="Plancard ">
        {state.map((Plancard) => (
        <div className=" scard" key={Plancard.id}>
            <div className="cardimage"><img src={Plancard.img} alt="image here" />
            
            </div>
            
            <div className="cardcontant">

            <div className="stlCol"><h2>{Plancard.heading}</h2></div>

            
            
            <div className="msg">
              <p>{Plancard.msg1}</p></div>
            
            <div className="MidNum"><h3>{Plancard.MidNum}</h3></div>


            </div>

            
            </div>
            ))}
            </div>

  );
};

export default Plancard;



