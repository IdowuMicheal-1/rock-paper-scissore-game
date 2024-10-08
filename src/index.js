import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Choose from './pages/Choose';
import Checked from './pages/Checked';
import Lose from './pages/Lose';
import Win from './pages/Win';
import { RuleProvider } from './context/rule-provider';
import Draw from './pages/Draw';
import Error from './pages/Error';


const router = createBrowserRouter ([
  {
    
    path:'/',
    element:<App />,
    errorElement:<Error />
  },
  {
    path:'/game',
    element:<Choose />
  },
  // {
  //   path:'/checked',
  //   element:<Checked />
  // },
  {
    path:'/lose',
    element:<Lose />
  },
  {
    path:'/win',
    element:<Win />
  },
  {
    path:'/draw',
    element:<Draw />
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RuleProvider>
    <RouterProvider router={router}/>
    </RuleProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
