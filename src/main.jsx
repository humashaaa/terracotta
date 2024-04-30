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
import ErrorPage from './Pages/ErrorPage.jsx';
import AllItem from './Pages/AllItem.jsx';
import Update from './Pages/Update.jsx';
import SingleDetails from './Pages/SingleDetails.jsx';
// import WorkshopPage from './Pages/WorkshopPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/items')
      },
      {
        path: '/allItem',
        element: <AllItem></AllItem>,
        loader: ()=> fetch('http://localhost:5000/addProduct')
      },
      {
        path: '/allItem/:id',
        element: <SingleDetails></SingleDetails>,
        loader: ()=> fetch(`http://localhost:5000/addProduct/`)
      },
      {
        path: '/add',
        element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
      },
      {
        path: '/updateItem/:id',
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/item/${params.id}`)

      },
      {
        path: '/product/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/items')
      },
      {
        path: '/mylist',
        element: <PrivateRoute><MyList></MyList></PrivateRoute>,
        // loader: ()=> fetch(`http://localhost:5000/myProduct/${userEmail}`)
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
