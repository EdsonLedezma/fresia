// /src/components/Estadisticas.jsx
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { db } from '../Auth/Conect'; // Corrected import path

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Estadisticas = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Número de Autopartes',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "analisis"));
      const rawData = querySnapshot.docs.map(doc => doc.data());

      const groupedData = rawData.reduce((acc, current) => {
        acc[current.Marca] = (acc[current.Marca] || 0) + 1;
        return acc;
      }, {});

      const labels = Object.keys(groupedData);
      const values = Object.values(groupedData);

      setData({
        labels,
        datasets: [
          {
            label: 'Número de Autopartes',
            data: values,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      });
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Estadísticas autopartes analizadas por marca</h2>
      <Bar 
        data={data} 
        options={{ 
          responsive: true, 
          plugins: { 
            legend: { position: 'top' }, 
            title: { display: true, text: 'Número de Autopartes por Marca' } 
          } 
        }} 
      />
    </div>
  );
};

export default Estadisticas;
