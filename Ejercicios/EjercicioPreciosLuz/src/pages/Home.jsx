import CardHoras from "../components/CardHoras";
import useDataApi from "../hooks/useDataApi";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Home = () => {
  const { data } = useDataApi(
    "https://api.preciodelaluz.org/v1/prices/all?zone=PCB"
  );

  if (!data) {
    return <div>Loading...</div>;
  }


  const dataArray = Object.values(data);
  const dataArray2 = Object.values(data);

  const sortedData = dataArray.sort((a, b) => a.price - b.price);

  const mostExpensive = sortedData.slice().sort((a, b) => b.price - a.price).slice(0, 6);
  const lessExpensive = sortedData.slice(0, 6);

  const precioMedio = dataArray.reduce((a, b) => a + b.price, 0) / dataArray.length;


  const miData = {
    labels: dataArray2.map((hora) => hora.hour),
    datasets: [
      {
        label: "precio \u20ac/MWh",
        data: dataArray2.map((hora) => hora.price),
        tension: 0.5,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointRadius: 5,
        pointBorderColor: "rgba(255, 99, 132)",
        pointBackgroundColor: "rgba(255, 99, 132)",
        fill: true,
      },
      {
        label: "Precio medio",
        data: dataArray.map(() => precioMedio),
        borderColor: "rgb(0, 255, 127)",
        backgroundColor: "rgb(152, 251, 152)",
        pointBackgroundColor: "rgb(0, 255, 127)",
        pointRadius: 5,
        tension: 0.5,
        fill: true,
      },
    ],
  };

  const misoptions = {
    scales: {
      y: {
        min: 0,
        ticks: { color: "rgb(255, 255, 255)" },
      },
      x: {
        ticks: { color: "rgb(255, 255, 255)" },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "rgb(255, 255, 255)",
        },
      },
    },
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10 bg-slate-600 text-white">

      <h1 className="text-5xl font-bold mt-10">Precio de la luz día: {dataArray2[0].date}</h1>

      <h2 className="text-4xl font-bold">Horas más baratas</h2>
      <div className="flex gap-4 justify-center">
        {lessExpensive.map((hora, i) => (
          <CardHoras key={i} hora={hora} />
        ))}
      </div>

      <h2 className="text-4xl font-bold">Horas más caras</h2>
      <div className="flex gap-4 justify-center">
        {mostExpensive.map((hora, i) => (
          <CardHoras key={i} hora={hora} />
        ))}
      </div>

      <h2 className="text-4xl font-bold">Todas las horas</h2>
      <div className="grid grid-cols-6 grid-rows-4 gap-4">
        {dataArray2.map((hora, i) => (
          <CardHoras key={i} hora={hora} />
        ))}
      </div>

      <h2 className="text-4xl font-bold">Gráfico horario</h2>
      <Line data={miData} options={misoptions} />
    </div>
  );
};

export default Home;
