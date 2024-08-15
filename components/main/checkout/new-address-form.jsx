import {
  createShippingAddress,
  getCitiesByState,
  getCountries,
  getStates,
  getStatesByCountry,
} from "@/hooks/auth/address";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "react-query";

const NewAddressForm = ({ addAddress, refetch }) => {
  const [formData, setFormData] = useState({
    address: "",
    country_id: "",
    state_id: "",
    city_id: "",
    postal_code: "",
    phone: "",
    defaultAddress: undefined,
  });

  const { mutate, isLoading } = useMutation(createShippingAddress, {
    onSuccess: (data) => {
      console.log(data);
      if (data?.data?.message) {
        toast.success(data?.data?.message);
        refetch();
        setFormData({
          address: "",
          country_id: "",
          state_id: "",
          city_id: "",
          postal_code: "",
          phone: "",
          defaultAddress: undefined,
        });
      }
    },
    onError: (error) => {
      if (error?.data?.error) {
        console.log(error);
        toast.error(error?.data?.error);
      } else {
        toast.error("Something went wrong");
      }
    },
  });

  const { data: countries } = useQuery("countries", getCountries);

  const { data: states, isLoading: isLoadingStates } = useQuery(
    "states",
    () => getStatesByCountry(formData.country_id),
    {
      enabled: !!formData.country_id,
    }
  );

  const { data: cities, isLoading: isLoadingCities } = useQuery(
    "cities",
    () => getCitiesByState(formData.state_id),
    {
      enabled: !!formData.state_id,
    }
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.address || !formData.phone || !formData.postal_code) {
      toast.error("Please fill all the required fields");
      return;
    }

    if (isLoading) return;

    mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Address
        </label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Country
        </label>
        <select
          name="country_id"
          value={formData.country_id}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Select Country</option>
          {countries?.data?.data?.map((country) => (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      {formData.country_id && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            {isLoadingStates
              ? "Loading states..."
              : states?.data?.data?.length === 0
              ? "No states found"
              : "State"}
          </label>
          <select
            name="state_id"
            value={formData.state_id}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select State</option>
            {states?.data?.data?.map((state) => (
              <option key={state.id} value={state.id}>
                {state.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {formData.state_id && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            {isLoadingCities
              ? "Loading cities..."
              : cities?.data?.data?.length === 0
              ? "No cities found"
              : "City"}
          </label>
          <select
            name="city_id"
            value={formData.city_id}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select City</option>
            {cities?.data?.data?.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Postal Code
        </label>
        <input
          type="text"
          name="postal_code"
          value={formData.postal_code}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          <input
            type="checkbox"
            name="defaultAddress"
            checked={formData.defaultAddress}
            onChange={handleChange}
            className="mr-2"
          />
          Set as Default Address
        </label>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() =>
            setFormData({
              address: "",
              country_id: "",
              state_id: "",
              city_id: "",
              postal_code: "",
              phone: "",
              defaultAddress: false,
            })
          }
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewAddressForm;
