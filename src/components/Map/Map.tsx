import { FC, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { LeafletEvent } from "leaflet";
import data from "./geo.json";
import { countryStore } from "../../stores/CountryStore";
import { gameStore } from "../../stores/GameStore";

const geoData = JSON.stringify(data);
const borderWeight = 0.3;
const drawOnCanvas = true;
const noWrap = false;

const Map: FC = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleClick = (event: LeafletEvent) => {
    const countryName = event.target.feature.properties.name;
    countryStore.setSelectedCountry(countryName);
    setSelectedCountry(() => countryName);

    //TODO: change later
    gameStore.isPlaying
      ? console.log("change later")
      : gameStore.setIsPlaying();
  };

  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
      zoomControl={false}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      touchZoom={false}
      dragging={false}
      preferCanvas={drawOnCanvas}
      style={{ height: "80vh", width: "100%" }}
    >
      <GeoJSON
        onEachFeature={(_feature, layer) => {
          layer.on({ click: handleClick });
        }}
        pathOptions={{
          weight: borderWeight,
          color: "black",
        }}
        style={(feature) =>
          feature?.properties.name === selectedCountry
            ? { fillColor: "blue", fillOpacity: 0.2 }
            : { fillColor: "black", fillOpacity: 0 }
        }
        data={JSON.parse(geoData)}
      />
      <TileLayer
        noWrap={noWrap}
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />
    </MapContainer>
  );
};

export default Map;
