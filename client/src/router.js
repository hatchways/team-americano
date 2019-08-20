// ==============================================
// Router:
// ==============================================

// Dependencies:
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Custom Components:
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Home from './pages/home/Home';

export default function Router (props) {
  return (
    <BrowserRouter>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route exact={true} path="/" component={Home} />
    </BrowserRouter>
  );
}
