import React from "react";

import {
  GoogleMap,
  LoadScript,
  Marker,
  useJsApiLoader,
  InfoBox,
  Scrtip,
  InfoWindow,
  Data,
} from "@react-google-maps/api";
const containerStyle = {
  width: "100%",
  height: "450px",
};

const center = {
  lat: 39.627,
  lng: 66.975,
};
const apiKey = "AIzaSyBwzP3dsqHy01cJn725QbqQ0C6iPiQh0-0";

const MapModal = () => {
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div className="map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={10}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
      ></GoogleMap>
    </div>
  );
};

export default React.memo(MapModal);
