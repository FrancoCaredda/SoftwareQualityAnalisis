import logo from './logo.svg';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './view/Layout';
import ExpertsAnalis from './view/ExpertsAnalis';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<ExpertsAnalis />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
