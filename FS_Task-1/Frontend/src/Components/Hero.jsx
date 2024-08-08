import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Hero = () => {
  const { auth } = useContext(Context);
  const navigateTo = useNavigate();

  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [country, setCountry] = useState("")

  const getDetails = async() => {
    try {
      const { data } = await axios.get('', {withCredentials: true})
      setName(data.userDetails.name)
      setNumber(data.userDetails.number)
      setAddress(data.userDetails.name)
      setCity(data.userDetails.name)
      setState(data.userDetails.name)
      setCountry(data.userDetails.name)
    } catch (error) {
      
    }
    
  }

  useEffect(() => {
    console.log("auth state : ", auth);
  }, [auth]);

  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <h1 className="text-black text-xl ">Dashboard</h1>
      {!auth.isAuthenticated ? (
        <p className="text-black text-2xl">You are not logged in.</p>
      ) : (
        <>
          <p className="text-black text-2xl pt-3">Welcome, {auth.user}!</p>
          <div class="w-full mt-8 max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex items-center justify-between mb-4">
              <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
                User Info
              </h5>
              <a
                href="#"
                class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Update Details
              </a>
            </div>
            <div class="flow-root">
              <ul
                role="list"
                class="divide-y divide-gray-200 dark:divide-gray-700"
              >
                <li class="py-3 sm:py-4">
                  <div class="flex items-center">
                    <div class="flex-1 min-w-0 ms-4">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Name
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        Your Name
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      Pratham Patel
                    </div>
                  </div>
                </li>
                <li class="py-3 sm:py-4">
                  <div class="flex items-center ">
                    <div class="flex-1 min-w-0 ms-4">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Number
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        Your Contact Number
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      7878435553
                    </div>
                  </div>
                </li>
                <li class="py-3 sm:py-4">
                  <div class="flex items-center">
                    <div class="flex-1 min-w-0 ms-4">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Address
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        Your Address
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      Nani fali, Pal gam
                    </div>
                  </div>
                </li>
                <li class="py-3 sm:py-4">
                  <div class="flex items-center ">
                    <div class="flex-1 min-w-0 ms-4">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        City
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        Your City
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      Surat
                    </div>
                  </div>
                </li>
                <li class="pt-3 pb-0 sm:pt-4">
                  <div class="flex items-center ">
                    <div class="flex-1 min-w-0 ms-4">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        State
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        Your State
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      Gujarat
                    </div>
                  </div>
                </li>
                <li class="py-3 mt-4 sm:py-4">
                  <div class="flex items-center">
                    <div class="flex-1 min-w-0 ms-4">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Country
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        Your Country
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      India
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
