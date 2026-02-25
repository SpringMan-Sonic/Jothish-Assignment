# 🇮🇳 Employee Dashboard - ReactJS Application

A modern, feature-rich employee management dashboard built with React, featuring beautiful UI, data visualization, camera integration, and interactive maps. Fully localized for India with Indian cities, names, and salaries in LPA (Lakhs Per Annum).

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

##  Features

###  Authentication
- Secure login page with credential validation
- Demo credentials: `testuser` / `Test123`
- API integration with fallback to demo data
- Protected routes with automatic redirection

###  Employee Management
- **Employee List**: Grid view with 20 Indian employees
- **Search Functionality**: Real-time search across name, email, and designation
- **Employee Details**: Comprehensive information display
- **Statistics Dashboard**: Live metrics (Total employees, Cities, Average salary)

### Photo Capture
- Live camera integration using MediaDevices API
- Real-time video preview
- Photo capture with Canvas API
- Download captured photos
- Retake option

### Data Visualization
- **Salary Bar Chart**: 
  - Interactive Recharts visualization
  - Top 10 highest-paid employees
  - Color-coded bars with custom tooltips
  - Statistics cards (Highest, Average, Lowest)
  
- **Location Map**:
  - Interactive Leaflet map centered on India
  - Custom markers for 13+ Indian cities
  - Popup information with employee details
  - City-wise statistics

###  Modern UI/UX
- **7 Unique Gradient Backgrounds**: Each page has its own color scheme
- **Glassmorphism Design**: Backdrop blur effects throughout
- **Smooth Animations**: Fade-ins, hover effects, transitions
- **Fully Responsive**: Mobile, tablet, and desktop optimized
- **Clean Design**: Minimal and professional interface

### 🇮🇳 Indian Localization
- **20 Indian Employees**: Realistic names (Rajesh Kumar, Priya Sharma, etc.)
- **13 Cities**: Bangalore, Mumbai, Pune, Hyderabad, Delhi, Chennai, and more
- **Salaries in LPA**: Displayed as "₹18.5 LPA" format
- **Indian Addresses**: Complete with localities and pin codes
- **Salary Range**: ₹12.5 to ₹32.0 LPA

---



### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. **Clone or extract the project**
   ```bash
   cd employee-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

5. **Login with demo credentials**
   - Username: `testuser`
   - Password: `Test123`

---

##  Project Structure

```
JOTHISH ASSIGNMENT/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── components/             # React components
│   │   ├── Login.jsx          # Login page
│   │   ├── EmployeeList.jsx   # Employee grid view
│   │   ├── EmployeeDetails.jsx # Individual employee view
│   │   ├── PhotoCapture.jsx   # Camera interface
│   │   ├── PhotoResult.jsx    # Photo preview/download
│   │   ├── SalaryChart.jsx    # Bar chart visualization
│   │   └── LocationMap.jsx    # Interactive map
│   ├── App.jsx                # Main app with routing
│   ├── index.jsx              # Entry point
│   └── index.css              # Global styles + Tailwind
├── package.json               # Dependencies
├── vite.config.js             # Vite configuration
├── index.html                 # Root HTML (Vite)
└── README.md                  # This file
```

---

##  Technology Stack

### Core Technologies
- **React 18.2.0** - UI library with hooks
- **React Router DOM 6.20.0** - Client-side routing
- **Vite 5.0.0** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework

### Data Visualization
- **Recharts 2.10.3** - Interactive charts
- **Leaflet 1.9.4** - Interactive maps
- **React-Leaflet 4.2.1** - React bindings for Leaflet

### HTTP & APIs
- **Axios 1.6.2** - HTTP client for API requests
- **MediaDevices API** - Camera access
- **Canvas API** - Photo capture

---

##  Application Flow

### User Journey

```
1. Login Page (/)
   ↓ Enter: testuser / Test123
   
2. Employee List (/employees)
   - View 20 employees
   - Search by name/email/designation
   - See statistics (Total, Cities, Avg. Salary)
   ↓ Click any employee card
   
3. Employee Details (/employees/:id)
   - View complete information
   - All details with icons
   ↓ Click "Capture Photo"
   
4. Photo Capture (/photo-capture/:id)
   - Grant camera permission
   - See live video feed
   ↓ Click "Capture Photo"
   
5. Photo Result (/photo-result)
   - View captured photo
   - Download or Retake
   
Alternative Flows:
- From Employee List → Salary Chart (/salary-chart)
- From Employee List → Location Map (/location-map)
```

---

##  Sample Employee Data

The application includes 20 Indian employees:

| Name | City | Designation | Salary (LPA) |
|------|------|-------------|--------------|
| Rajesh Kumar | Bangalore | Senior Software Engineer | ₹18.5 |
| Priya Sharma | Mumbai | Product Manager | ₹25.0 |
| Amit Patel | Pune | Data Scientist | ₹22.0 |
| Sneha Reddy | Hyderabad | UI/UX Designer | ₹15.0 |
| Vikram Singh | Gurgaon | DevOps Engineer | ₹20.0 |
| ... | ... | ... | ... |
| Ishita Shah | Mumbai | Tech Lead | ₹32.0 |

**Statistics**:
- Total Employees: 20
- Cities: 13 (Bangalore, Mumbai, Pune, Hyderabad, Delhi, Chennai, Kolkata, Gurgaon, Noida, Ahmedabad, Jaipur, Chandigarh, Indore)
- Salary Range: ₹12.5 - ₹32.0 LPA
- Average Salary: ₹18.2 LPA

---



##  Testing the Application

### Test Checklist

- [ ] Login with testuser/Test123
- [ ] View employee list (20 cards)
- [ ] Search for "Rajesh" - filters results
- [ ] Statistics show: 20 employees, 13 cities, ₹18.2 LPA avg
- [ ] Click employee → Details page shows
- [ ] Salary displays as "₹X LPA"
- [ ] Click "Capture Photo" → Camera opens
- [ ] Grant camera permission → Live feed appears
- [ ] Capture photo → Photo Result page shows
- [ ] Download button → Saves photo
- [ ] Click "Salary Chart" → Chart displays top 10
- [ ] Hover over bars → Tooltip shows "₹X LPA"
- [ ] Click "Location Map" → Map centered on India
- [ ] Click marker → Popup shows city info
- [ ] Logout → Returns to login page



---



##  Assignment Completion

1. **Login Page** 
2. **Employee List** 
3. **Employee Details** 
4. **Photo Result** 

### Bonus Features

5. **Photo Capture** 
6. **Salary Bar Chart** 
7. **Location Map** 

### Extra Enhancements

- Search functionality
- Statistics dashboard
- Download photo capability
- Retake photo option
- Indian localization (cities, names, LPA)
- 20 employees (vs required minimum)
- Beautiful gradient UI
- Glassmorphism design
- Smooth animations
- Comprehensive documentation

---

**Made with using React, Tailwind CSS, and modern web technologies**


---

*Last Updated: February 2026*
*Version: 1.0.0*