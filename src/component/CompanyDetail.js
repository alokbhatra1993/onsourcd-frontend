import React, { useState, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { GoogleMap, useJsApiLoader, Marker, LoadScript } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import { fetchAddress } from '../services/googleApi';
import { getCompanyDetails, saveCompanyDetails } from '../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const CompanyDetail = () => {
  const [markerPosition, setMarkerPosition] = useState({ lat: 0, lng: 0 });
  const [map, setMap] = useState(null);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [location, setLocation] = useState(center);
  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: 'AIzaSyCL_QSk4NjKCD376dCE3LM93zIkn234Yrs' // Replace with your Google Maps API key
  // });

  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state);

  useEffect(() => {
    handleUseCurrentLocation();
    fetchCompany();
  }, []);

  const handleUseCurrentLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setMarkerPosition({ lat: latitude, lng: longitude });
          const locationAddress =
            (await fetchAddress(latitude, longitude)) || "";
          const { formatted_address } = locationAddress;
          setValue("latitude", latitude);
          setValue("longitude", longitude);
          setValue("userId", user?._id);
          setValue("googleAddress", formatted_address);
        },
        (error) => {
          console.log({ error });
        }
      );
    }
  };

  const onLoad = (map) => {
    setMap(map);
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await saveCompanyDetails(data, user?.token);
      if (response?.ok) {
        toast.success("Details Updated");
        fetchCompany();
      } else {
        toast.error("Something went wrong");
      }
      setLoading(false);
    } catch (error) {
      toast.error("Something went wrong");
      setLoading(false);
    }
  };

  const fetchCompany = async () => {
    const response = await getCompanyDetails(user?.token);
    if (response?.ok) {
      const data = await response.json();
      const company = data?.company;
      setValue("latitude", company?.latitude);
      setValue("longitude", company?.longitude);
      setValue("googleAddress", company?.googleAddress);
      setValue("companyAddress", company?.companyAddresss);
      setValue("companyName", company?.companyName);
      setValue("gstNumber", company?.gst);
      setValue("occupation", company?.Occupation);
      setValue("terms", true);
    }
  };

  return (
    <div className="container mx-auto p-4 lg:p-8">
      <ToastContainer />
      <div className="bg-white shadow-xl rounded-lg p-6 lg:p-8">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900">Company Details</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="companyName" className="block mb-2 text-sm font-medium text-gray-900">Company Name</label>
              <input
                id="companyName"
                {...register('companyName', { required: 'Company Name is required' })}
                type="text"
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              />
              {errors.companyName && <p className="mt-2 text-sm text-red-600">{errors.companyName.message}</p>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="companyAddress" className="block mb-2 text-sm font-medium text-gray-900">Company Address</label>
              <input
                id="companyAddress"
                {...register('companyAddress', { required: 'Company Address is required' })}
                type="text"
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              />
              {errors.companyAddress && <p className="mt-2 text-sm text-red-600">{errors.companyAddress.message}</p>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="gstNumber" className="block mb-2 text-sm font-medium text-gray-900">GST Number</label>
              <input
                id="gstNumber"
                {...register('gstNumber')}
                type="text"
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              />
              {errors.gstNumber && <p className="mt-2 text-sm text-red-600">{errors.gstNumber.message}</p>}
            </div>

            <div className="flex flex-col">
              <label className="block mb-2 text-sm font-medium text-gray-900">Occupation</label>
              <div className="space-y-2">
                {['farmer', 'biomass manufacturer', 'traderBiogas', 'aggregator', 'end consumer'].map(occupation => (
                  <div key={occupation} className="flex items-center">
                    <input
                      id={`occupation-${occupation}`}
                      {...register('occupation', { required: 'Occupation is required' })}
                      type="radio"
                      value={occupation}
                      className="h-4 w-4 text-yellow-600 border-gray-300 focus:ring-yellow-500"
                    />
                    <label htmlFor={`occupation-${occupation}`} className="ml-2 text-sm text-gray-700">{occupation}</label>
                  </div>
                ))}
              </div>
              {errors.occupation && <p className="mt-2 text-sm text-red-600">{errors.occupation.message}</p>}
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                {...register('terms', { required: 'You must accept the terms and privacy policy' })}
                type="checkbox"
                className="h-4 w-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-700">I accept the terms and privacy policy</label>
              {errors.terms && <p className="mt-2 text-sm text-red-600">{errors.terms.message}</p>}
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-yellow-600 text-white rounded-lg shadow-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors duration-300"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>

          <div className="flex flex-col space-y-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">Select Location</label>
            {isLoaded ? (
              <div className="flex-grow h-80 lg:h-96">
                <LoadScript googleMapsApiKey="AIzaSyCL_QSk4NjKCD376dCE3LM93zIkn234Yrs">
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={markerPosition}
                    zoom={10}
                    onLoad={onLoad}
                  >
                    <Marker
                      position={markerPosition}
                      draggable
                    />
                  </GoogleMap>
                </LoadScript>
              </div>
            ) : <p>Loading...</p>}
            <div>
              {/* Optionally show latitude and longitude */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
