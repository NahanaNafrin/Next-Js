"use client";

import { useRouter } from "next/navigation";

export default function Login(){
    const router = useRouter();

    const handleLogin = () =>{
        document.cookie = "user=nahana; path=/";
        router.push("/products");
    };

    const handleLogout = ()=>{
        document.cookie = "user=; path=/; max-age=0";
        router.push("/");
    };

    return(


<div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
            Login Page
        </h2>

        {/* <form > */}

            {/* Email */}
            <div className="mb-4">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                    Email
                </label>

                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
            </div>

            {/* Password */}
            <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                    Password
                </label>

                <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
            </div>

            {/* Login */}
            <button
                type="submit"
                className="w-full rounded-full bg-blue-600 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-blue-700"
                onClick={handleLogin}
            >
                Login
            </button>

        {/* </form> */}

        {/* Logout */}
        <button
            type="button"
            onClick={handleLogout}
            className="mt-3 w-full rounded-full border border-blue-600 py-3 text-sm font-semibold text-blue-600 transition duration-300 hover:bg-blue-600 hover:text-white"
        >
            LogOut
        </button>

    </div>
</div>


    );
}