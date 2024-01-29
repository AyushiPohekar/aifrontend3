export const data = [
  {
    image:
      "https://segmind-sd-models.s3.amazonaws.com/outputs/segmind-vega.png",
    name: "LegaciesMindOne",
    url: "http://localhost:8000/wrapper/LegaciesMindOne",
    data: {
      prompt:
        "cinematic photo detailed closeup portraid of a Beautiful cyberpunk woman, robotic parts, cables, lights, text; , high quality photography, 3 point lighting, flash with softbox, 4k, Canon EOS R3, hdr, smooth, sharp focus, high resolution, award winning photo, 80mm, f2.8, bokeh . 35mm photograph, film, bokeh, professional, 4k, highly detailed, high quality photography, 3 point lighting, flash with softbox, 4k, Canon EOS R3, hdr, smooth, sharp focus, high resolution, award winning photo, 80mm, f2.8, bokeh",
      negative_prompt: "(worst quality, low quality)",
      samples: 1,
      scheduler: "UniPC",
      num_inference_steps: 25,
      guidance_scale: 9,
      seed: 1232788698,
      img_width: 1024,
      img_height: 1024,
      base64: false,
    },
  },
  {
    image: "https://segmind-sd-models.s3.amazonaws.com/outputs/ssd-vega-rt.png",
    name: "LegaciesMindVT",
    url: "http://localhost:8000/wrapper/LegaciesMindVT",
    data: {
      prompt:
        "backlight, wilderness woman hunting in jungle hiding behind leaves, face paintings closeup face portrait, detailed eyes, nature documentary, dry skin, fuzzy skin, lens flare",
      num_inference_steps: 4,
      seed: 758143278,
      img_width: 1024,
      img_height: 1024,
      base64: false,
    },
  },
  {
    image:
      "https://www.segmind.com/_next/image?url=https%3A%2F%2Fwww.segmind.com%2Freliberate1.jpeg&w=1080&q=75",
    name: "stable-diffusion",
    url: "http://localhost:8000/wrapper/stable-diffusion",
    data: {
      prompt:
        "a photo of catherine, solo, in frame, smiling, summer floral outfit, dark theme, extremely detailed eyes, detailed symmetric realistic face extremely detailed natural skin texture, peach fuzz, messy hair, masterpiece, absurdres, artillery fire in the background, award winning",
      negative_prompt:
        "airbrushed,3d, render, painting, anime, manga, illustration, (deformed, distorted, disfigured:1.3), poorly drawn, bad anatomy, wrong anatomy, extra limb, missing limb, floating limbs, (mutated hands and fingers:1.4), disconnected limbs, mutation, mutated, ugly, disgusting, blurry, amputation,bige yes, teeth,nose piercing,(((extra arms)))cartoon,young,child ",
      scheduler: "dpmpp_sde_ancestral",
      num_inference_steps: 25,
      guidance_scale: 9,
      samples: 1,
      seed: 1045216760,
      img_width: 512,
      img_height: 768,
      base64: false,
    },
  },
  {
    image:
      "https://www.segmind.com/_next/image?url=https%3A%2F%2Fsegmind-sd-models.s3.amazonaws.com%2Foutputs%2Fsamaritan_xl.png&w=2048&q=75",
    name: "Robust-3D-XL",
    url: "http://localhost:8000/wrapper/Robust-3D-XL",
    data: {
      prompt:
        "a photo of catherine, solo, in frame, smiling, summer floral outfit, dark theme, extremely detailed eyes, detailed symmetric realistic face extremely detailed natural skin texture, peach fuzz, messy hair, masterpiece, absurdres, artillery fire in the background, award winning",
      negative_prompt:
        "airbrushed,3d, render, painting, anime, manga, illustration, (deformed, distorted, disfigured:1.3), poorly drawn, bad anatomy, wrong anatomy, extra limb, missing limb, floating limbs, (mutated hands and fingers:1.4), disconnected limbs, mutation, mutated, ugly, disgusting, blurry, amputation,bige yes, teeth,nose piercing,(((extra arms)))cartoon,young,child ",
      scheduler: "dpmpp_sde_ancestral",
      num_inference_steps: 25,
      guidance_scale: 9,
      samples: 1,
      seed: 1045216760,
      img_width: 512,
      img_height: 768,
      base64: false,
    },
  },
  {
    image:
      "https://www.segmind.com/_next/image?url=https%3A%2F%2Fwww.segmind.com%2Frealisticvision1.jpeg&w=1080&q=75",
    name: "reality",
    url: "http://localhost:8000/wrapper/reality",
    data: {
      prompt:
        "((selfie)) photo of an american girl and guy, smiling, (yosemite:1.3), mountains, wearing a backpack, red top, hiking jacket, rocks, river, wood, analog style (look at viewer:1.2) (skin texture), close up, cinematic light, ((night sky:1.2)), (milkiway:1.4), sidelighting, Fujiflim XT3, DSLR, 50mm, (long windblown hair)",
      negative_prompt:
        '"(deformed, distorted, disfigured:1.3), poorly drawn, bad anatomy, wrong anatomy, extra limb, missing limb, floating limbs, (mutated hands and fingers:1.4), disconnected limbs, mutation, mutated, ugly, disgusting, blurry, amputation, render, 3d, 2d, sketch, painting, digital art, drawing, disfigured, ((nsfw)), ((breasts))',
      scheduler: "dpmpp_2m",
      num_inference_steps: 25,
      guidance_scale: 6,
      samples: 1,
      seed: 4082622942,
      img_width: 512,
      img_height: 768,
      base64: false,
    },
  },
];
