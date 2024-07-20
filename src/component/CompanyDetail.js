import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const CompanyDetail = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [location, setLocation] = useState(center);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY' // Replace with your Google Maps API key
  });

  const onSubmit = data => {
    console.log(data);
    console.log(location);
  };

  const onMapClick = useCallback((event) => {
    setLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-8 lg:p-10">
      <div className="bg-white shadow-2xl rounded-lg p-8 border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Company Details</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="block mb-2 text-sm font-medium text-gray-900">Company Name</label>
              <input
                {...register('companyName', { required: 'Company Name is required' })}
                type="text"
                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.companyName && <p className="mt-2 text-sm text-red-600">{errors.companyName.message}</p>}
            </div>

            <div className="flex flex-col">
              <label className="block mb-2 text-sm font-medium text-gray-900">Company Address</label>
              <input
                {...register('companyAddress', { required: 'Company Address is required' })}
                type="text"
                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.companyAddress && <p className="mt-2 text-sm text-red-600">{errors.companyAddress.message}</p>}
            </div>
          </div>

          <div className="flex flex-col">
            <label className="block mb-2 text-sm font-medium text-gray-900">GST Number</label>
            <input
              {...register('gstNumber', { required: 'GST Number is required' })}
              type="text"
              className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.gstNumber && <p className="mt-2 text-sm text-red-600">{errors.gstNumber.message}</p>}
          </div>

          <div className="flex flex-col">
            <label className="block mb-2 text-sm font-medium text-gray-900">Occupation</label>
            <div className="space-y-2">
              {['farmer', 'biomass manufacturer', 'traderBiogas', 'aggregator', 'end consumer'].map(occupation => (
                <div key={occupation} className="flex items-center">
                  <input
                    {...register('occupation', { required: 'Occupation is required' })}
                    type="radio"
                    value={occupation}
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <label className="ml-2 text-sm text-gray-700">{occupation}</label>
                </div>
              ))}
            </div>
            {errors.occupation && <p className="mt-2 text-sm text-red-600">{errors.occupation.message}</p>}
          </div>

          <div className="flex items-center">
            <input
              {...register('terms', { required: 'You must accept the terms and privacy policy' })}
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label className="ml-2 text-sm text-gray-700">I accept the terms and privacy policy</label>
            {errors.terms && <p className="mt-2 text-sm text-red-600">{errors.terms.message}</p>}
          </div>

          <div className="flex flex-col">
            <label className="block mb-2 text-sm font-medium text-gray-900">Select Location</label>
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={10}
                onClick={onMapClick}
                options={{
                  fullscreenControl: false,
                  mapTypeControl: false,
                  streetViewControl: false,
                }}
              >
                <Marker position={location} />
              </GoogleMap>
            ) : <p>Loading...</p>}
            <div className="mt-4">
              <p className="text-sm text-gray-700">Latitude: <span className="font-medium">{location.lat}</span></p>
              <p className="text-sm text-gray-700">Longitude: <span className="font-medium">{location.lng}</span></p>
            </div>
          </div>

          <div>
            <button  type="submit" className="w-full p-3 bg-yellow-600 text-white  rounded-lg shadow-md focus:outline-none focus:ring-2  focus:ring-opacity-50 transition-colors duration-300">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyDetail;
