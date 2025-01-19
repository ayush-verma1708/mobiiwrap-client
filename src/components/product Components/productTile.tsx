import { useNavigate } from 'react-router-dom';

export function ProductTile({ id, name, price, image }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      onClick={() => navigate(`/products/${id}`)}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-indigo-600 text-xl font-bold">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}
