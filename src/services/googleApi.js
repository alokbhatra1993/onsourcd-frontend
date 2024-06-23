export const fetchAddress = async (latitude, longitude) => {
  const API_KEY = "AIzaSyCL_QSk4NjKCD376dCE3LM93zIkn234Yrs";

  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.status === 'OK' && data.results && data.results.length > 0) {
      return {
        address_components: data.results[0].address_components,
        formatted_address: data.results[0].formatted_address
      };
    } else {
      console.error('No address found for the provided latitude and longitude.');
      return null;
    }
  } catch (error) {
    console.error('Error fetching address:', error);
    return null;
  }
};
