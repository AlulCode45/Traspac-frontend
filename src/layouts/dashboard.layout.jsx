import {Outlet} from "react-router";
import Sidebar from "../components/dashboard/sidebar.jsx";
import Topbar from "../components/dashboard/topbar.jsx";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function DashboardLayout(props) {
    return (
        <div className={'bg-gray-100'}>
            <div className="flex gap-2">
                <Sidebar />
                <main className={'p-5 w-4/5'}>
                    <Topbar/>
                    <Outlet/>
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;