import React from 'react'

export default function TestSignUp() {
  return (
    <div className='bg-gray-900 text-gray-200 '>
        <div className="flex flex-col max-md:items-center md:flex-row min-h-screen justify-center">
            <div className="hidden md:flex flex-col items-start px-8 md:w-1/2">
            <div className="text-blue-500 flex items-center mb-8">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.627-5.373-12-12-12zm0 22.8C6.201 22.8 1.2 17.799 1.2 12S6.201 1.2 12 1.2 22.8 6.201 22.8 12 17.799 22.8 12 22.8zm-.3-16.5h.6c3.9 0 6.9 3 6.9 6.9s-3 6.9-6.9 6.9h-.6c-3.9 0-6.9-3-6.9-6.9s3-6.9 6.9-6.9zm0 12c2.8 0 5.1-2.3 5.1-5.1s-2.3-5.1-5.1-5.1-5.1 2.3-5.1 5.1 2.3 5.1 5.1 5.1z"/></svg>
                <span className="ml-2 text-xl font-bold">Xcellify</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">Get started quickly</h2>
            <p className="mb-6">Integrate with developer-friendly APIs or choose low-code.</p>
            <h2 className="text-2xl font-bold mb-4">Support any business model</h2>
            <p className="mb-6">Host code that you don't want to share with the world in private.</p>
            <h2 className="text-2xl font-bold mb-4">Join millions of businesses</h2>
            <p>Flowbite is trusted by ambitious startups and enterprises of every size.</p>
            </div>

            <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg md:ml-10">
            <div className="text-center mb-6">
                <h1 className="text-3xl font-semibold">Create your Free Account</h1>
            </div>
            <div className="flex flex-col space-y-5 md:space-y-0 justify-between md:flex-row md:space-x-2 mb-4">
                <button className="w-full md:w-1/2 py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded flex items-center justify-center space-x-2 text-gray-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.8 12.1c0-.8-.1-1.6-.2-2.4h-10.5v4.5h6.1c-.2 1.1-.7 2-1.3 2.8v2.3h4.2c2.4-2.2 3.7-5.4 3.7-9.2zM12.1 23.9c3 0 5.4-.9 7.2-2.5l-4.2-3.3c-.8.5-1.8.8-3 .8-2.3 0-4.3-1.5-5-3.6h-4.3v2.2c1.8 3.5 5.3 6.4 9.3 6.4zM3.6 12c-.1-.7-.1-1.5-.1-2.2s0-1.5.1-2.2h4.2v4.5h-4.2zM12.1 5.1c1.2 0 2.3.4 3.1 1l3.6-3.5c-2-1.8-4.8-3-7.7-3-4 0-7.5 2.2-9.3 5.4l4.2 3.2c.8-2 2.7-3.5 5.1-3.5z"/></svg>
                <span>Sign up with Google</span>
                </button>
                <button className="w-full md:w-1/2 py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded flex items-center justify-center space-x-2 text-gray-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 6.2C20 4.2 18.4 2.6 16.4 2.6h-8.8C6.2 2.6 4.6 4.2 4.6 6.2v11.7c0 2 1.6 3.6 3.6 3.6h8.8c2 0 3.6-1.6 3.6-3.6V6.2zm-6.4 12.3h-1.4V8.5h1.4v10zm-.7-12.8c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1z"/></svg>
                <span>Sign up with Apple</span>
                </button>
            </div>
            <div className="text-center text-gray-400 mb-4">or</div>
            <form>
                <div className="mb-4">
                <label className="block text-sm font-medium">Your email</label>
                <input type="email" className="w-full p-3 bg-gray-700 rounded" placeholder="name@company.com" />
                </div>
                <div className="mb-4">
                <label className="block text-sm font-medium">Country</label>
                <select className="w-full p-3 bg-gray-700 rounded">
                    <option>Choose a country</option>
                </select>
                </div>
                <div className="mb-4">
                <label className="block text-sm font-medium">Password</label>
                <input type="password" className="w-full p-3 bg-gray-700 rounded" placeholder="••••••••" />
                </div>
                <div className="flex items-center mb-4">
                <input type="checkbox" className="w-4 h-4 text-blue-500 rounded bg-gray-700 focus:ring-0" />
                <label className="ml-2 text-sm">By signing up, you agree to the Terms of Use and Privacy Policy.</label>
                </div>
                <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded">Create an account</button>
            </form>
            <p className="text-center mt-4">Already have an account? <a href="#" className="text-blue-500">Sign in here</a></p>
            </div>
        </div>
    </div>
  )
}
