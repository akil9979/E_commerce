import React from "react";
function Login() {
    return (
        <div className="h-screen flex justify-center items-center text-3xl font-bold">
            <h1>Login</h1>
            <div>
            <label  className="text-base font-normal m-2">Username:</label>
            <input type="text" className="border-2 border-gray-300 rounded-md p-2 m-2"/>
            </div>
            <div>
            <label  className="text-base font-normal m-2">Password:</label>
            <input type="password" className="border-2 border-gray-300 rounded-md p-2 m-2"/>
            </div>
        </div>
    )
}
export default Login;