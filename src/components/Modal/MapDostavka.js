import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoBox,
  Scrtip,
  InfoWindow,
  Data,
} from "@react-google-maps/api";
const containerStyle = {
  width: "100%",
  height: "250px",
};

const MapDostavka = () => {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: 39.627,
    lng: 66.975,
  });
  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };
  const [map, setMap] = React.useState(null);

  //   const onLoad = React.useCallback(function callback(map) {
  //     setMap(map);
  //   }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  console.log({ map });

  return (
    <div>
      <PlacesAutocomplete
        bounds={coordinates}
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p>

            <input
              {...getInputProps({ placeholder: "Ведите адрес клиента" })}
            />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={13}
        center={coordinates}
        // onLoad={onLoad}
        onUnmount={onUnmount}
        ref={setMap}
      >
        {coordinates && (
          <Marker position={{ lat: coordinates.lat, lng: coordinates.lng }} />
        )}
      </GoogleMap>
    </div>
  );
};

export default MapDostavka;
