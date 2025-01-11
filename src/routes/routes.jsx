import {createBrowserRouter} from "react-router-dom";
import Dashboard from "../views/dashboard/dashboard.jsx";
import DashboardLayout from "../layouts/dashboard.layout.jsx";

const routes = createBrowserRouter([
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