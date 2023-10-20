import React from "react";

export default function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Vijayawada",
    },
    {
      id: 2,
      title: "Chennai",
    },
    {
      id: 3,
      title: "Bangalore",
    },
    {
      id: 4,
      title: "Hyderabad",
    },

    {
      id: 5,
      title: "Visakhapatnam",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6 ">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white  font-bold drop-shadow-2xl shadow-black text-lg py-2 px-4 transition ease-out hover:scale-125"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}
