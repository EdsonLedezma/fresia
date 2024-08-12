// /src/components/Estadisticas.jsx
import React, { useEffect, useState } from 'react';
import { getDatabase, ref, get } from "firebase/database";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { db } from '../Auth/Conect'; // Corrected import path

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Estadisticas = () => {
  const [data, setData] = useState({
    labels: [], // Nombres de las variables
    datasets: [
      {
        label: 'Número de audios',
        data: [], // Valores de las variables
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase();
      const dataRef = ref(db, 'micData/1/Microfonos'); // Navegar por la jerarquía de datos
      const snapshot = await get(dataRef);
      
      if (snapshot.exists()) {
        const rawData = snapshot.val();

        const labels = []; // Para almacenar los nombres de las variables
        const values = []; // Para almacenar los valores de las variables

        // Suponiendo que rawData es un objeto con nombres de variables como claves
        Object.keys(rawData).forEach(key => {
          labels.push(key); // Nombre de la variable
          values.push(rawData[key]); // Valor de la variable
        });

        setData({
          labels,  // Asignamos los nombres de las variables como etiquetas
          datasets: [
            {
              label: 'Número de audios',
              data: values, // Asignamos los valores a los datos de la gráfica
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });
      } else {
        console.log("No data available");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Estadísticas audios captados por autoparte</h2>
      <Bar 
        data={data} 
        options={{ 
          responsive: true, 
          plugins: { 
            legend: { position: 'top' }, 
            title: { display: true, text: 'Número de audios por autoparte' } 
          } 
        }} 
      />
    </div>
  );
};

export default Estadisticas;
