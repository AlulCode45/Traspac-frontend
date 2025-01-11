import {createBrowserRouter} from "react-router-dom";
import Dashboard from "../views/dashboard/dashboard.jsx";
import DashboardLayout from "../layouts/dashboard.layout.jsx";
import Login from "../views/auth/login.jsx";


const routes = createBrowserRouter([
    {
      path: '/',
      element: <Login/>
    },
    {
        path: '/dashboard',
        element:<DashboardLayout/>,
        children: [
            {
                path: '',
                element: <Dashboard />,
            }
        ]
    }
])


export {
    routes
};