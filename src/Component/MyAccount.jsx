import React from "react";

const Account = () => {
  return (
   <>
   <div className="min-h-screen w-full bg-gray-100 flex justify-center items-center px-4 md:px-0">
     <div className="bg-white p-14 md:p-14 shadow-lg w-full sm:w-[90%] md:w-[80%] lg:w-[92%] h-auto md:h-[90%] mt-26 md:mt-8 mb-8">
        <h1 className="text-2xl font-semibold mb-6 text-center md:text-left">My account</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* <!-- Login Section --> */}
            <div>
                <h2 className="text-xl font-semibold mb-4">Login</h2>
                <form className="py-6">
                    <div className="mb-4 flex flex-col items-center md:items-start">
                        <label className="block text-md font-medium mb-1 w-full md:w-[90%]" htmlFor="username">
                          Username or email address <span className="text-red-500">*</span>
                        </label>
                        <input className="w-full md:w-[90%] border border-gray-300 p-2" type="text" id="username" required/>
                    </div>
                    <div className="mb-4 flex flex-col items-center md:items-start relative">
                        <label className="block text-md font-medium mb-1 w-full md:w-[90%]" htmlFor="password">
                          Password <span className="text-red-500">*</span>
                        </label>
                        <input className="w-full md:w-[90%] border border-gray-300 p-2" type="password" id="password" required/>
                        <i className="fas fa-eye absolute right-4 top-[58%] text-gray-500"></i>
                    </div>
                    <div className="mb-4 flex items-center mx-6 md:mx-0 gap-2">
                        <input className="form-checkbox" type="checkbox" id="remember"/>
                        <label className="text-md font-semibold" htmlFor="remember">Remember me</label>
                    </div>
                   <div className="flex flex-col items-center md:items-start mx-6 md:mx-0">
                      <button className="bg-cyan-400 text-white p-2 hover:bg-black w-28 mb-4">LOG IN</button>
                      <a href="#" className="text-lg text-black font-semibold inline-block">Lost your password?</a>
                   </div>
                </form>
            </div>
            {/* <!-- Register Section --> */}
            <div>
                <h2 className="text-xl font-semibold mb-4">Register</h2>
                <form className="w-full py-6 gap-2">
                    <div className="mb-4">
                        <label className="block text-md font-medium mb-1" htmlFor="email">Email address <span className="text-red-500">*</span></label>
                        <input className="w-full border border-gray-300 p-2" type="email" id="email" required/>
                    </div>
                    <p className="text-md mb-4">A link to set a new password will be sent to your email address.</p>
                    <p className="text-md mb-4 text-justify">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                    <button className="w-28 bg-cyan-400 hover:bg-black text-white p-2 rounded">REGISTER</button>
                </form>
            </div>
        </div>
     </div>
   </div>
   </>
  );
};

export default Account;
