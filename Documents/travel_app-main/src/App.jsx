//import { useState } from "react";
import "./App.css";
import Homepage from "./routes/Homepage";
import SinglePage from "./components/SinglePage";
import ErrorPage from "./routes/ErrorPage";
import Countries from "./routes/Countries";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Weather from "./routes/Weather";
import PlannerWrapper from "./components/PlannerWrapper";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/:name" element={<SinglePage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
          <Route path="/countries" element={<Countries />}></Route>
          <Route path="/weather" element={<Weather />}></Route>
          <Route path="/planner" element={<PlannerWrapper />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
