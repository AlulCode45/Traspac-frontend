import {useState} from "react";
import {authLogin} from "../../services/authService.js";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

function Login() {
    const navigate = useNavigate()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const status = await authLogin(email,password)
        if(status){
            sessionStorage.setItem('token',status.data.token)
            toast.success('Login successfully')
            navigate('/dashboard')
        }else{
            toast.error("Username / password wrong!")
        }
    }
    return (
        <>
            {/*<div className="grid place-content-center h-screen">*/}
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 h-screen">
                        <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                    Login Aplikasi
                                </p>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Email
                                    </label>
                                    <input placeholder="user@example.com"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 outline-blue-500"
                                           id="email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Password
                                    </label>
                                    <input
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 outline-blue-500"
                                        placeholder="••••••••" id="password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                                </div>
                                <button
                                    className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white"
                                    type="submit">
                                    Login
                                </button>

                            </div>
                        </div>
                    </div>
                </form>
            {/*</div>*/}
        </>
    );
}

export default Login;