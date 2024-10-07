import React from 'react';

const Car = ({ car }) => {
  const {
    model,
    image,
    price,
    make,
    engine,
    fuelType,
    mileage,
    owners,
    features,
  } = car;

  return (
    <div className="w-full max-w-sm bg-gray-50 border border-gray-300 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 m-4">

      <img className="p-6 rounded-t-lg" src={image} alt={`${make} ${model}`} />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900">
          {make} {model} 
        </h5>
        <p className="text-sm text-gray-600 mt-2">
          <strong>Engine:</strong> {engine}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Fuel Type:</strong> {fuelType}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Mileage:</strong> {mileage} miles
        </p>
        <p className="text-sm text-gray-600">
          <strong>Previous Owners:</strong> {owners}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Features:</strong> {features.join(', ')}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-gray-900">
            ${price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Car;
