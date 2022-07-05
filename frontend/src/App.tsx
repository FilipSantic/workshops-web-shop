import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Login from './pages/Login';
import Workshops from './pages/Workshops';

export interface ApplicationProps {}

const App: React.FunctionComponent<ApplicationProps> = (props) => {
    return (
        <BrowserRouter>
          <div className="container">
            <Header />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="workshops" element={<Workshops />} />
            </Routes>
          </div>
        </BrowserRouter>
    );
};

export default App;