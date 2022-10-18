import React from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';


class MapContainer extends React.Component {

    render() {
        return ( 
            <Map 
                google={this.props.google}
                zoom={15}
                style={{ height: '55vh', width: '85%' }}
                    initialCenter = {{ lat: this.props.latitude, lng: this.props.longitude }}
                onClick={(e) => {
                    // this.setState({latitude: this.props.latitude, longitude:this.props.longitude})
                    console.log(e.latLon)
                }}
                >
                    <Marker position={{ lat: this.props.latitude, lng: this.props.longitude }} />
            </Map>
        );
    }
}
 
export default GoogleApiWrapper({
    apiKey:  process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(MapContainer);