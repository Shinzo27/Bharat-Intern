import React, { useContext, useState } from 'react'
import { Context } from '../main'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const EnterDetails = () => {
    const { auth } = useContext(Context)
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const navigateTo = useNavigate();

    if(!auth.isAuthenticated) return <Navigate to={'/login'}/>

    const enterDetailsHandler = async () => {
        try {
          const { data } = await axios.post(
            `http://localhost:3000/api/v1/userDetails/enterUserDetail`,
            {
              name: name,
              number: number,
              address: address,
              city: city,
              state: state,
              country: country,
            },
            { withCredentials: true }
          );
          toast.success(data.message);
          navigateTo("/");
        } catch (error) {
          console.log(error);
        }
    };

  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <h1 className="text-black text-xl ">Dashboard</h1>
      {!auth.isAuthenticated ? (
        <p className="text-black text-2xl">You are not logged in.</p>
      ) : (
        <>
          <p className="text-black text-2xl pt-3">Welcome, {auth.user}!</p>
          <div className="w-full mt-8 max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                Update Details
              </h5>
              <Link
                to="/"
                className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Home
              </Link>
            </div>
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                <li className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Name
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        Your Name
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      <input
                        type="text"
                        className="text-black rounded-md"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center ">
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Number
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        Your Number
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      <input
                        type="text"
                        className="text-black rounded-md"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                      />
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Address
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        Your Address
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      <input
                        type="text"
                        className="text-black rounded-md"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center ">
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        City
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        Your City
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      <input
                        type="text"
                        className="text-black rounded-md"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                  </div>
                </li>
                <li className="pt-3 pb-0 sm:pt-4">
                  <div className="flex items-center ">
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        State
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        Your State
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      <input
                        type="text"
                        className="text-black rounded-md"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                      />
                    </div>
                  </div>
                </li>
                <li className="py-3 mt-4 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Country
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        Your Country
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      <input
                        type="text"
                        className="text-black rounded-md"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-96 mt-5 text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={enterDetailsHandler}
              >
                Enter Details
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default EnterDetails