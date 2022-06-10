import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {

    const [position, setPosition] = React.useState([0, 0]);

    const getMyPosition = () => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            setPosition([latitude, longitude]);
        });
    }

    // update position every millisecond
    React.useEffect(() => {
        const interval = setInterval(() => {
            // update position every millisecond
            console.log('update position');
            getMyPosition();
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>

            {/* show live updated position */}
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
            {position}

            {/* <button onClick={() => getMyPosition()} className='btn btn-outline-info m-5'>Get my position</button> */}
        </>
    );
}

export default Map;