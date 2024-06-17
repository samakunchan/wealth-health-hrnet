import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import EmployeeListPage from './pages/Employee-list-page';
import HomePage from './pages/Homepage';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouteName } from './core/utils/utils';
import reportWebVitals from './reportWebVitals';
import store from './core/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <Router basename={RouteName.prefix}>
        <Routes>
          <Route path={RouteName.home} element={<HomePage />} />
          <Route path={RouteName.listEmployee} element={<EmployeeListPage />} />
        </Routes>
      </Router>
    </Provider>
  </>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
