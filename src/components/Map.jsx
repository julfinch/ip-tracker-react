import { MapContainer, TileLayer, Marker } from "react-leaflet";

const Map = ({ data, error }) => {
  return (
    <section className="h-screen w-screen">
      {data &&
      error === undefined &&
      data?.latitude !== undefined &&
      data?.longitude !== undefined ? (
        <MapContainer
          className="map w-screen"
          center={[data?.latitude, data?.longitude]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[data?.latitude, data?.longitude]}></Marker>
        </MapContainer>
      ) : (
        ""
      )}
    </section>
  );
};

export default Map;
