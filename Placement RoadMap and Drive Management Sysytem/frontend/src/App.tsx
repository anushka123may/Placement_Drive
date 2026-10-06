import React, { useEffect, useState } from "react";
import {
  HashRouter as Router,
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

        {/* Protected Application */}
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

      {/* Individual Quiz / Category Support */}
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
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(
    null
  );

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
