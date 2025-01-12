import { Outlet } from "react-router";
import Sidebar from "../components/dashboard/sidebar.jsx";
import Topbar from "../components/dashboard/topbar.jsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {useAuthStore} from "../store/authStore.js";
import {getUserProfile} from "../services/authService.js";
import toast from "react-hot-toast";

function DashboardLayout() {
    const navigate = useNavigate();
    const userState = useAuthStore((state) => state.user);
    const setUserState = useAuthStore(state => state.setAuthState)

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const profile = await getUserProfile();
                if (!profile) {
                    toast.error("Silahkan login terlebih dahulu!")
                    navigate("/");
                }
                if (!userState) {
                    console.log(profile)
                    setUserState({
                        isLoggedIn: true,
                        user: profile,
                    });
                }
            } catch (error) {
                console.error("Failed to fetch user profile:", error);
            }
        };
        fetchUserProfile();
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="flex gap-2">
                <Sidebar/>
                <main className="p-5 flex-1 overflow-auto h-screen">
                    <Topbar/>
                    <Outlet/>
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;
