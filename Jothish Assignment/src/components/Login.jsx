import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setIsAuthenticated, setEmployees }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    
    if (username === 'testuser' && password === 'Test123') {
      setLoading(true);
      try {
        const response = await axios.post(
          'https://backend.jotish.in/backend_dev/gettabledata.php',
          {
            username: 'test',
            password: '123456'
          },
          {
            headers: {
              'Content-Type': 'application/json',
            }
          }
        );
        
        console.log('API Response:', response.data);
        
        if (response.data && response.data.data) {
          setEmployees(response.data.data);
          setIsAuthenticated(true);
          navigate('/employees');
        } else {
          console.warn('No data from API, using Indian demo data');
          setEmployees(generateIndianDemoData());
          setIsAuthenticated(true);
          navigate('/employees');
        }
      } catch (err) {
        console.error('API Error:', err);
        console.log('Using Indian demo data due to API error');
        setEmployees(generateIndianDemoData());
        setIsAuthenticated(true);
        navigate('/employees');
      } finally {
        setLoading(false);
      }
    } else {
      setError('Invalid credentials. Use username: testuser, password: Test123');
    }
  };

  const generateIndianDemoData = () => {
    return [
      {
        id: '1',
        name: 'Rajesh Kumar',
        email: 'rajesh.kumar@techcorp.in',
        designation: 'Senior Software Engineer',
        salary: '18.5',
        city: 'Bangalore',
        country: 'India',
        address: 'Koramangala, Bangalore, Karnataka 560034'
      },
      {
        id: '2',
        name: 'Priya Sharma',
        email: 'priya.sharma@techcorp.in',
        designation: 'Product Manager',
        salary: '25.0',
        city: 'Mumbai',
        country: 'India',
        address: 'Bandra West, Mumbai, Maharashtra 400050'
      },
      {
        id: '3',
        name: 'Amit Patel',
        email: 'amit.patel@techcorp.in',
        designation: 'Data Scientist',
        salary: '22.0',
        city: 'Pune',
        country: 'India',
        address: 'Hinjewadi, Pune, Maharashtra 411057'
      },
      {
        id: '4',
        name: 'Sneha Reddy',
        email: 'sneha.reddy@techcorp.in',
        designation: 'UI/UX Designer',
        salary: '15.0',
        city: 'Hyderabad',
        country: 'India',
        address: 'HITEC City, Hyderabad, Telangana 500081'
      },
      {
        id: '5',
        name: 'Vikram Singh',
        email: 'vikram.singh@techcorp.in',
        designation: 'DevOps Engineer',
        salary: '20.0',
        city: 'Gurgaon',
        country: 'India',
        address: 'Cyber City, Gurgaon, Haryana 122002'
      },
      {
        id: '6',
        name: 'Anjali Verma',
        email: 'anjali.verma@techcorp.in',
        designation: 'Marketing Manager',
        salary: '16.5',
        city: 'Delhi',
        country: 'India',
        address: 'Connaught Place, New Delhi 110001'
      },
      {
        id: '7',
        name: 'Arjun Nair',
        email: 'arjun.nair@techcorp.in',
        designation: 'Full Stack Developer',
        salary: '17.0',
        city: 'Chennai',
        country: 'India',
        address: 'OMR, Chennai, Tamil Nadu 600096'
      },
      {
        id: '8',
        name: 'Kavya Iyer',
        email: 'kavya.iyer@techcorp.in',
        designation: 'HR Manager',
        salary: '14.0',
        city: 'Kolkata',
        country: 'India',
        address: 'Salt Lake, Kolkata, West Bengal 700091'
      },
      {
        id: '9',
        name: 'Rohan Deshmukh',
        email: 'rohan.d@techcorp.in',
        designation: 'Backend Developer',
        salary: '16.0',
        city: 'Noida',
        country: 'India',
        address: 'Sector 62, Noida, Uttar Pradesh 201309'
      },
      {
        id: '10',
        name: 'Meera Krishnan',
        email: 'meera.k@techcorp.in',
        designation: 'QA Engineer',
        salary: '12.5',
        city: 'Ahmedabad',
        country: 'India',
        address: 'SG Highway, Ahmedabad, Gujarat 380015'
      },
      {
        id: '11',
        name: 'Karthik Menon',
        email: 'karthik.menon@techcorp.in',
        designation: 'Solutions Architect',
        salary: '28.0',
        city: 'Bangalore',
        country: 'India',
        address: 'Whitefield, Bangalore, Karnataka 560066'
      },
      {
        id: '12',
        name: 'Divya Chopra',
        email: 'divya.chopra@techcorp.in',
        designation: 'Business Analyst',
        salary: '15.5',
        city: 'Jaipur',
        country: 'India',
        address: 'Malviya Nagar, Jaipur, Rajasthan 302017'
      },
      {
        id: '13',
        name: 'Siddharth Joshi',
        email: 'sid.joshi@techcorp.in',
        designation: 'Mobile App Developer',
        salary: '16.8',
        city: 'Pune',
        country: 'India',
        address: 'Kharadi, Pune, Maharashtra 411014'
      },
      {
        id: '14',
        name: 'Pooja Gupta',
        email: 'pooja.gupta@techcorp.in',
        designation: 'Scrum Master',
        salary: '18.0',
        city: 'Hyderabad',
        country: 'India',
        address: 'Gachibowli, Hyderabad, Telangana 500032'
      },
      {
        id: '15',
        name: 'Aditya Rao',
        email: 'aditya.rao@techcorp.in',
        designation: 'Cloud Engineer',
        salary: '21.0',
        city: 'Mumbai',
        country: 'India',
        address: 'Powai, Mumbai, Maharashtra 400076'
      },
      {
        id: '16',
        name: 'Neha Kapoor',
        email: 'neha.kapoor@techcorp.in',
        designation: 'Content Strategist',
        salary: '13.5',
        city: 'Chandigarh',
        country: 'India',
        address: 'Sector 17, Chandigarh 160017'
      },
      {
        id: '17',
        name: 'Varun Malhotra',
        email: 'varun.m@techcorp.in',
        designation: 'Security Engineer',
        salary: '19.5',
        city: 'Gurgaon',
        country: 'India',
        address: 'DLF Phase 2, Gurgaon, Haryana 122022'
      },
      {
        id: '18',
        name: 'Ritu Bansal',
        email: 'ritu.bansal@techcorp.in',
        designation: 'Data Analyst',
        salary: '14.5',
        city: 'Indore',
        country: 'India',
        address: 'Vijay Nagar, Indore, Madhya Pradesh 452010'
      },
      {
        id: '19',
        name: 'Harsh Agarwal',
        email: 'harsh.agarwal@techcorp.in',
        designation: 'Frontend Developer',
        salary: '15.8',
        city: 'Bangalore',
        country: 'India',
        address: 'HSR Layout, Bangalore, Karnataka 560102'
      },
      {
        id: '20',
        name: 'Ishita Shah',
        email: 'ishita.shah@techcorp.in',
        designation: 'Tech Lead',
        salary: '32.0',
        city: 'Mumbai',
        country: 'India',
        address: 'Andheri East, Mumbai, Maharashtra 400069'
      }
    ];
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-4">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      
      <div className="relative z-10 w-full max-w-md animate-fadeIn">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-white mb-3">Welcome Back</h1>
            <p className="text-white/90 text-base">Sign in to access Employee Dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-white/90 text-sm font-semibold mb-3">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-5 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 text-base"
                placeholder="Enter username"
                required
              />
            </div>

            <div>
              <label className="block text-white/90 text-sm font-semibold mb-3">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 text-base"
                placeholder="Enter password"
                required
              />
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-400/50 text-white px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-white/90 to-white/70 text-purple-600 font-bold py-4 px-4 rounded-xl hover:from-white hover:to-white/90 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg text-lg"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </span>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-white/70 text-sm">
              Demo credentials: <span className="text-white font-bold">testuser</span> / <span className="text-white font-bold">Test123</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;