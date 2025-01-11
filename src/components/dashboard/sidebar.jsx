import {MdDashboard} from "@react-icons/all-files/md/MdDashboard.js";
import {FiUsers} from "@react-icons/all-files/fi/FiUsers.js";
import {FiLogOut} from "@react-icons/all-files/fi/FiLogOut.js";
import {useState} from "react";
import {authLogout} from "../../services/authService.js";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

function Sidebar(props) {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState(0);
    const handleLogout = async () => {
        await authLogout();
        toast.success('Logout berhasil')
        navigate('/')
    }
    return (
        <aside className={'p-4 w-1/5 bg-white h-screen rounded-br-3xl rounded-tr-3xl'}>
            <div className="logo flex justify-center items-center mb-10">
                <h1 className={'text-2xl font-bold'}>
                    <b className='font-bold text-blue-500'>Dashboard</b> PNS
                </h1>
            </div>
            <div className="flex flex-col gap-2">
                <span>Menu</span>
                <div className="link-menu p-3 flex items-center gap-3 bg-blue-500 rounded-md text-white relative hover:cursor-pointer">
                    <div
                        className={`${activeTab === 0 ? 'bg-blue-500' : ''} absolute rounded-md -left-5 w-[10px] h-full`}></div>
                    <MdDashboard/> Dashboard
                </div>
                <div
                    className="link-menu p-3 flex items-center gap-3 rounded-md text-black hover:bg-blue-500 hover:text-white transition duration-200 relative hover:cursor-pointer">
                    <div
                        className={`${activeTab === 1 ? 'bg-blue-500' : ''} absolute rounded-md -left-5 w-[10px] h-full`}></div>
                    <FiUsers/> Pegawai
                </div>
                <div className={'divide-y divide-black'}></div>
                <span>Master Data</span>
                <div
                    className="link-menu p-3 flex items-center gap-3 rounded-md text-black hover:bg-blue-500 hover:text-white transition duration-200 relative hover:cursor-pointer">
                    <div
                        className={`${activeTab === 1 ? 'bg-blue-500' : ''} absolute rounded-md -left-5 w-[10px] h-full`}></div>
                    <FiUsers/> Unit Kerja
                </div>
                <div
                    className="link-menu p-3 flex items-center gap-3 rounded-md text-black hover:bg-blue-500 hover:text-white transition duration-200 relative hover:cursor-pointer">
                    <div
                        className={`${activeTab === 1 ? 'bg-blue-500' : ''} absolute rounded-md -left-5 w-[10px] h-full`}></div>
                    <FiUsers/> Jabatan
                </div>
                <div className={'divide-y divide-black'}></div>
                <span>Profile</span>
                <div
                    className="link-menu p-3 flex items-center gap-3 rounded-md text-black hover:bg-blue-500 hover:text-white transition duration-200 relative hover:cursor-pointer" onClick={handleLogout}>
                    <FiLogOut/> Logout
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;