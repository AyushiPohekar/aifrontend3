import React, { useEffect, useState } from "react";
import "./Aimodels.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Col, InputNumber, Row, Slider, Space } from "antd";

const Aimodels = () => {
  const location = useLocation();

  const [details, setDetails] = useState({});
  const [image, setImage] = useState("");
  const [prompt, setPrompt] = useState("");
  const [seed, setSeed] = useState();
  const [negative_prompt, setnegative_prompt] = useState("");
  const [scheduler, setScheduler] = useState("");
  const [num_inference_steps, setnum_inference_steps] = useState(1);

  const [guidance_scale, setguidance_scale] = useState(1);

  const getdata = async () => {
    try {
      const res = await axios.get(
        `https://www.segmind.com/_next/data/yJgtaEtIfBEDG2_1phHT1/models/${location.state.elemert.slug}.json?route=${location.state.elemert.slug}`
      );
      setDetails(res.data.pageProps);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getdata();
  }, [location.state]);
  console.log(details);
  useEffect(() => {
    updateStateIfPropertyExists("model.default_image_output", setImage);
    updateStateIfPropertyExists(
      "model.parameters.prompt.displayValue",
      setPrompt
    );
    updateStateIfPropertyExists("model.parameters.seed.displayValue", setSeed);
    updateStateIfPropertyExists(
      "model.parameters.negative_prompt.displayValue",
      setnegative_prompt
    );
    updateStateIfPropertyExists(
      "model.parameters.guidance_scale.displayValue",
      setguidance_scale
    );
    updateStateIfPropertyExists(
      "model.parameters.scheduler.displayValue",
      setScheduler
    );
    updateStateIfPropertyExists(
      "model.parameters.num_inference_steps.displayValue",
      setnum_inference_steps
    );
  }, [details]);

  const updateStateIfPropertyExists = (propertyPath, setter) => {
    const properties = propertyPath.split(".");
    let value = details;

    for (const prop of properties) {
      if (value && value[prop] !== undefined) {
        value = value[prop];
      } else {
        return;
      }
    }

    setter(value);
  };

  const [advanced, setAdvancedtrue] = useState(false);
  let data = {
    prompt,
    negative_prompt,
    scheduler,
    num_inference_steps,
    guidance_scale,
    seed,
    img_width: 1024,
    img_height: 1024,
    base64: false,
    samples: 1,
  };
  const fetchData = async () => {
    let url;
    const api_key = "SG_cdb02db099cb8b32";
    if (details?.model?.type == "textToImage") {
      url = `http://localhost:8000/wrapper/textToImage?name=${details?.model?.slug}`;
    }
 console.log(data)
    
    try {
      const response = await axios.post(
        url,
        data,
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "prompt":
        setPrompt(value);
        break;
      case "seed":
        setSeed(value);
        break;
      case "negative_prompt":
        setnegative_prompt(value);
        break;
      case "scheduler":
        setScheduler(value);
        break;
      case "num_inference_steps":
        setnum_inference_steps(value);
        break;
      case "guidance_scale":
        setguidance_scale(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="ComponentWrapper">
      <div className="left">
        <div className="promtdiv">
          <h3>Prompt</h3>
          <textarea
            name="prompt"
            className="prompttextarea"
            rows={5}
            placeholder="Enter prompt here"
            value={prompt}
            onChange={handleInputChange}
            // onChange={handleChange}
          ></textarea>
          <h3 className="Advanced">
            Advanced
            {!advanced ? (
              <MdKeyboardArrowDown
                onClick={() => setAdvancedtrue(true)}
                className="arrow"
              />
            ) : (
              <MdKeyboardArrowUp
                onClick={() => setAdvancedtrue(false)}
                className="arrow"
              />
            )}
          </h3>

          {advanced && (
            <>
              <div className="innerdiv">
                <h3>Seed</h3>
                <input
                  onChange={handleInputChange}
                  type="number"
                  value={seed}
                  name="seed"
                  className="promptinput"
                />
              </div>
              <div className="checkboxdiv">
                <input type="checkbox" />
                <span>Randomize seed</span>
              </div>

              <div className="innerdiv">
                <h3>Negative Prompt</h3>
                <input
                  onChange={handleInputChange}
                  type="text"
                  value={negative_prompt}
                  name="negative_prompt"
                  className="promptinput"
                />
              </div>
              <div className="innerdiv">
                <h3>Scheduler</h3>
                <select
                  onChange={handleInputChange}
                  value={scheduler}
                  name="scheduler"
                  className="promptinput"
                >
                  <option value="DDIM">DDIM</option>
                  <option value="DPM Multi">DPM Multi</option>
                  <option value="DPM Single">DPM Single</option>
                  <option value="Euler a">Euler a</option>
                  <option value="DPM2 a Karras">DPM2 a Karras</option>
                  <option value="DDM2 Karas">DDM2 Karas</option>
                  <option value="LMS">LMS</option>
                </select>
              </div>
              <div className="innerdiv">
                <h3>Steps</h3>
                <Row>
                  <Col span={12}>
                    <Slider
                      min={1}
                      max={20}
                      onChange={(value) =>
                        handleInputChange({
                          target: { name: "num_inference_steps", value },
                        })
                      }
                      value={
                        typeof num_inference_steps === "number"
                          ? num_inference_steps
                          : 1
                      }
                    />
                  </Col>
                  <Col span={4}>
                    <InputNumber
                      min={1}
                      max={20}
                      style={{ margin: "0 16px" }}
                      value={
                        typeof num_inference_steps === "number"
                          ? num_inference_steps
                          : 1
                      }
                      name="num_inference_steps"
                      onChange={handleInputChange}
                    />
                  </Col>
                </Row>
              </div>
              <div className="innerdiv">
                <h3>Guidance Scale</h3>
                <Row>
                  <Col span={12}>
                    <Slider
                      min={1}
                      max={20}
                      onChange={(value) =>
                        handleInputChange({
                          target: { name: "guidance_scale", value },
                        })
                      }
                      value={
                        typeof guidance_scale === "number"
                          ? guidance_scale
                          : 1
                      }
                    />
                  </Col>
                  <Col span={4}>
                    <InputNumber
                      min={1}
                      max={20}
                      style={{ margin: "0 16px" }}
                      name="guidance_scale"
                      value={
                        typeof guidance_scale === "number"
                          ? guidance_scale
                          : 1
                      }
                      onChange={handleInputChange}
                    />
                  </Col>
                </Row>
              </div>
            </>
          )}
          <button onClick={() => fetchData()} className="genratebtn">
            Generate
          </button>
        </div>
      </div>
      <div className="right">
        <img src={image} />
      </div>
    </div>
  );
};

export default Aimodels;
