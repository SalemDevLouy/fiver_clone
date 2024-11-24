
import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer';

import {

  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './pages/home';
import Gigs from './pages/gigs';
import Gig from './pages/gig';
import MyGigs from './pages/myGigs';
import Message from './pages/message';
import Add from './pages/add';
import Login from './pages/login';
import Register from './pages/register';
import Orders from './pages/orders';
import ContactUs from './pages/contactUs';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


function App() {
  const Layout =()=>{
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer/>
        </QueryClientProvider>
      </div>
    )
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        { path: "/", element: <Home /> },
        { path: "/add", element: <Add /> },
        { path: "/gig", element: <Gig /> },
        { path: "/gigs", element: <Gigs /> },
        { path: "/login", element: <Login /> },
        { path: "/message", element: <Message /> },
        { path: "/messages", element: <Home /> },
        { path: "/myGigs", element: <MyGigs /> },
        { path: "/orders", element: <Orders /> },
        { path: "/register", element: <Register /> },
        { path: "/contactus", element: <ContactUs /> },
       
      ]
      ,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
