import React, { useState } from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"

// import { formatRelative } from 'data-fns'

// import usePlacesAutoComplete, { getGeoCode, getLatLng} from "use-places-autocomplete"
// import {ComboBox, ComboBoxInput, ComboBoxPopover, ComboBoxList, ComboBoxOption} from '@reach/combobox'
// import '@reach/combobox/styles.css'

// import mapStyles from './mapStyles'
const libraries = ["places"]
const mapContainerStyle = {
    width: '70rem',
    height: '70rem'
}
// Charlotte NC
const center = {
    lat: 39.2904,
    lng: -76.6122
}

const options = {
    // styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true
}

function Maps() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.googsApi,
        libraries,

    })
    const [mark, setMark] = useState([])
    if (loadError) return "ErrorLoadingMaps"
    if (!isLoaded) return "Loading Maps"
    return (
        <div>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={8}
                options={options}
                center={center}
                onClick={e => [...e,
                {
                    lat: e.latLng.lat(),
                    lng: e.latLng.lng(),
                    time: new Date()
                }
                ]
                }
            >
                {/* {mark.map(el => <Marker key={el.time.toISOString()} position={{ l; a }})} */}
            </GoogleMap>
        </div >
    )
}
export default Maps