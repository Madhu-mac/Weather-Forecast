import React from 'react';

function TopButtons() {
  const cities = [
    {
      id: 1,
      title: 'Mumbai'
    },
    {
      id: 2,
      title: 'Chennai'
    },
    {
      id: 3,
      title: 'Tokyo'
    },
    {
      id: 4,
      title: 'Sydney'
    },
    {
      id: 5,
      title: 'Paris'
    }
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button className="text-white text-lg font-medium" key={city.id}>
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
