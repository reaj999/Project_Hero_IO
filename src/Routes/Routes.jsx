import React, {lazy, Suspense} from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Loading from '../Components/Loader/Spinner';


const Home = lazy(() => import('../Pages/Home/Home'));
const Apps = lazy(() => import('../Pages/Apps/Apps'));
const Installation = lazy(() => import('../Pages/Installation/Installation'));
const AppDetails = lazy(() => import('../Pages/AppDetails/AppDetails'));
const Error = lazy(() => import('../Pages/404 Error page/Error'));


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: () => <Suspense fallback={<Loading />}><Home /></Suspense> 
      },
      {
        path: "/apps",
        Component: () => <Suspense fallback={<Loading />}><Apps /></Suspense> 
      },
      {
        path: "/installation",
        Component: () => <Suspense fallback={<Loading />}><Installation /></Suspense>,
      },
      {
        path: "/appDetails/:id",
        Component: () => <Suspense fallback={<Loading />}><AppDetails /></Suspense>,
      },
      {
        path: "*",
        Component: () => <Suspense fallback={<Loading />}><Error /></Suspense>,
      },
    ],
  },
]);