import "../../styles/LoadingSpinner.css";

const LoadingSpinner = () => {
  // Crear un array de 6 elementos para mostrar 6 skeleton cards
  const skeletonCards = Array(10).fill(null);

  return (
    <div className="loading-spinner">
      <div className="skeleton-cards">
        {skeletonCards.map((_, index) => (
          <div key={index} className="skeleton-card"></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSpinner;
