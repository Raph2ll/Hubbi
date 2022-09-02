import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../Context/AuthContext/useAuth";

function Home() {
  const [use, setUse] = useState('');
  const [passw, setPassw] = useState('');

  const auth = useAuth();

  async function onFinish() {
    try {
      await auth.authenticate(use, passw);
    } catch (error) {
      console.log('Invalid email or password')
    }
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <p className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
          Hubbi
        </p>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-800 md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="dangerouslySetInnerHTML">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-800 ">Your email</label>
                <input
                  name="email"
                  id="email"
                  value={use}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required=""
                  onChange={(event) => setUse(event.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >Password</label>
                <input
                  name="password"
                  id="password"
                  value={passw}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required=""
                  onChange={(event) => setPassw(event.target.value)}
                />
              </div>
              <button
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={onFinish}
              >Sign in
              </button>
              <div className="flex justify-center flex-row space-x-4 place-content-center">
                <Link to={"/people"}>
                  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                    People
                  </button>
                </Link>
                <Link to={"/starships"}>
                  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                    Spaceship
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
