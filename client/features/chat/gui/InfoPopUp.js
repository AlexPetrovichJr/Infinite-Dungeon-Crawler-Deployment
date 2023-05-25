import React from 'react';
import Popup from 'reactjs-popup';

const InfoPopUp = () => (
  <Popup style={{display: "none"}}trigger={<div className="guiButton"> INFO </div>} contentStyle={{
    backgroundColor: "black",
    borderRadius: "5px",
    padding: "15px",
    fontSize: "1.4rem",
    border: "solid #dadada 5px",
    maxHeight: "400px",
    maxWidth: "800px",
    overflowY: "auto"
   }}
   position="top">
    <div className="popUpContainer">
        <h2>HOW TO PLAY:</h2>
        <br></br>
        <ul>
          <li><h3>EXAMPLE:</h3></li>
            <p><i>
              You are in a dark cave, you can hear a fleshy mass  approaching, it does not sound friendly. The scent of death fills the air.

              <p>{"> "}What do you do?</p>
          </i></p>

            <p><u>A GOOD WAY TO RESPOND:</u></p>

            <p><i>
             {"> "}I take out my sword and ready to defend myself.
            </i></p>

            <p>OR</p>

            <p><i>
             {"> "}I light my torch.
            </i></p>

            <p><u>WHEN SPEAKING TO SOMEONE (OR SOMETHING):</u></p>

            <p>ADD QUOTES TO DIALOGUE:</p>

            <p><i>
             {"> "}I say "who goes there?"
            </i></p>

            <p>OR</p>

            <p><i>
             {"> "}I yell menacingly at the approaching mass.
            </i></p>

        </ul>
    </div>
  </Popup>
);

export default InfoPopUp
