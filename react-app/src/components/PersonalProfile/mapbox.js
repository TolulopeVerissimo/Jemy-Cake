import React, { useState, useRef, useCallback, useEffect } from 'react';
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';
import Script from 'react-load-script'


import 'mapbox-gl/dist/mapbox-gl.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import { getMapToken } from "../../services/auth"
import Geocoder from 'react-map-gl-geocoder'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import './style/mapbox.css'
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;


export default function MapBox() {
    const [lat, setLat] = useState(null)
    const [lng, setLng] = useState(null)
    const [directions, setDirections] = useState({ lat, lng })

    const [mark, setMark] = useState([])
    const [mapToken, setMapToken] = useState(null)
    const [popup, setPopup] = useState(false)
    const [errors, setErrors] = useState(null)

    const [center, setCenter] = useState({
        latitude: 39.2904,
        longitude: -76.6122,
        zoom: 8
    })
    const mapRef = useRef();
    const viewChange = useCallback(
        el => setCenter(el), []
    )
    const geoViewChange = useCallback(el => {
        const geo = { transitionDuration: 1000 }
        return viewChange({ ...el, ...geo })
    }, [viewChange]
    )

    const [scriptCreate, setScriptCreate] = useState(true)
    const [scriptError, setScriptError] = useState(true)
    const [scriptLoad, setScriptLoad] = useState(true)

    const urlMap = [
        "https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js",
        "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.0.2/mapbox-gl-directions.js",
        "https://cdn.jsdelivr.net/npm/@mapbox/mapbox-gl-directions@4.1.0/src/index.min.js",
        // "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.0/mapbox-gl-directions.js",
        "https://cdnjs.cloudflare.com/ajax/libs/mapbox-polyline/1.1.1/polyline.js",
        "https://npmcdn.com/@turf/turf/turf.min.js",
        "https://cdn.jsdelivr.net/npm/@turf/turf@5/turf.min.js",
    ]

    useEffect(() => {
        (async () => {
            const token = await getMapToken()
            setMapToken(token.token)
        })()
    }, [])

    if (!mapToken) {
        return null
    }

    return (
        <>
            {urlMap && urlMap.map(el => {
                <Script
                    url={el}
                    onCreate={() => setScriptCreate(false)}
                    onError={() => setScriptError(false)}
                    onLoad={() => setScriptLoad(false)} />
            })}
            <div className="MapContainer">
                <h5 className="MapContainer__title">
                    JEMY{" "}
                    <span className="MapContainer__emoji" role="img" aria-label="lid">😋🍽😋</span>
                </h5>
                <Directions mapToken={mapToken} />


            </div>
        </>
    )

}
function Directions(mapToken) {
    const MapboxDirections = window.MapboxDirections

    mapboxgl.accessToken = mapToken.mapToken;
    // console.log(mapToken.mapToken)

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v10',
        center: [-79.4512, 43.6568],
        zoom: 13
    });
    //Changed to Geocode instead of MapDirections
    //https://stackoverflow.com/questions/57467842/getting-error-this-mapboxgl-marker-is-not-a-constructor-when-using-geocoder
    // var directions = new Geocoder({
    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: "metric",
        profile: "mapbox/driving",
        alternatives: false,
        geometries: "geojson",
        controls: { instructions: false },
        flyTo: false
    });

    map.addControl(directions, "top-right");
    map.scrollZoom.enable();

    return (
        <>

        </>
    )

}
