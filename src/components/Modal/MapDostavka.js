import React, { useState } from "react";

const MapDostavka = () => {
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
