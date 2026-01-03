import axios from "axios";

export const detectColorsAndSuggest = async (image) => {
  const res = await axios.post("http://localhost:5000/api/ai/detect", { image });
  return res.data;
};
