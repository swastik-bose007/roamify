// ------------------------------------------------------
// Dependencies
// ------------------------------------------------------
import React, { useState, useCallback } from "react";
import ReactMapGL, {
  ScaleControl,
  NavigationControl,
  Marker,
} from "react-map-gl";
import { AddressAutofill } from "@mapbox/search-js-react";
import SearchBarComponent from "./searchBarComponent";

function MapComponent() {
  const viewPort = {
    latitude: 22.5726,
    longitude: 88.3639,
    zoom: 10,
    minZoom: 0,
    maxZoom: 20,
  };
  const [value, setValue] = useState("");
  return (
    <>
      <SearchBarComponent setValue={setValue} value={value} />
      <ReactMapGL
        initialViewState={{
          longitude: viewPort.longitude,
          latitude: viewPort.latitude,
          zoom: viewPort.zoom,
          pitch: 30,
        }}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxAccessToken="pk.eyJ1Ijoic3dhc3RpazAwNyIsImEiOiJjbGpmZGR4OWYwMG1zM25wY3QxOThubmNlIn0.S7ED5i7o3wUKVxx20zuBAQ"
      ></ReactMapGL>
    </>
  );
}

export default MapComponent;
