// ------------------------------------------------------
// Dependencies
// ------------------------------------------------------
import React from "react";
// ------------------------------------------------------
// Styles
// ------------------------------------------------------
import "../../../AppStyles/listStyle.css";
// ------------------------------------------------------
// UI Components
// ------------------------------------------------------
import PlaceDetailComponent from "./placeDetailComponent";

const place = [
  {
    name: "cool place",
  },
  {
    name: "best weekend",
  },
  {
    name: "nice UI",
  },
  {
    name: "cool place",
  },
  {
    name: "best weekend",
  },
  {
    name: "nice UI",
  },
  {
    name: "cool place",
  },
  {
    name: "best weekend",
  },
  {
    name: "nice UI",
  },
  {
    name: "cool place",
  },
  {
    name: "best weekend",
  },
  {
    name: "nice UI",
  },
  {
    name: "cool place",
  },
  {
    name: "best weekend",
  },
  {
    name: "nice UI",
  },
  {
    name: "cool place",
  },
  {
    name: "best weekend",
  },
  {
    name: "nice UI",
  },
  {
    name: "cool place",
  },
  {
    name: "best weekend",
  },
  {
    name: "nice UI",
  },
  {
    name: "cool place",
  },
  {
    name: "best weekend",
  },
  {
    name: "nice UI",
  },
  {
    name: "cool place",
  },
  {
    name: "best weekend",
  },
  {
    name: "nice UI",
  },
  {
    name: "cool place",
  },
  {
    name: "best weekend",
  },
  {
    name: "nice UI",
  },
  {
    name: "cool place",
  },
  {
    name: "best weekend",
  },
  {
    name: "nice UI",
  },
  {
    name: "cool place",
  },
  {
    name: "best weekend",
  },
  {
    name: "nice UI",
  },
];

const ListComponent = () => {
  return (
    <>
      <div className="p-5">
        <h1 className="text-xl heading ">Restaurants, Hotels & Attractions</h1>
        <p className="para-text">
          here are the list of all hotel, restaurants and attractions
        </p>
      </div>
      <form className="p-5">
        <div className="grid gap-6 mb-6 grid-cols-2">
          <div>
            <label
              htmlFor="type"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Type
            </label>
            <select
              id="type"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option value="">Select Type</option>
              <option value="restaurants">Restaurants</option>
              <option value="hotels">Hotels</option>
              <option value="attractions">Attractions</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="rating"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Rating
            </label>
            <select
              id="rating"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option value="">Select Rating</option>
              <option value="all">All</option>
              <option value="above3">Above 3.0</option>
              <option value="above4">Above 4.0</option>
              <option value="above4.5">Above 4.5</option>
            </select>
          </div>
        </div>
      </form>
      <div className="grid grid-cols-1 overflow-y-auto max-h-[450px] scrollbar-hide p-5">
        {place.map((place, i) => (
          <div key={i}>
            <PlaceDetailComponent key={place.id} place={place} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ListComponent;
