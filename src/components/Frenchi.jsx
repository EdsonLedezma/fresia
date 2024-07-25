import React, { useState } from 'react';
import './Frenchi.css';

const Frenchi = () => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

  
    const handleSubmit = async (event) => {
    event.preventDefault();
   /*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "Contesta de un modo tecnico en el ambito automotriz",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run() {
    const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "que aceite lleva el march 1.6?"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Para determinar el aceite adecuado para un Nissan March 1.6, necesito más información. El tipo de aceite recomendado depende del año de fabricación, el motor específico (código del motor) y las condiciones de uso. \n\nPor favor, proporciona la siguiente información:\n\n* **Año del vehículo:**\n* **Código del motor:** (Se encuentra en la placa de identificación del motor)\n\nUna vez que tenga esta información, puedo brindarte una recomendación precisa sobre el tipo de aceite recomendado para tu Nissan March 1.6, incluyendo la viscosidad (por ejemplo, 5W-30) y las especificaciones del fabricante (por ejemplo, API SN, ILSAC GF-5).\n\nTen en cuenta que la información proporcionada en el manual del propietario siempre es la más precisa. Asegúrate de consultar el manual para obtener la información más actualizada sobre el tipo de aceite recomendado para tu vehículo.\n"},
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    console.log(result.response.text());
  }
  
  run();

  // apikey AIzaSyDtvSKbMz8IiNiu6rMN5wBX0xk_RRfn4C8
  */
    try {
     
    } catch (error) {
      console.error('Error fetching the AI response:', error);
      setResponse('Hubo un error al obtener la respuesta.');
    }
  };

  const handlePrompt = (prompt) => {
    setInput(prompt);
  };

  return (
    <div className="frenchi-container">
      <h1 className="title">Pregúntale a Frenchi</h1>
      <p className="description">
        Puedes resolver tus dudas acerca de tu vehículo. Pídeme tips de manejo, buenas prácticas para el cuidado de tu vehículo o lo que prefieras.
      </p>
      <div className="prompts">
        <button className="prompt-button" onClick={() => handlePrompt('¿Qué hacer si me quedo sin batería?')}>¿Qué hacer si me quedo sin batería?</button>
        <button className="prompt-button" onClick={() => handlePrompt('¿Cómo cambiar el aceite de mi auto?')}>¿Cómo cambiar el aceite de mi auto?</button>
        <button className="prompt-button" onClick={() => handlePrompt('Tips para ahorrar gasolina')}>Tips para ahorrar gasolina</button>
      </div>
      <form className="question-form" onSubmit={handleSubmit}>
        <textarea
          className="input-textarea"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu pregunta aquí..."
          rows="6"
        />
        <button className="submit-button" type="submit">Enviar</button>
      </form>
      {response && (
        <div className="response-container">
          <h2 className="response-title">Respuesta:</h2>
          <p className="response-text">{response}</p>
        </div>
      )}
    </div>
  );
};

export default Frenchi;
