import React, { useState } from "react";
import "./Aimodels.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Aimodels = () => {
  const location = useLocation();
 console.log(location.state)
  const [image, setImage] = useState(location.state.element.default_image_output);
  const [advanced, setAdvancedtrue] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [seed, setSeed] = useState();
  const [negativeprompt, setnegativePrompt] = useState("");
  const [scheduler, setScheduler] = useState();
  const [Steps, setSteps] = useState();
  const [guidanceScale, setGuidanceScale] = useState();

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  const fetchData = async () => {
    const api_key = "SG_cdb02db099cb8b32";
    const url = location.state.element.title;

    try {
      const response = await axios.post(
        url,
       location.state.element.description,
        {
          headers: {
            "x-api-key": api_key,
            "Content-Type": "application/json",
          },
          responseType: "arraybuffer",
        }
      );

      const imageBlob = new Blob([response.data]);
      const imageDataUrl = URL.createObjectURL(imageBlob);
  
      setImage(imageDataUrl);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  return (
    <div className="ComponentWrapper">
      <div className="left">
        <div className="promtdiv">
          <h3>Prompt</h3>
          <textarea
            rows={3}
            placeholder="Enter prompt here"
            value={prompt}
            onChange={handleChange}
          ></textarea>
          <h4 onClick={() => setAdvancedtrue(!advanced)}>Advanced</h4>

          {advanced && (
            <>
              <div className="innerdiv">
                <label>Seed</label>
                <input type="number" value={seed} name="seed"/>
              </div>
              <input type="checkbox" />
              <sppan>Randomize seed</sppan>
              <div  className="innerdiv">
                <label>Negative Prompt</label>
                <input type="text" value={negativeprompt} name="negativeprompt"/>
              </div>
              <div  className="innerdiv">
                <label>Scheduler</label>
                <select value={scheduler} name="scheduler">
                <option value={"DDIM"}>DDIM</option>
                <option value="DPM Multi">DPM Multi</option>
                <option value="DPM Single">DPM Single</option>
                <option value="Euler a">Euler a</option>
                <option value="DPM2 a Karras">DPM2 a Karras</option>
                <option value="DDM2 Karas">DDM2 Karas</option>
                <option value="LMS">LMS</option>
              
                </select>
              </div>
              <div  className="innerdiv">
                <label>Steps</label>
                <input
                  type="range"
                  id="slider"
                  min="0"
                  max="100"
                  step="1"
                  value="50"
                />
               
              </div>
              <div  className="innerdiv">
                <label>Steps</label>
                <input
                  type="range"
                  id="slider"
                  min="0"
                  max="100"
                  step="1"
                  value="50"
                />
       
              </div>
            
            </>
          )}
            <button onClick={fetchData}>Generate</button>
        </div>
      </div>
      <div className="right">
        <img src={image} />
      </div>
    </div>
  );
};

export default Aimodels;
