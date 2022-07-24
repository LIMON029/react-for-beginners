import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/abot-us" element={<h1>Hello</h1>} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
