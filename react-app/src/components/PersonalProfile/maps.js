import React, { useState, useEffect, useCallback, useRef } from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow, DirectionsRenderer, DirectionsService, DistanceMatrixService } from "@react-google-maps/api"

import { formatRelative } from 'date-fns'

import usePlacesAutoComplete, { getGeocode, getLatLng } from "use-places-autocomplete"
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption, ComboboxOptionText } from "@reach/combobox"
import "@reach/combobox/styles.css"
import mapStyles from './mapStyles'
import './style/map.css'

const libraries = ["places"]
const mapContainerStyle = {
    width: '70rem',
    height: '60rem'
}

// Charlotte NC
const center = {
    lat: 39.2904,
    lng: -76.6122
}

const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true
}

export default function Maps() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.googsApi,
        libraries,

    })
    console.log(process.env.googsApi)
    const onMapClick = useCallback(e => {
        setMark((curr) =>
            [
                ...curr,
                {
                    lat: e.latLng.lat(),
                    lng: e.latLng.lng(),
                    time: new Date()
                },
            ])
    }, []
    )
    const [mark, setMark] = useState([])
    const [select, setSelect] = useState(null)
    const [directions, setDirections] = useState({})

    const mapRef = useRef()
    const onMapLoad = useCallback((el) => {
        mapRef.current = el
    }, [])


    const panTo = useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14)

    }, [])



    if (loadError) return "ErrorLoadingMaps"
    if (!isLoaded) return "Loading Maps"


    return (
        <div className="googleMapContainer">
            <h5 className="googleMapContainer__title">
                JEMY{" "}
                <span className="googleMapContainer__emoji" role="img" aria-label="lid">😋🍽😋</span>
            </h5>


            <Search panTo={panTo} />
            <Locate panTo={panTo} />

            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={8}
                options={options}
                center={center}
                onClick={onMapClick}
                onLoad={onMapLoad}
            >
                {
                    mark.map(el =>
                    (
                        <Marker
                            key={el.time.toISOString()}
                            position={{ lat: el.lat, lng: el.lng }}
                            icon={{
                                url: '/sdcolored.png',
                                scaledSize: new window.google.maps.Size(40, 40),
                                origin: new window.google.maps.Point(0, 0),
                                anchor: new window.google.maps.Point(15, 15)

                            }}
                            onClick={() => {
                                setSelect(el)
                            }}
                        />
                    ))}
                {select ? (
                    <InfoWindow position={{ lat: select.lat, lng: select.lng }}
                        onCloseClick={() => { setSelect(null) }}>
                        <div>
                            <h5>din din!</h5>
                            <p>{formatRelative(select.time, new Date())}</p>
                        </div>
                    </InfoWindow>) : null}

                {/* <DirectionsRenderer directions={directions} /> */}
            </GoogleMap>
        </div >
    )
}

function Locate({ panTo }) {
    return (
        <button className="centerCompass"
            onClick={() => {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        panTo({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        })
                    }, () => null)
            }}>
            <img src={process.env.PUBLIC_URL + '/comp.png'} alt="compass icon" />
        </button >
    )
}

// function passDirections() {
//     useEffect(async () => {
//         const directionsService = new google.maps.DirectionsService()
//         const origin = center
//         const locate = navigator.geolocation.getCurrentPosition(
//             position => {
//                 lat = position.coords.latitude
//                 lng = position.coords.longitude

//             })
//         origin = { lat, lng }
//         const destination = directions
//         const [lat2, lng2] = destination

//         directionsService.route(
//             {
//                 origin: origin,
//                 destination: destination,
//                 travelMode: google.maps.TravelMode.DRIVING,
//                 waypoints: [
//                     { location: new google.maps.LatLng(lat, lng) },
//                     { location: new google.maps.LatLng(lat2, lng2) },
//                 ]
//             },
//             (result, status) => {
//                 if (status === google.maps.DirectionsStatus.OK) {
//                     setDirections(result)
//                 }
//                 console.error(`${result} direction not fetched`)
//             }
//         )

//     }, [directions, origin])
// }

function Search(panTo) {
    const { ready, value, suggestions: { status, data }, setValue, clearSuggestion } = usePlacesAutoComplete({
        requestOptions: {
            location: {
                lat: () => 39.2904,
                lng: () => -76.6122
            },
            radius: 200 * 1000,
        }
    })

    return (
        <div className="googleMapContainer__searchBar">


            <Combobox onSelect={async (address) => {

                setValue(address, false)
                clearSuggestion()

                try {
                    const results = await getGeocode({ address })
                    const { lat, lng } = await getLatLng(results[0])
                    panTo({ lat, lng })
                    //Wanted to pass the lat,lng into coords after a search.
                    // setDirections({ lat, lng })
                }
                catch (error) {
                    console.log("error!")
                }

            }}>
                <ComboboxInput value={value} onChange={e => setValue(e.target.value)} disabled={!ready} placeholder="Enter address" />
                <ComboboxPopover>pip
                    <ComboboxList>
                        {status == "OK" && data.map(({ id, description }) => (
                            <ComboboxOption key={id} value={description} />
                        ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
    )
}


