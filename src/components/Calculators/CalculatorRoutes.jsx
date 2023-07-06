import React from 'react';
import { Routes, Route } from "react-router-dom";
import LoadableComponent from '../../utils/LoadableComponent';

const CalculatorRoutes = () => {
    return (
        <Routes>
            <Route path="affordability" element={LoadableComponent(() => import('./components/Affordability'))} />
            <Route path="payment" element={LoadableComponent(() => import('./components/Payment'))} />
            <Route path="cmhc" element={LoadableComponent(() => import('./components/CMHC'))} />
            <Route path="transfer" element={LoadableComponent(() => import('./components/Transfer'))} />
            <Route path="renewal" element={LoadableComponent(() => import('./components/Renewal'))} />
        </Routes>
    );
}

export default CalculatorRoutes;