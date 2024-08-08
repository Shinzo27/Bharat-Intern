import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateDetails = () => {
  const { auth } = useContext(Context);
  const navigateTo = useNavigate();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [updateName, setUpdatedName] = useState("");
  const [updateNumber, setUpdatedNumber] = useState("");
  const [updateAddress, setUpdatedAddress] = useState("");
  const [updateCity, setUpdatedCity] = useState("");
  const [updateState, setUpdatedState] = useState("");
  const [updateCountry, setUpdatedCountry] = useState("");

  const updatePayload = {
    name: updateName,
    number: updateNumber,
    address: updateAddress,
    city: updateCity,
    state: updateState,
    country: updateCountry,
  };
  const email = auth.user;

  const updateDetailsHandler = async () => {
    try {
      const { data } = await axios.put(
        `http://localhost:3000/api/v1/userDetails/updateDetails/${email}`,
        {
          name: updateName,
          number: updateNumber,
          address: updateAddress,
          city: updateCity,
          state: updateState,
          country: updateCountry,
        },
        { withCredentials: true }
      );
      toast.success(data.message);
      navigateTo("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getDetails = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/userDetails/getDetails",
        { withCredentials: true }
      );
      setName(data.userDetails.name);
      setNumber(data.userDetails.number);
      setAddress(data.userDetails.address);
      setCity(data.userDetails.city);
      setState(data.userDetails.state);
      setCountry(data.userDetails.country);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
  });
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
                        {name}
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      <input
                        type="text"
                        className="text-black rounded-md"
                        value={updateName}
                        onChange={(e) => setUpdatedName(e.target.value)}
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
                        {number}
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      <input
                        type="text"
                        className="text-black rounded-md"
                        value={updateNumber}
                        onChange={(e) => setUpdatedNumber(e.target.value)}
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
                        {address}
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      <input
                        type="text"
                        className="text-black rounded-md"
                        value={updateAddress}
                        onChange={(e) => setUpdatedAddress(e.target.value)}
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
                        {city}
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      <input
                        type="text"
                        className="text-black rounded-md"
                        value={updateCity}
                        onChange={(e) => setUpdatedCity(e.target.value)}
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
                        {state}
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      <input
                        type="text"
                        className="text-black rounded-md"
                        value={updateState}
                        onChange={(e) => setUpdatedState(e.target.value)}
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
                        {country}
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      <input
                        type="text"
                        className="text-black rounded-md"
                        value={updateCountry}
                        onChange={(e) => setUpdatedCountry(e.target.value)}
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
                onClick={updateDetailsHandler}
              >
                Update Details
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UpdateDetails;
