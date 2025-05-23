// const ApiKey="AIzaSyDC-30mQ0GIVvymecL31HGmrtOqCCYPOW8"

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "Enter Gemini Api Key" });

async function runMain(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
  console.log(response.text);
  return response.text;
  
}


export default runMain;
