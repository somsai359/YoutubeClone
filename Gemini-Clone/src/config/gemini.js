
// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
    GoogleGenAI,
  } from '@google/genai';
  
  async function main() {
    const ai = new GoogleGenAI({
      apiKey: 'AIzaSyAjHq0224BPlsbWVze_jzFENH247TQr4_I',
    });
    const config = {
      responseMimeType: 'text/plain',
    };
    const model = 'gemini-2.5-pro-preview-05-06';
    const contents = [
      {
        role: 'user',
        parts: [
          {
            text: `hLoo`,
          },
        ],
      },
    ];
  
    const response = await ai.models.generateContentStream({
      model,
      config,
      contents,
    });
    for await (const chunk of response) {
      console.log(chunk.text);
    }
  }
  
  export default main();
  