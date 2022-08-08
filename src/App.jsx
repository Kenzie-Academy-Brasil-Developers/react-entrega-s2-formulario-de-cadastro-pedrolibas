import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Global from "./styles/global";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <Global />
      <Toaster />
      <Routes>
        <Route path="/" element={<LoginPage setLoading={setLoading} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/home"
          element={<HomePage loading={loading} setLoading={setLoading} />}
        />
      </Routes>
    </div>
  );
}

export default App;
