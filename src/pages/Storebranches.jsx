import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Header from '../Components/Header';
import L from 'leaflet';
import Footer from '../Components/Footer';

// Branch data
const branches = [
  { id: 1, name: 'סניף תל אביב', lat: 32.0853, lng: 34.7818 },
  { id: 2, name: 'סניף ירושלים', lat: 31.7683, lng: 35.2137 },
  { id: 3, name: 'סניף חיפה', lat: 32.7940, lng: 34.9896 },
  { id: 4, name: 'סניף אילת', lat: 29.5581, lng: 34.9482 },
  { id: 5, name: 'סניף פתח תקווה', lat: 32.0871, lng: 34.8878 },
];

const FlyToLocation = ({ lat, lng }) => {
  const map = useMap();
  map.flyTo([lat, lng], 13);
  return null;
};

const StoreBranches = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSearch = () => {
    const branch = branches.find(b => b.name.includes(searchTerm));
    if (branch) {
      setSelectedLocation(branch);
    }
  };

  return (
    <div className="flex flex-col bg-gradient-to-r from-blue-200 to-blue-300 min-h-screen">
      <Header title="Store Branches" />
      <div className="mt-6 flex justify-center p-4 bg-blue-200 shadow-lg">
        <input
          type="text"
          placeholder="הזן שם סניף"
          className="border p-2 rounded w-full md:w-1/3 text-black"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-300 hover:bg-blue-400 text-black p-2 rounded ml-2 transition-colors duration-300"
        >
          חפש 
        </button>
      </div>
      <div className="flex flex-col md:flex-row flex-1">
        <div className="md:w-3/4 p-4 overflow-y-auto">
          <div className="bg-white shadow-md rounded-lg">
            <MapContainer
              center={[32.0853, 34.7818]}
              zoom={8}
              className="h-[300px] w-full md:h-[500px] md:w-[900px] mx-auto z-0"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              {branches.map(branch => (
                <Marker
                  key={branch.id}
                  position={[branch.lat, branch.lng]}
                  icon={L.icon({
                    iconUrl: '../images/markerImage.png',
                    iconSize: [30, 50],
                    iconAnchor: [15, 50],
                  })}
                >
                  <Popup>{branch.name}</Popup>
                </Marker>
              ))}
              {selectedLocation && (
                <FlyToLocation lat={selectedLocation.lat} lng={selectedLocation.lng} />
              )}
            </MapContainer>
          </div>
        </div>
        <div className="md:w-1/4 bg-blue-100 shadow-md p-4 overflow-y-auto transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">רשימת סניפים</h1>
          <ul>
            {branches.map(branch => (
              <li
                key={branch.id}
                className="mb-4 p-3 rounded-md bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white shadow-lg cursor-pointer transition-transform transform hover:-translate-y-1 hover:scale-105"
                onClick={() => setSelectedLocation(branch)}
              >
                <div className="text-lg font-semibold">{branch.name}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StoreBranches;
