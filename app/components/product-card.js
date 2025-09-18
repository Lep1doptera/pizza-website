export default function ProductCard({ name, description, cost, sizes}) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-64 p-4">
            <h2>{name}</h2>
            <p>{description}</p>
            if (sizes) {
                <p>{sizes}</p>
                <p>{cost}</p>
            } else {
                <p>{cost}</p>
            };
            
        </div>
    )
}