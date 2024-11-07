import React from 'react'

export default function TestSignup2() {
  return (
    <div className="flex min-h-screen items-center justify-center">
    <div className="w-1/2 bg-indigo-500 text-white p-10 flex flex-col justify-between rounded-l-lg">
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Why Xcellify?</h1>
        <ul className="space-y-6 text-lg">
          <li className="flex items-center space-x-4">
            <span className="inline-block w-10 h-10 bg-white rounded-full p-2 flex items-center justify-center">
              <img src="your-icon-path-1.svg" alt="Icon 1" />
            </span>
            <span>Your One-Stop Shop / All-in-One Career Hub</span>
          </li>
          <li className="flex items-center space-x-4">
            <span className="inline-block w-10 h-10 bg-white rounded-full p-2 flex items-center justify-center">
              <img src="your-icon-path-2.svg" alt="Icon 2" />
            </span>
            <span>Affordable Career Counselling</span>
          </li>
          <li className="flex items-center space-x-4">
            <span className="inline-block w-10 h-10 bg-white rounded-full p-2 flex items-center justify-center">
              <img src="your-icon-path-3.svg" alt="Icon 3" />
            </span>
            <span>Accessible Peer & Expert Support</span>
          </li>
          <li className="flex items-center space-x-4">
            <span className="inline-block w-10 h-10 bg-white rounded-full p-2 flex items-center justify-center">
              <img src="your-icon-path-4.svg" alt="Icon 4" />
            </span>
            <span>Transparent Pricing</span>
          </li>
        </ul>
      </div>
      <div className="text-center mt-10">
        <h2 className="text-4xl font-extrabold">Xcellify</h2>
        <p className="text-lg">Discover, Learn, Excel</p>
      </div>
    </div>


    <div className="w-1/2 bg-white p-10 rounded-r-lg">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-indigo-700">Login</h2>
        <p className="text-gray-600 mt-2">
          Enter Your registered email id to <a href="#" className="text-indigo-500">Login</a>
        </p>
      </div>
      
      <form className="mt-8 space-y-6">
        <div>
          <label className="block text-gray-700 font-medium">E mail</label>
          <input type="email" placeholder="Enter your Email address" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" />
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium">Password</label>
          <input type="password" placeholder="Enter your Password" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" />
        </div>

        <div className="flex items-center justify-between mt-4">
          <div>
            <input type="checkbox" id="terms" className="mr-2" />
            <label for="terms" className="text-gray-600 text-sm">By signing up <a href="#" className="text-indigo-500">Terms & conditions</a> Apply</label>
          </div>
          <a href="#" className="text-indigo-500 text-sm">Forgot password?</a>
        </div>

        <button type="submit" className="w-full bg-indigo-500 text-white py-2 rounded mt-4 font-bold text-lg">
          Log in
        </button>

        <div className="flex items-center justify-center mt-6 space-x-2">
          <span className="w-full h-px bg-gray-300"></span>
          <span className="text-gray-600">OR</span>
          <span className="w-full h-px bg-gray-300"></span>
        </div>

        <div className="flex justify-center space-x-4 mt-4">
          <button className="flex items-center space-x-2 border border-gray-300 rounded px-4 py-2 hover:bg-gray-50">
            <img src="google-icon.svg" alt="Google" className="h-5" />
            <span>Continue with Google</span>
          </button>
          <button className="flex items-center space-x-2 border border-gray-300 rounded px-4 py-2 hover:bg-gray-50">
            <img src="facebook-icon.svg" alt="Facebook" className="h-5" />
            <span>Continue with Facebook</span>
          </button>
          <button className="flex items-center space-x-2 border border-gray-300 rounded px-4 py-2 hover:bg-gray-50">
            <img src="instagram-icon.svg" alt="Instagram" className="h-5" />
            <span>Continue with Instagram</span>
          </button>
        </div>

        <div className="flex items-center justify-center mt-4 text-sm text-gray-600">
          <input type="checkbox" id="data-agreement" className="mr-2" />
          <label for="data-agreement">By signing up I agree to share my data and according to <a href="#" className="text-indigo-500">User Agreement</a>, <a href="#" className="text-indigo-500">Cookie policy</a> & <a href="#" className="text-indigo-500">Privacy policy</a></label>
        </div>

        <div className="flex justify-center mt-6">
          <span className="text-gray-600">Don’t have an account?</span>
          <a href="#" className="text-indigo-500 ml-1">Sign up</a>
        </div>
      </form>
    </div>
  </div>
  )
}
