import React, { useState } from "react";

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
import { useSelector } from "react-redux";
const containerStyle = {
  width: "100%",
  height: "250px",
};

const center = {
  lat: 39.627,
  lng: 66.975,
};

const AllCurierMap = () => {
  const [infoVisible, setInfoVisible] = useState(false);

  const apiKey = "AIzaSyAoud-_7sLGaEDVV5s8QvtTeGzI9dunLqU";

  const curier = useSelector((state) => state.curier.courier);

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  let lat, lng;

  if (curier) {
    let loc = curier.map_location.split(",");
    lat = +loc[0];
    lng = +loc[1];
  }

  return (
    <div className="map">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={10}
          center={center}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {curier && (
            <>
              <Marker
                onClick={() => setInfoVisible(true)}
                position={{ lat, lng }}
              />
              {infoVisible && (
                <InfoWindow
                  onCloseClick={() => setInfoVisible(false)}
                  position={{ lat, lng }}
                >
                  <div>
                    <p>
                      Курьер: <span>{curier.name}</span>
                    </p>
                    <p>
                      ID заказа: <span>#{curier.id}</span>
                    </p>
                    <p>
                      Маршрут: <span>{curier.addres}</span>
                    </p>
                  </div>
                </InfoWindow>
              )}
            </>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default React.memo(AllCurierMap);
