import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Register from './Pages/Register.jsx';
import Login from './Pages/Login.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import AddProducts from './Pages/AddProducts.jsx';
import MyList from './Pages/MyList.jsx';
import Details from './Pages/Details.jsx';
import PrivateRoute from './Router/PrivateRoute.jsx';
// import WorkshopPage from './Pages/WorkshopPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/items')
      },
      {
        path: '/add',
        element: <AddProducts></AddProducts>
      },
      {
        path: '/product/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader:  async({params}) => fetch(``)
      },
      {
        path: '/mylist',
        element: <MyList></MyList>
      },
      {
        path: '/about',
        element: <About></About>
      },
      // {
      //   path: '/workshops',
      //   element: <WorkshopPage></WorkshopPage>
      // },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      // {
      //   path: '/register',
      //   element: <Register></Register>
      // },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />

    </AuthProvider>
  </React.StrictMode>,
)
