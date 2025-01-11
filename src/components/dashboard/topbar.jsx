import {useAuthStore} from "../../store/authStore.js";

function Topbar() {
    const userState = useAuthStore((state) => state.user);

    return (
        <div className={'bg-white flex justify-between items-center w-full rounded-md py-3 px-5 mb-5 shadow'}>
            <span className={'font-semibold'}>Dashboard</span>
            <div className="profile flex items-center gap-3">
                <span>Welcome <span className={'font-semibold'}>{userState?.name}</span></span>
                <div className="bg-gray-400 rounded-full w-10 h-10"></div>
            </div>
        </div>
    );
}

export default Topbar;