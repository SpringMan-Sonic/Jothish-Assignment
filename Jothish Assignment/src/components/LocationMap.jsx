import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const LocationMap = ({ employees }) => {
  const navigate = useNavigate();

  const cityCoordinates = {
    'Bangalore': [12.9716, 77.5946],
    'Mumbai': [19.0760, 72.8777],
    'Pune': [18.5204, 73.8567],
    'Hyderabad': [17.3850, 78.4867],
    'Delhi': [28.7041, 77.1025],
    'Gurgaon': [28.4595, 77.0266],
    'Chennai': [13.0827, 80.2707],
    'Kolkata': [22.5726, 88.3639],
    'Noida': [28.5355, 77.3910],
    'Ahmedabad': [23.0225, 72.5714],
    'Jaipur': [26.9124, 75.7873],
    'Chandigarh': [30.7333, 76.7794],
    'Indore': [22.7196, 75.8577],
    'Kochi': [9.9312, 76.2673],
    'Coimbatore': [11.0168, 76.9558],
    'Lucknow': [26.8467, 80.9462],
    'Nagpur': [21.1458, 79.0882],
    'Visakhapatnam': [17.6869, 83.2185],
  };

  const cityData = useMemo(() => {
    const grouped = employees.reduce((acc, emp) => {
      const city = emp.city;
      if (city && cityCoordinates[city]) {
        if (!acc[city]) {
          acc[city] = {
            city,
            coordinates: cityCoordinates[city],
            employees: [],
            count: 0,
            totalSalary: 0
          };
        }
        acc[city].employees.push(emp);
        acc[city].count++;
        acc[city].totalSalary += parseFloat(emp.salary || 0);
      }
      return acc;
    }, {});

    return Object.values(grouped);
  }, [employees]);

  const totalCities = cityData.length;
  const totalEmployeesOnMap = cityData.reduce((sum, city) => sum + city.count, 0);
  const avgEmployeesPerCity = totalCities > 0 ? Math.round(totalEmployeesOnMap / totalCities) : 0;

  const createCustomIcon = (count) => {
    const size = Math.min(20 + count * 3, 50);
    return L.divIcon({
      className: 'custom-marker',
      html: `<div style="
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: ${Math.max(10, size / 3)}px;
      ">${count}</div>`,
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2],
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-6 mb-6 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Employee Location Map
              </h1>
              <p className="text-white/80 text-sm">Geographic distribution of employees across Indian cities</p>
            </div>
            <button
              onClick={() => navigate('/employees')}
              className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to List
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-gradient-to-br from-pink-500/80 to-rose-500/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm font-semibold mb-1">Total Cities</p>
                <p className="text-4xl font-bold text-white">{totalCities}</p>
              </div>
              <div className="bg-white/20 p-4 rounded-xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/80 to-cyan-500/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm font-semibold mb-1">Employees Mapped</p>
                <p className="text-4xl font-bold text-white">{totalEmployeesOnMap}</p>
              </div>
              <div className="bg-white/20 p-4 rounded-xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/80 to-indigo-500/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm font-semibold mb-1">Avg. Per City</p>
                <p className="text-4xl font-bold text-white">{avgEmployeesPerCity}</p>
              </div>
              <div className="bg-white/20 p-4 rounded-xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 animate-fadeIn">
          <h2 className="text-2xl font-bold text-white mb-6">Interactive Map - India</h2>
          
          {cityData.length > 0 ? (
            <div className="bg-white rounded-2xl overflow-hidden" style={{ height: '600px' }}>
              <MapContainer
                center={[20.5937, 78.9629]} // Center of India
                zoom={5}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {cityData.map((city, index) => (
                  <Marker
                    key={index}
                    position={city.coordinates}
                    icon={createCustomIcon(city.count)}
                  >
                    <Popup>
                      <div className="p-2">
                        <h3 className="font-bold text-lg mb-2 text-purple-600">{city.city}</h3>
                        <div className="space-y-1 text-sm">
                          <p><strong>Employees:</strong> {city.count}</p>
                          <p><strong>Avg. Salary:</strong> ₹{(city.totalSalary / city.count).toFixed(1)} LPA</p>
                          <div className="mt-2 pt-2 border-t">
                            <p className="font-semibold mb-1">Employees:</p>
                            {city.employees.slice(0, 5).map(emp => (
                              <div key={emp.id} className="text-xs text-gray-600">
                                • {emp.name} - {emp.designation}
                              </div>
                            ))}
                            {city.employees.length > 5 && (
                              <p className="text-xs text-gray-500 mt-1">
                                +{city.employees.length - 5} more...
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          ) : (
            <div className="text-center py-16 bg-white/5 rounded-2xl">
              <svg className="w-24 h-24 text-white/60 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <p className="text-white text-xl">No location data available</p>
            </div>
          )}
        </div>

        {/* City List */}
        {cityData.length > 0 && (
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 mt-6">
            <h2 className="text-2xl font-bold text-white mb-6">City Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cityData
                .sort((a, b) => b.count - a.count)
                .map((city, index) => (
                  <div 
                    key={index}
                    className="bg-white/10 rounded-xl p-5 border border-white/10 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                          {city.count}
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-lg">{city.city}</h3>
                          <p className="text-white/70 text-sm">{city.count} {city.count === 1 ? 'employee' : 'employees'}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <p className="text-white/80 text-sm mb-1">Average Salary</p>
                      <p className="text-white font-bold text-xl">
                        ₹{(city.totalSalary / city.count).toFixed(1)} LPA
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationMap;