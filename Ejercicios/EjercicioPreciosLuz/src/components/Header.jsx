import { jsPDF } from "jspdf";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import useDataApi from "../hooks/useDataApi";

const Header = () => {

  const { data } = useDataApi(
    "https://api.preciodelaluz.org/v1/prices/all?zone=PCB"
  );

  if (!data) {
    return <div>Loading...</div>;
  }
  const dataArray = Object.values(data);
  const sortedData = dataArray.sort((a, b) => a.price - b.price);
  const lessExpensive = sortedData.slice(0, 6);

  const handleEmailSend = () => {
    const doc = new jsPDF();
    doc.text("Seis horas más baratas:", 10, 10);
    lessExpensive.forEach((hora, index) => {
      doc.text(`${index + 1}. Hora: ${hora.hour}, Precio: ${hora.price} ${hora.units}`, 10, 20 + index * 10);
    });
  
    // Guardar el documento PDF
    doc.save("seis_horas_mas_baratas.pdf");
  
    // Enviar correo electrónico con el PDF adjunto
    const templateParams = {
      to_email: "pedrovp003@gmail.com",
      subject: "Seis horas más baratas",
      message: "Adjunto encontrarás un documento PDF con las seis horas más baratas.",
      attachment: doc.output("blob"),
    };
  
    emailjs
      .send("service_v7c1zgh", "template_qg6jntf", templateParams, "bjfA3a6LNmR7M3m7R")
      .then((response) => {
        console.log("Correo enviado con éxito!", response);
      })
      .catch((error) => {
        console.error("Error al enviar el correo:", error);
      }); 
  }

  return (
    <div className="flex justify-between items-center bg-gray-800 p-5 text-white  font-bold">
      <div className="flex justify-center items-center gap-5">
        <img src="src/assets/precioluz.png" alt="preciosluz" className="size-10"/>
        <h1 className="text-2xl">Precios Luz React</h1>
      </div>
      <nav className="flex gap-5 items-center">
        <h2>Pedro Vílchez Peña</h2>
        <button className="border border-gray-800 rounded-md py-2 px-4 bg-purple-900 hover:bg-purple-800 hover:border-gray-400" onClick={handleEmailSend}>Enviar correo con PDF</button>
        <Link to='/login' className="border border-gray-800 rounded-md py-2 px-4 bg-purple-900 hover:bg-purple-800 hover:border-gray-400">Cerrar Sesión</Link>
      </nav>
    </div>
  )
}

export default Header