import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Hero = () => {
  const { auth } = useContext(Context);
  const navigateTo = useNavigate();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [haveData, setHaveData] = useState(false);

  const getDetails = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/userDetails/getDetails",
        { withCredentials: true }
      );
      if (data.userDetails) {
        setHaveData(true);
        setName(data.userDetails.name);
        setNumber(data.userDetails.number);
        setAddress(data.userDetails.address);
        setCity(data.userDetails.city);
        setState(data.userDetails.state);
        setCountry(data.userDetails.country);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  if (!auth.isAuthenticated) return <Navigate to={"/login"} />;

  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <h1 className="text-black text-xl ">Dashboard</h1>
      {!auth.isAuthenticated ? (
        <p className="text-black text-2xl">You are not logged in.</p>
      ) : (
        <>
          <p className="text-black text-2xl pt-3">Welcome, {auth.user}!</p>
          {haveData ? (
            <>
              <div className="w-full mt-8 max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    User Info
                  </h5>
                  <Link
                    to="/updateDetails"
                    className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Update Details
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
                          {name}
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
                            Your Contact Number
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          {number}
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
                          {address}
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
                          {city}
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
                          {state}
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
                          {country}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <div className="flex justify-center items-center flex-col gap-5">
              <p className="pt-5 text-2xl">
                You haven't uploaded your information! Click to update the
                information
              </p>
              <Link className="bg-blue-600 p-3 rounded-lg text-white hover:bg-blue-700" to={'/enterDetails'}>
                Enter Information!
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Hero;
