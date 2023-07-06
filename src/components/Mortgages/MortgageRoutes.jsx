import React from 'react';
import { Routes, Route } from "react-router-dom";
import LoadableComponent from '../../utils/LoadableComponent';

const MortgageRoutes = () => {
    return (
        <Routes>
            <Route path="home-purchase" element={LoadableComponent(() => import('./components/HomePurchase'))} />
            <Route path="commercial" element={LoadableComponent(() => import('./components/Commercial'))} />
            <Route path="debt" element={LoadableComponent(() => import('./components/Debt'))} />
            <Route path="equity" element={LoadableComponent(() => import('./components/Equity'))} />
            <Route path="private" element={LoadableComponent(() => import('./components/Private'))} />
            <Route path="refinance" element={LoadableComponent(() => import('./components/Refinance'))} />
            <Route path="second-mortgage" element={LoadableComponent(() => import('./components/SecondMortgage'))} />
            <Route path="renewing" element={LoadableComponent(() => import('./components/Renew'))} />
        </Routes>
    );
}

export default MortgageRoutes;