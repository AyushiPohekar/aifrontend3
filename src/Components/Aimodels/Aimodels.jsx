import React, { useEffect, useState } from "react";
import "./Aimodels.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Aimodels = () => {
  const location = useLocation();

  const [details, setDetails] = useState({});
  const [image, setImage] = useState("");
  const [prompt, setPrompt] = useState("");
  const [seed, setSeed] = useState();
  const [negativeprompt, setnegativePrompt] = useState("");
  const [scheduler, setScheduler] = useState();
  const [Steps, setSteps] = useState();
  const [guidanceScale, setGuidanceScale] = useState();
  const [inputValues, setInputValues] = useState({
    prompt: "",
    seed: "",
    negativeprompt: "",
    scheduler: "",
    steps: "",
    guidanceScale: "",
  });
  const getdata = async () => {
    try {
      const res = await axios.get(
        ` `
      );
      setDetails(res.data.pageProps);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getdata();
  }, [location.state]);

  useEffect(() => {
    updateStateIfPropertyExists("model.default_image_output", setImage);
    updateStateIfPropertyExists(
      "model.parameters.prompt.displayValue",
      setPrompt
    );
    updateStateIfPropertyExists("model.parameters.seed.displayValue", setSeed);
    updateStateIfPropertyExists(
      "model.parameters.negative_prompt.displayValue",
      setnegativePrompt
    );
    updateStateIfPropertyExists(
      "model.parameters.guidance_scale.displayValue",
      setGuidanceScale
    );
  }, [details]);

  console.log(details);

  const updateStateIfPropertyExists = (propertyPath, setter) => {
    const properties = propertyPath.split(".");
    let value = details;

    for (const prop of properties) {
      if (value && value[prop] !== undefined) {
        value = value[prop];
      } else {
        return; // Property doesn't exist, exit early
      }
    }

    setter(value);
  };

  const [advanced, setAdvancedtrue] = useState(false);

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };
  console.log(details?.model?.type);
  const fetchData = async () => {
    let url;
    const api_key = "SG_cdb02db099cb8b32";
    if (details?.model?.type == "textToImage") {
      url = `http://localhost:8000/wrapper/textToImage?name=${details?.model?.slug}`;
    }

    try {
      const response = await axios.post(
        url,
        { prompt },
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
            className="prompttextarea"
            rows={5}
            placeholder="Enter prompt here"
            value={prompt}
            onChange={handleChange}
          ></textarea>
          <h4 className="Advanced">
            Advanced
            {!advanced ? (
              <MdKeyboardArrowDown onClick={() => setAdvancedtrue(true)} className="arrow"/>
            ) : (
              <MdKeyboardArrowUp onClick={() => setAdvancedtrue(false)} className="arrow"/>
            )}
          </h4>

          {advanced && (
            <>
              <div className="innerdiv">
                <label>Seed</label>
                <input type="number" value={seed} name="seed" />
              </div>
              <input type="checkbox" />
              <sppan>Randomize seed</sppan>
              <div className="innerdiv">
                <label>Negative Prompt</label>
                <input
                  type="text"
                  value={negativeprompt}
                  name="negativeprompt"
                />
              </div>
              <div className="innerdiv">
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
              <div className="innerdiv">
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
              <div className="innerdiv">
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
          <button onClick={() => fetchData()}>Generate</button>
        </div>
      </div>
      <div className="right">
        <img src={image} />
      </div>
    </div>
  );
};

export default Aimodels;
