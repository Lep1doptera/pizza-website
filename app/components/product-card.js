export default function ProductCard({ name, description, cost, sizes, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-md p-6">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h2 className="font-bold">{name}</h2>
      <p>{description}</p>
      {sizes ? (
        <div>
          {sizes.map((option, index) => (
            <p key={index}>
              {option.size} ${option.cost.toFixed(2)}
            </p>
          ))}
        </div>
      ) : (
        <div>
          <p>${cost.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}
