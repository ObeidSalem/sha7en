import React, { useState } from 'react'
import { Map, GoogleApiWrapper, GoogleMapReact, } from 'google-maps-react';
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"
import { InfoWindow } from 'react-google-maps';


const MapContainer = (props) => {

    const [markerPosition, setMarkerPosition] = useState({ lat: props.latitude, lng: props.longitude, })
    // let markerPosition= {lat: this.props.latitude, lng: this.props.longitude,}

    const mapContainerStyle = {
        height: '50vh',
        width: '100%'
    }
    return (
        <>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={15}
                center={markerPosition}
                // initialCenter={{ lat: this.props.latitude, lng: this.props.longitude }}
                onClick={(event) => {
                    // this.setState({latitude: this.props.latitude, longitude:this.props.longitude})
                    console.log(event.latLng.lat(), event.latLng.lng())
                    setMarkerPosition({ lat: event.latLng.lat(), lng: event.latLng.lng() })

                }}
            >
                <MarkerF position={markerPosition} />

            </GoogleMap>

            
        </>
    );
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(MapContainer);