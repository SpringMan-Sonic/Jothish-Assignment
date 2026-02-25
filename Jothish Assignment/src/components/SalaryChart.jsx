import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const SalaryChart = ({ employees }) => {
  const navigate = useNavigate();

  const topEmployees = [...employees]
    .sort((a, b) => parseFloat(b.salary || 0) - parseFloat(a.salary || 0))
    .slice(0, 10)
    .map(emp => ({
      name: emp.name,
      salary: parseFloat(emp.salary || 0),
      id: emp.id
    }));

  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', 
    '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2',
    '#F8B739', '#52B788'
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-gray-200">
          <p className="font-bold text-gray-800 mb-1">{payload[0].payload.name}</p>
          <p className="text-green-600 font-semibold">
            ₹{payload[0].value.toFixed(1)} LPA
          </p>
        </div>
      );
    }
    return null;
  };

  const highestSalary = topEmployees.length > 0 ? topEmployees[0].salary : 0;
  const lowestSalary = topEmployees.length > 0 ? topEmployees[topEmployees.length - 1].salary : 0;
  const avgSalary = topEmployees.length > 0 
    ? topEmployees.reduce((sum, e) => sum + e.salary, 0) / topEmployees.length 
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-6 mb-6 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Top 10 Salaries
              </h1>
              <p className="text-white/80 text-sm">Highest paid employees in the organization</p>
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

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-gradient-to-br from-green-500/80 to-teal-500/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm font-semibold mb-1">Highest Salary</p>
                <p className="text-3xl font-bold text-white">
                  ₹{highestSalary.toFixed(1)} LPA
                </p>
              </div>
              <div className="bg-white/20 p-3 rounded-xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/80 to-indigo-500/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm font-semibold mb-1">Average (Top 10)</p>
                <p className="text-3xl font-bold text-white">
                  ₹{avgSalary.toFixed(1)} LPA
                </p>
              </div>
              <div className="bg-white/20 p-3 rounded-xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500/80 to-red-500/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm font-semibold mb-1">Lowest (Top 10)</p>
                <p className="text-3xl font-bold text-white">
                  ₹{lowestSalary.toFixed(1)} LPA
                </p>
              </div>
              <div className="bg-white/20 p-3 rounded-xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 animate-fadeIn">
          <h2 className="text-2xl font-bold text-white mb-6">Salary Comparison (LPA)</h2>
          
          {topEmployees.length > 0 ? (
            <div className="bg-white/95 rounded-2xl p-6">
              <ResponsiveContainer width="100%" height={500}>
                <BarChart data={topEmployees} margin={{ top: 20, right: 30, left: 20, bottom: 100 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis 
                    dataKey="name" 
                    angle={-45} 
                    textAnchor="end" 
                    height={150}
                    tick={{ fill: '#333', fontSize: 12 }}
                  />
                  <YAxis 
                    tick={{ fill: '#333' }}
                    tickFormatter={(value) => `₹${value}L`}
                    label={{ value: 'Salary (LPA)', angle: -90, position: 'insideLeft', fill: '#333' }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend 
                    wrapperStyle={{ paddingTop: '20px' }}
                    iconType="circle"
                  />
                  <Bar 
                    dataKey="salary" 
                    name="Annual Salary (LPA)"
                    radius={[10, 10, 0, 0]}
                  >
                    {topEmployees.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="text-center py-16">
              <svg className="w-24 h-24 text-white/60 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <p className="text-white text-xl">No employee data available</p>
            </div>
          )}
        </div>

        {/* Employee List */}
        {topEmployees.length > 0 && (
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 mt-6">
            <h2 className="text-2xl font-bold text-white mb-6">Detailed Rankings</h2>
            <div className="space-y-3">
              {topEmployees.map((emp, index) => (
                <div 
                  key={emp.id}
                  className="bg-white/10 rounded-xl p-4 flex items-center justify-between hover:bg-white/20 transition-all duration-300 cursor-pointer"
                  onClick={() => navigate(`/employees/${emp.id}`)}
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                      style={{ backgroundColor: colors[index % colors.length] }}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">{emp.name}</h3>
                      <p className="text-white/70 text-sm">Rank #{index + 1}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold text-xl">₹{emp.salary.toFixed(1)} LPA</p>
                    <p className="text-white/70 text-sm">Annual Salary</p>
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

export default SalaryChart;