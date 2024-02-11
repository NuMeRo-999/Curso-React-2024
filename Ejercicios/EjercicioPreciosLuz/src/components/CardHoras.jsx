import { Link } from "react-router-dom";

const CardHoras = ({hora}) => {
  return (
    <div>
      <Link
        className={`block max-w-sm p-6 border rounded-lg shadow ${hora['is-under-avg'] ? 'bg-green-500 border-green-600 hover:bg-green-400' : 'bg-red-500 border-red-600 hover:bg-red-400'}`}
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
          Hora: {hora.hour}
        </h5>
        <p className="font-normal text-gray-700 dark:text-white">
          Precio: {`${hora.price} ${hora.units}`}
        </p>
      </Link>
    </div>
  );
};

export default CardHoras;
