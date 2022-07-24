import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Map() {

    const {isLoaded} = useLoadScript ({
        googleMapsApiKey: "AIzaSyAEwRZYvRAvUDqjERHWAn3dPNgYDc_f3Mo",
    });

    if(!isLoaded) {return <div className="loading">Loading...</div>}

    return (
        <GoogleMap zoom={15} center={{lat:43.3438, lng: 17.8078}} mapContainerClassName="mapContainer"></GoogleMap>
    )
}
