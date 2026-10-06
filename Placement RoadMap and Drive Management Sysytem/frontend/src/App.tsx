// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
// // import Navbar from './components/Navbar';
// // import Home from './pages/Home';
// // import Login from './pages/Login';
// // import AdminPage from './pages/AdminPage';
// // import TechnicalSkills from './pages/skills/TechnicalSkills';
// // import NonTechnicalSkills from './pages/skills/NonTechnicalSkills';
// // import Practice from './pages/Practice';
// // import PlacementDrives from './pages/PlacementDrives';
// // import Profile from './pages/Profile';
// // import CppDetails from './pages/skills/cpp/CppDetails';
// // import PythonDetails from './pages/skills/python/PythonDetails';
// // import JavaDetails from './pages/skills/java/JavaDetails';
// // import DataStructuresDetails from './pages/skills/data-structures/DataStructuresDetails';
// // import AlgorithmsDetails from './pages/skills/algorithms/AlgorithmsDetails';
// // import FrontendDetails from './pages/skills/frontend/FrontendDetails';
// // import BackendDetails from './pages/skills/backend/BackendDetails';
// // import QuantitativeAptitudeDetails from './pages/skills/aptitude/QuantitativeAptitudeDetails';
// // import LogicalReasoningDetails from './pages/skills/aptitude/LogicalReasoningDetails';
// // import VerbalCommunicationDetails from './pages/skills/communication/VerbalCommunicationDetails';
// // import NonVerbalCommunicationDetails from './pages/skills/communication/NonVerbalCommunicationDetails';
// // import MockInterviews from './pages/MockInterviews';
// // import CodeEditor from './pages/CodeEditor';
// // import Quiz from './pages/Quiz';
// // import DSA from './pages/DSA';
// // import Aptitude from './pages/Aptitude';

// // function App() {
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/*" element={<ProtectedRoute><AppLayout /></ProtectedRoute>} />
// //         <Route path="/admin" element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
// //         <Route path="/placement-drives/:id" element={<ProtectedRoute><PlacementDrives /></ProtectedRoute>} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // const AppLayout = () => {
// //   return (
// //     <>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
// //         <Route path="/skills/technical" element={<ProtectedRoute><TechnicalSkills /></ProtectedRoute>} />
// //         <Route path="/skills/non-technical" element={<ProtectedRoute><NonTechnicalSkills /></ProtectedRoute>} />
// //         <Route path="/practice" element={<ProtectedRoute><Practice /></ProtectedRoute>} />
// //         <Route path="/practice/dsa" element={<ProtectedRoute><DSA /></ProtectedRoute>} />
// //         <Route path="/practice/aptitude" element={<ProtectedRoute><Aptitude /></ProtectedRoute>} />
// //         <Route path="/placement-drives" element={<ProtectedRoute><PlacementDrives /></ProtectedRoute>} />
// //         <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
// //         <Route path="/skills/technical/cpp" element={<ProtectedRoute><CppDetails /></ProtectedRoute>} />
// //         <Route path="/skills/technical/python" element={<ProtectedRoute><PythonDetails /></ProtectedRoute>} />
// //         <Route path="/skills/technical/java" element={<ProtectedRoute><JavaDetails /></ProtectedRoute>} />
// //         <Route path="/skills/technical/data-structures" element={<ProtectedRoute><DataStructuresDetails /></ProtectedRoute>} />
// //         <Route path="/skills/technical/algorithms" element={<ProtectedRoute><AlgorithmsDetails /></ProtectedRoute>} />
// //         <Route path="/skills/technical/frontend" element={<ProtectedRoute><FrontendDetails /></ProtectedRoute>} />
// //         <Route path="/skills/technical/backend" element={<ProtectedRoute><BackendDetails /></ProtectedRoute>} />
// //         <Route path="/skills/non-technical/quantitative-aptitude" element={<ProtectedRoute><QuantitativeAptitudeDetails /></ProtectedRoute>} />
// //         <Route path="/skills/non-technical/logical-reasoning" element={<ProtectedRoute><LogicalReasoningDetails /></ProtectedRoute>} />
// //         <Route path="/skills/non-technical/verbal-communication" element={<ProtectedRoute><VerbalCommunicationDetails /></ProtectedRoute>} />
// //         <Route path="/skills/non-technical/non-verbal-communication" element={<ProtectedRoute><NonVerbalCommunicationDetails /></ProtectedRoute>} />
// //         <Route path="/mock-interviews" element={<ProtectedRoute><MockInterviews /></ProtectedRoute>} />
// //         <Route path="/code-editor/:problemId" element={<ProtectedRoute><CodeEditor /></ProtectedRoute>} />
// //         <Route path="/quiz" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
// //         <Route path="/quiz/:skillType" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
// //       </Routes>
// //     </>
// //   );
// // };

// // const ProtectedRoute = ({ children }) => {
// //   const token = localStorage.getItem('supabase.auth.token');
// //   const location = useLocation();

// //   if (!token && location.pathname !== '/login') {
// //     return <Navigate to="/login" replace state={{ from: location }} />;
// //   }
// //   if (token && location.pathname === '/login') {
// //     return <Navigate to="/" replace />;
// //   }

// //   return children;
// // };

// // export default App;




// // import React, { useEffect, useState } from "react";
// // import {
// //   BrowserRouter as Router,
// //   Routes,
// //   Route,
// //   Navigate,
// //   useLocation,
// // } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// // import Home from "./pages/Home";
// // import Login from "./pages/Login";
// // import AdminPage from "./pages/AdminPage";
// // import TechnicalSkills from "./pages/skills/TechnicalSkills";
// // import NonTechnicalSkills from "./pages/skills/NonTechnicalSkills";
// // import Practice from "./pages/Practice";
// // import PlacementDrives from "./pages/PlacementDrives";
// // import Profile from "./pages/Profile";
// // import MockInterviews from "./pages/MockInterviews";
// // import CodeEditor from "./pages/CodeEditor";
// // import Quiz from "./pages/Quiz";
// // import DSA from "./pages/DSA";
// // import Aptitude from "./pages/Aptitude";

// // const App: React.FC = () => {
// //   return (
// //     <Router>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/login" element={<Login />} />
// //         <Route
// //           path="/admin"
// //           element={
// //             <AdminProtectedRoute>
// //               <AdminPage />
// //             </AdminProtectedRoute>
// //           }
// //         />
// //         <Route
// //           path="/*"
// //           element={
// //             <ProtectedRoute>
// //               <AppLayout />
// //             </ProtectedRoute>
// //           }
// //         />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // // Layout for authenticated routes
// // const AppLayout: React.FC = () => {
// //   return (
// //     <Routes>
// //       <Route path="/" element={<Home />} />
// //       <Route path="/skills/technical" element={<TechnicalSkills />} />
// //       <Route path="/skills/non-technical" element={<NonTechnicalSkills />} />
// //       <Route path="/practice" element={<Practice />} />
// //       <Route path="/practice/dsa" element={<DSA />} />
// //       <Route path="/practice/aptitude" element={<Aptitude />} />
// //       <Route path="/placement-drives" element={<PlacementDrives />} />
// //       <Route path="/profile" element={<Profile />} />
// //       <Route path="/mock-interviews" element={<MockInterviews />} />
// //       <Route path="/code-editor/:problemId" element={<CodeEditor />} />
// //       <Route path="/quiz" element={<Quiz />} />
// //     </Routes>
// //   );
// // };

// // // Type for children prop
// // type RouteProps = {
// //   children: React.ReactNode;
// // };

// // // Protected Route for normal users
// // const ProtectedRoute: React.FC<RouteProps> = ({ children }) => {
// //   const token = localStorage.getItem("token");
// //   const location = useLocation();

// //   if (!token && location.pathname !== "/login") {
// //     return <Navigate to="/login" replace state={{ from: location }} />;
// //   }

// //   if (token && location.pathname === "/login") {
// //     return <Navigate to="/" replace />;
// //   }

// //   return <>{children}</>;
// // };

// // // Admin Protected Route
// // const AdminProtectedRoute: React.FC<RouteProps> = ({ children }) => {
// //   const [isAdmin, setIsAdmin] = useState<boolean>(false);
// //   const location = useLocation();

// //   useEffect(() => {
// //     const token = localStorage.getItem("token");
// //     if (token) {
// //       try {
// //         const user = JSON.parse(atob(token.split(".")[1]));
// //         setIsAdmin(user.role === "admin");
// //       } catch (error) {
// //         setIsAdmin(false);
// //       }
// //     }
// //   }, []);

// //   if (!isAdmin) {
// //     return <Navigate to="/" replace state={{ from: location }} />;
// //   }

// //   return <>{children}</>;
// // };

// // export default App;

// // import React, { useEffect, useState } from "react";
// // import {
// //   BrowserRouter as Router,
// //   Routes,
// //   Route,
// //   Navigate,
// //   useLocation,
// // } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// // import Home from "./pages/Home";
// // import Login from "./pages/Login";
// // import AdminPage from "./pages/AdminPage";
// // import TechnicalSkills from "./pages/skills/TechnicalSkills";
// // import NonTechnicalSkills from "./pages/skills/NonTechnicalSkills";
// // import Practice from "./pages/Practice";
// // import PlacementDrives from "./pages/PlacementDrives";
// // import Profile from "./pages/Profile";
// // import MockInterviews from "./pages/MockInterviews";
// // import CodeEditor from "./pages/CodeEditor";
// // import Quiz from "./pages/Quiz";
// // import DSA from "./pages/DSA";
// // import Aptitude from "./pages/Aptitude";

// // const App: React.FC = () => {
// //   return (
// //     <Router>
// //       <Navbar />
// //       <Routes>
// //         {/* Login Page */}
// //         <Route path="/login" element={<Login />} />

// //         {/* Admin Protected Route */}
// //         <Route
// //           path="/admin"
// //           element={
// //             <AdminProtectedRoute>
// //               <AdminPage />
// //             </AdminProtectedRoute>
// //           }
// //         />

// //         {/* Protected Routes for authenticated users */}
// //         <Route
// //           path="/*"
// //           element={
// //             <ProtectedRoute>
// //               <AppLayout />
// //             </ProtectedRoute>
// //           }
// //         />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // // Layout for authenticated users
// // const AppLayout: React.FC = () => {
// //   return (
// //     <Routes>
// //       <Route path="/" element={<Home />} />
// //       <Route path="/skills/technical" element={<TechnicalSkills />} />
// //       <Route path="/skills/non-technical" element={<NonTechnicalSkills />} />
// //       <Route path="/practice" element={<Practice />} />
// //       <Route path="/practice/dsa" element={<DSA />} />
// //       <Route path="/practice/aptitude" element={<Aptitude />} />
// //       <Route path="/placement-drives" element={<PlacementDrives />} />
// //       <Route path="/profile" element={<Profile />} />
// //       <Route path="/mock-interviews" element={<MockInterviews />} />
// //       <Route path="/code-editor/:problemId" element={<CodeEditor />} />
// //       <Route path="/quiz" element={<Quiz />} />
// //     </Routes>
// //   );
// // };

// // // Type for children prop
// // type RouteProps = {
// //   children: React.ReactNode;
// // };

// // // ✅ Fixed Protected Route for authenticated users
// // const ProtectedRoute: React.FC<RouteProps> = ({ children }) => {
// //   const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
// //   const location = useLocation();

// //   useEffect(() => {
// //     const token = localStorage.getItem("token");
// //     setIsAuthenticated(!!token);
// //   }, []);

// //   if (isAuthenticated === null) return <div>Loading...</div>;

// //   if (!isAuthenticated && location.pathname !== "/login") {
// //     return <Navigate to="/login" replace state={{ from: location }} />;
// //   }

// //   return <>{children}</>;
// // };

// // // ✅ Fixed Admin Protected Route
// // const AdminProtectedRoute: React.FC<RouteProps> = ({ children }) => {
// //   const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
// //   const location = useLocation();

// //   useEffect(() => {
// //     const token = localStorage.getItem("token");
// //     if (token) {
// //       try {
// //         const user = JSON.parse(token); // Correctly parse JSON token
// //         setIsAdmin(user.role === "admin");
// //       } catch (error) {
// //         console.error("Invalid token format:", error);
// //         setIsAdmin(false);
// //       }
// //     } else {
// //       setIsAdmin(false);
// //     }
// //   }, []);

// //   if (isAdmin === null) return <div>Loading...</div>;

// //   if (!isAdmin) {
// //     return <Navigate to="/" replace state={{ from: location }} />;
// //   }

// //   return <>{children}</>;
// // };

// // export default App;

// // import React, { useEffect, useState } from "react";
// // import {
// //   BrowserRouter as Router,
// //   Routes,
// //   Route,
// //   Navigate,
// //   useLocation,
// // } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// // import Home from "./pages/Home";
// // import Login from "./pages/Login";
// // import AdminPage from "./pages/AdminPage";
// // import TechnicalSkills from "./pages/skills/TechnicalSkills";
// // import NonTechnicalSkills from "./pages/skills/NonTechnicalSkills";
// // import Practice from "./pages/Practice";
// // import PlacementDrives from "./pages/PlacementDrives";
// // import Profile from "./pages/Profile";
// // import MockInterviews from "./pages/MockInterviews";
// // import CodeEditor from "./pages/CodeEditor";
// // import Quiz from "./pages/Quiz";
// // import DSA from "./pages/DSA";
// // import Aptitude from "./pages/Aptitude";

// // const App: React.FC = () => {
// //   return (
// //     <Router>
// //       <Navbar />
// //       <Routes>
// //         {/* Login Page */}
// //         <Route path="/login" element={<Login />} />

// //         {/* Admin Page (No Protection) */}
// //         <Route path="/admin" element={<AdminPage />} />

// //         {/* Protected Routes for authenticated users */}
// //         <Route
// //           path="/*"
// //           element={
// //             <ProtectedRoute>
// //               <AppLayout />
// //             </ProtectedRoute>
// //           }
// //         />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // // Layout for authenticated users
// // const AppLayout: React.FC = () => {
// //   return (
// //     <Routes>
// //       <Route path="/" element={<Home />} />
// //       <Route path="/skills/technical" element={<TechnicalSkills />} />
// //       <Route path="/skills/non-technical" element={<NonTechnicalSkills />} />
// //       <Route path="/practice" element={<Practice />} />
// //       <Route path="/practice/dsa" element={<DSA />} />
// //       <Route path="/practice/aptitude" element={<Aptitude />} />
// //       <Route path="/placement-drives" element={<PlacementDrives />} />
// //       <Route path="/profile" element={<Profile />} />
// //       <Route path="/mock-interviews" element={<MockInterviews />} />
// //       <Route path="/code-editor/:problemId" element={<CodeEditor />} />
// //       <Route path="/quiz" element={<Quiz />} />
// //     </Routes>
// //   );
// // };

// // // Type for children prop
// // type RouteProps = {
// //   children: React.ReactNode;
// // };

// // // ✅ Protected Route for authenticated users
// // const ProtectedRoute: React.FC<RouteProps> = ({ children }) => {
// //   const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
// //   const location = useLocation();

// //   useEffect(() => {
// //     const token = localStorage.getItem("token");
// //     setIsAuthenticated(!!token);
// //   }, []);

// //   if (isAuthenticated === null) return <div>Loading...</div>;

// //   if (!isAuthenticated && location.pathname !== "/login") {
// //     return <Navigate to="/login" replace state={{ from: location }} />;
// //   }

// //   return <>{children}</>;
// // };

// // export default App;


// import React, { useEffect, useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   useLocation,
// } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import AdminPage from "./pages/AdminPage";
// import TechnicalSkills from "./pages/skills/TechnicalSkills";
// import NonTechnicalSkills from "./pages/skills/NonTechnicalSkills";
// import Practice from "./pages/Practice";
// import PlacementDrives from "./pages/PlacementDrives";
// import Profile from "./pages/Profile";
// import CppDetails from "./pages/skills/cpp/CppDetails";
// import PythonDetails from "./pages/skills/python/PythonDetails";
// import JavaDetails from "./pages/skills/java/JavaDetails";
// import DataStructuresDetails from "./pages/skills/data-structures/DataStructuresDetails";
// import AlgorithmsDetails from "./pages/skills/algorithms/AlgorithmsDetails";
// import FrontendDetails from "./pages/skills/frontend/FrontendDetails";
// import BackendDetails from "./pages/skills/backend/BackendDetails";
// import QuantitativeAptitudeDetails from "./pages/skills/aptitude/QuantitativeAptitudeDetails";
// import LogicalReasoningDetails from "./pages/skills/aptitude/LogicalReasoningDetails";
// import VerbalCommunicationDetails from "./pages/skills/communication/VerbalCommunicationDetails";
// import NonVerbalCommunicationDetails from "./pages/skills/communication/NonVerbalCommunicationDetails";
// import MockInterviews from "./pages/MockInterviews";
// import CodeEditor from "./pages/CodeEditor";
// import Quiz from "./pages/Quiz";
// import DSA from "./pages/DSA";
// import Aptitude from "./pages/Aptitude";

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/admin" element={<AdminPage />} />
//         <Route
//           path="/*"
//           element={
//             <ProtectedRoute>
//               <AppLayout />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// const AppLayout: React.FC = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/skills/technical" element={<TechnicalSkills />} />
//       <Route path="/skills/non-technical" element={<NonTechnicalSkills />} />
//       <Route path="/practice" element={<Practice />} />
//       <Route path="/practice/dsa" element={<DSA />} />
//       <Route path="/practice/aptitude" element={<Aptitude />} />
//       <Route path="/placement-drives" element={<PlacementDrives />} />
//       <Route path="/profile" element={<Profile />} />
//       <Route path="/skills/technical/cpp" element={<CppDetails />} />
//       <Route path="/skills/technical/python" element={<PythonDetails />} />
//       <Route path="/skills/technical/java" element={<JavaDetails />} />
//       <Route path="/skills/technical/data-structures" element={<DataStructuresDetails />} />
//       <Route path="/skills/technical/algorithms" element={<AlgorithmsDetails />} />
//       <Route path="/skills/technical/frontend" element={<FrontendDetails />} />
//       <Route path="/skills/technical/backend" element={<BackendDetails />} />
//       <Route path="/skills/non-technical/quantitative-aptitude" element={<QuantitativeAptitudeDetails />} />
//       <Route path="/skills/non-technical/logical-reasoning" element={<LogicalReasoningDetails />} />
//       <Route path="/skills/non-technical/verbal-communication" element={<VerbalCommunicationDetails />} />
//       <Route path="/skills/non-technical/non-verbal-communication" element={<NonVerbalCommunicationDetails />} />
//       <Route path="/mock-interviews" element={<MockInterviews />} />
//       <Route path="/code-editor/:problemId" element={<CodeEditor />} />
//       <Route path="/quiz" element={<Quiz />} />
//     </Routes>
//   );
// };

// type RouteProps = {
//   children: React.ReactNode;
// };

// const ProtectedRoute: React.FC<RouteProps> = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
//   const location = useLocation();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsAuthenticated(!!token);
//   }, []);

//   if (isAuthenticated === null) return <div>Loading...</div>;

//   if (!isAuthenticated && location.pathname !== "/login") {
//     return <Navigate to="/login" replace state={{ from: location }} />;
//   }

//   return <>{children}</>;
// };

// export default App;

import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminPage from "./pages/AdminPage";

import TechnicalSkills from "./pages/skills/TechnicalSkills";
import NonTechnicalSkills from "./pages/skills/NonTechnicalSkills";

import Practice from "./pages/Practice";
import PlacementDrives from "./pages/PlacementDrives";
import Profile from "./pages/Profile";

import CppDetails from "./pages/skills/cpp/CppDetails";
import PythonDetails from "./pages/skills/python/PythonDetails";
import JavaDetails from "./pages/skills/java/JavaDetails";
import DataStructuresDetails from "./pages/skills/data-structures/DataStructuresDetails";
import AlgorithmsDetails from "./pages/skills/algorithms/AlgorithmsDetails";
import FrontendDetails from "./pages/skills/frontend/FrontendDetails";
import BackendDetails from "./pages/skills/backend/BackendDetails";

import QuantitativeAptitudeDetails from "./pages/skills/aptitude/QuantitativeAptitudeDetails";
import LogicalReasoningDetails from "./pages/skills/aptitude/LogicalReasoningDetails";
import VerbalCommunicationDetails from "./pages/skills/communication/VerbalCommunicationDetails";
import NonVerbalCommunicationDetails from "./pages/skills/communication/NonVerbalCommunicationDetails";

import MockInterviews from "./pages/MockInterviews";
import CodeEditor from "./pages/CodeEditor";
import Quiz from "./pages/Quiz";
import DSA from "./pages/DSA";
import Aptitude from "./pages/Aptitude";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminPage />} />

        {/* Protected application */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

/* ================================
   APPLICATION ROUTES
================================ */

const AppLayout: React.FC = () => {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Skills */}
      <Route
        path="/skills/technical"
        element={<TechnicalSkills />}
      />

      <Route
        path="/skills/non-technical"
        element={<NonTechnicalSkills />}
      />

      {/* Technical Skill Details */}
      <Route
        path="/skills/technical/cpp"
        element={<CppDetails />}
      />

      <Route
        path="/skills/technical/python"
        element={<PythonDetails />}
      />

      <Route
        path="/skills/technical/java"
        element={<JavaDetails />}
      />

      <Route
        path="/skills/technical/data-structures"
        element={<DataStructuresDetails />}
      />

      <Route
        path="/skills/technical/algorithms"
        element={<AlgorithmsDetails />}
      />

      <Route
        path="/skills/technical/frontend"
        element={<FrontendDetails />}
      />

      <Route
        path="/skills/technical/backend"
        element={<BackendDetails />}
      />

      {/* Non-Technical Skill Details */}
      <Route
        path="/skills/non-technical/quantitative-aptitude"
        element={<QuantitativeAptitudeDetails />}
      />

      <Route
        path="/skills/non-technical/logical-reasoning"
        element={<LogicalReasoningDetails />}
      />

      <Route
        path="/skills/non-technical/verbal-communication"
        element={<VerbalCommunicationDetails />}
      />

      <Route
        path="/skills/non-technical/non-verbal-communication"
        element={<NonVerbalCommunicationDetails />}
      />

      {/* Practice */}
      <Route
        path="/practice"
        element={<Practice />}
      />

      <Route
        path="/practice/dsa"
        element={<DSA />}
      />

      <Route
        path="/practice/aptitude"
        element={<Aptitude />}
      />

      {/* Placement Drives */}
      <Route
        path="/placement-drives"
        element={<PlacementDrives />}
      />

      <Route
        path="/placement-drives/:id"
        element={<PlacementDrives />}
      />

      {/* Profile */}
      <Route
        path="/profile"
        element={<Profile />}
      />

      {/* Mock Interviews */}
      <Route
        path="/mock-interviews"
        element={<MockInterviews />}
      />

      {/* Code Editor */}
      <Route
        path="/code-editor/:problemId"
        element={<CodeEditor />}
      />

      {/* ================================
          QUIZ ROUTES
      ================================= */}

      {/* All Quiz */}
      <Route
        path="/quiz"
        element={<Quiz />}
      />

      {/* Technical Quiz */}
      <Route
        path="/quiz/technical"
        element={<Quiz />}
      />

      {/* Non-Technical Quiz */}
      <Route
        path="/quiz/non-technical"
        element={<Quiz />}
      />

      {/* Individual quiz/category support */}
      <Route
        path="/quiz/:skillType"
        element={<Quiz />}
      />

      {/* Fallback */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
};

/* ================================
   PROTECTED ROUTE
================================ */

type RouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute: React.FC<RouteProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<
    boolean | null
  >(null);

  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");

    setIsAuthenticated(!!token);
  }, []);

  /* Loading */
  if (isAuthenticated === null) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "18px",
        }}
      >
        Loading...
      </div>
    );
  }

  /* Not logged in */
  if (!isAuthenticated && location.pathname !== "/login") {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  /* Logged in */
  return <>{children}</>;
};

export default App;
