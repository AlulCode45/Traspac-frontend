import {createBrowserRouter} from "react-router-dom";
import Dashboard from "../views/dashboard/dashboard.jsx";
import DashboardLayout from "../layouts/dashboard.layout.jsx";
import Login from "../views/auth/login.jsx";
import Pegawai from "../views/dashboard/pegawai/pegawai.jsx";
import DetailPegawai from "../views/dashboard/pegawai/detailPegawai.jsx";
import EditPegawai from "../views/dashboard/pegawai/editPegawai.jsx";


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
            },
            {
                path: 'pegawai',
                element: <Pegawai/>,
            },
            {
                path: 'pegawai/:id',
                element: <DetailPegawai/>,
            },
            {
                path: 'pegawai/:id/edit',
                element: <EditPegawai/>,
            }
        ]
    }
])


export {
    routes
};