import React, { useState } from 'react';
import './Frenchi.css';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { apiKey } from '../Auth/Conect';
import { marked } from 'marked';

const Frenchi = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: 'Contesta con todo el conocimiento que tengas en el ambito automotriz, conviertete en mecanico',
    });

    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 8192,
      responseMimeType: 'text/plain',
    };

    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: 'user',
          parts: [{ text: 'que aceite lleva el march 1.6?' }],
        },
        {
          role: 'model',
          parts: [
            {
              text: 'Para determinar el aceite adecuado para un Nissan March 1.6, necesito más información. El tipo de aceite recomendado depende del año de fabricación, el motor específico (código del motor) y las condiciones de uso. \n\nPor favor, proporciona la siguiente información:\n\n* **Año del vehículo:**\n* **Código del motor:** (Se encuentra en la placa de identificación del motor)\n\nUna vez que tenga esta información, puedo brindarte una recomendación precisa sobre el tipo de aceite recomendado para tu Nissan March 1.6, incluyendo la viscosidad (por ejemplo, 5W-30) y las especificaciones del fabricante (por ejemplo, API SN, ILSAC GF-5).\n\nTen en cuenta que la información proporcionada en el manual del propietario siempre es la más precisa. Asegúrate de consultar el manual para obtener la información más actualizada sobre el tipo de aceite recomendado para tu vehículo.\n',
            },
          ],
        },
      ],
    });

    try {
      const result = await chatSession.sendMessage(input);
      const markdownResponse = result.response.text();
      const htmlResponse = marked(markdownResponse);
      setResponse(htmlResponse);
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
        <button className="prompt-button" onClick={() => handlePrompt('Cuales son los autos con mejor consumo de combustible en el mercado')}>Los autos mas ahorradores en gasolina</button>
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
          <div className="response-text" dangerouslySetInnerHTML={{ __html: response }} />
        </div>
      )}
    </div>
  );
};

export default Frenchi;
