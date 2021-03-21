import React, { useState, useRef, useCallback, useEffect } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import { getMapToken } from "../../services/auth"
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import './style/mapbox.css'
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;


export default function MapBox() {
    const [mark, setMark] = useState([])
    const [mapToken, setMapToken] = useState(null)

    const [center, setCenter] = useState({
        latitude: 39.2904,
        longitude: -76.6122,
        zoom: 8
    })
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
            <div className="MapContainer">
                {/* <h5 className="MapContainer__title">
                    JEMY{" "}
                    <span className="MapContainer__emoji" role="img" aria-label="lid">😋🍽😋</span>
                </h5> */}
                <Directions mapToken={mapToken} />
            </div>
        </>
    )

}
function Directions(mapToken) {
    const MapboxDirections = window.MapboxDirections
    const MapboxGeocoder = window.MapboxGeocoder
    const turf = window.turf

    mapboxgl.accessToken = mapToken.mapToken;

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v10',
        //Washington DC Coords
        center: [-77.034084, 38.909671],
        zoom: 13
    });
    var stores = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -77.034084142948,
                        38.909671288923
                    ]
                },
                "properties": {
                    "phoneFormatted": "(202) 234-7336",
                    "phone": "2022347336",
                    "address": "1471 P St NW",
                    "city": "Washington DC",
                    "country": "United States",
                    "crossStreet": "at 15th St NW",
                    "postalCode": "20005",
                    "state": "D.C."
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -77.049766,
                        38.900772
                    ]
                },
                "properties": {
                    "phoneFormatted": "(202) 507-8357",
                    "phone": "2025078357",
                    "address": "2221 I St NW",
                    "city": "Washington DC",
                    "country": "United States",
                    "crossStreet": "at 22nd St NW",
                    "postalCode": "20037",
                    "state": "D.C."
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -77.043929,
                        38.910525
                    ]
                },
                "properties": {
                    "phoneFormatted": "(202) 387-9338",
                    "phone": "2023879338",
                    "address": "1512 Connecticut Ave NW",
                    "city": "Washington DC",
                    "country": "United States",
                    "crossStreet": "at Dupont Circle",
                    "postalCode": "20036",
                    "state": "D.C."
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -77.0672,
                        38.90516896
                    ]
                },
                "properties": {
                    "phoneFormatted": "(202) 337-9338",
                    "phone": "2023379338",
                    "address": "3333 M St NW",
                    "city": "Washington DC",
                    "country": "United States",
                    "crossStreet": "at 34th St NW",
                    "postalCode": "20007",
                    "state": "D.C."
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -77.002583742142,
                        38.887041080933
                    ]
                },
                "properties": {
                    "phoneFormatted": "(202) 547-9338",
                    "phone": "2025479338",
                    "address": "221 Pennsylvania Ave SE",
                    "city": "Washington DC",
                    "country": "United States",
                    "crossStreet": "btwn 2nd & 3rd Sts. SE",
                    "postalCode": "20003",
                    "state": "D.C."
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -76.933492720127,
                        38.99225245786
                    ]
                },
                "properties": {
                    "address": "8204 Baltimore Ave",
                    "city": "College Park",
                    "country": "United States",
                    "postalCode": "20740",
                    "state": "MD"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -77.097083330154,
                        38.980979
                    ]
                },
                "properties": {
                    "phoneFormatted": "(301) 654-7336",
                    "phone": "3016547336",
                    "address": "4831 Bethesda Ave",
                    "cc": "US",
                    "city": "Bethesda",
                    "country": "United States",
                    "postalCode": "20814",
                    "state": "MD"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -77.359425054188,
                        38.958058116661
                    ]
                },
                "properties": {
                    "phoneFormatted": "(571) 203-0082",
                    "phone": "5712030082",
                    "address": "11935 Democracy Dr",
                    "city": "Reston",
                    "country": "United States",
                    "crossStreet": "btw Explorer & Library",
                    "postalCode": "20190",
                    "state": "VA"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -77.10853099823,
                        38.880100922392
                    ]
                },
                "properties": {
                    "phoneFormatted": "(703) 522-2016",
                    "phone": "7035222016",
                    "address": "4075 Wilson Blvd",
                    "city": "Arlington",
                    "country": "United States",
                    "crossStreet": "at N Randolph St.",
                    "postalCode": "22203",
                    "state": "VA"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -75.28784,
                        40.008008
                    ]
                },
                "properties": {
                    "phoneFormatted": "(610) 642-9400",
                    "phone": "6106429400",
                    "address": "68 Coulter Ave",
                    "city": "Ardmore",
                    "country": "United States",
                    "postalCode": "19003",
                    "state": "PA"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -75.20121216774,
                        39.954030175164
                    ]
                },
                "properties": {
                    "phoneFormatted": "(215) 386-1365",
                    "phone": "2153861365",
                    "address": "3925 Walnut St",
                    "city": "Philadelphia",
                    "country": "United States",
                    "postalCode": "19104",
                    "state": "PA"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -77.043959498405,
                        38.903883387232
                    ]
                },
                "properties": {
                    "phoneFormatted": "(202) 331-3355",
                    "phone": "2023313355",
                    "address": "1901 L St. NW",
                    "city": "Washington DC",
                    "country": "United States",
                    "crossStreet": "at 19th St",
                    "postalCode": "20036",
                    "state": "D.C."
                }
            }
        ]
    };

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: "metric",
        profile: "mapbox/driving",
        alternatives: false,
        geometries: "geojson",
        controls: { instructions: false },
        flyTo: false
    });
    map.on('load', function (e) {

        map.addSource('places', {
            'type': 'geojson',
            'data': stores
        });

        var geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
            marker: true,
            bbox: [-77.210763, 38.803367, -76.853675, 39.052643]
        });

        buildLocationList(stores);
        map.addControl(geocoder, 'top-left');
        addMarkers();

        geocoder.on('result', function (ev) {
            var searchResult = ev.result.geometry;

            var options = { units: 'miles' };
            stores.features.forEach(function (store) {
                Object.defineProperty(store.properties, 'distance', {
                    value: turf.distance(searchResult, store.geometry, options),
                    writable: true,
                    enumerable: true,
                    configurable: true
                });
            });
            stores.features.sort(function (a, b) {
                if (a.properties.distance > b.properties.distance) {
                    return 1;
                }
                if (a.properties.distance < b.properties.distance) {
                    return -1;
                }
                return 0; // a must be equal to b
            });
            var listings = document.getElementById('listings');
            while (listings.firstChild) {
                listings.removeChild(listings.firstChild);
            }
            buildLocationList(stores);
            createPopUp(stores.features[0]);
            var activeListing = document.getElementById(
                'listing-' + stores.features[0].properties.id
            );
            activeListing.classList.add('active');

            var bbox = getBbox(stores, 0, searchResult);
            map.fitBounds(bbox, {
                padding: 100
            });
        });



        function getBbox(sortedStores, storeIdentifier, searchResult) {
            var lats = [
                sortedStores.features[storeIdentifier].geometry.coordinates[1],
                searchResult.coordinates[1]
            ];
            var lons = [
                sortedStores.features[storeIdentifier].geometry.coordinates[0],
                searchResult.coordinates[0]
            ];
            var sortedLons = lons.sort(function (a, b) {
                if (a > b) {
                    return 1;
                }
                if (a.distance < b.distance) {
                    return -1;
                }
                return 0;
            });
            var sortedLats = lats.sort(function (a, b) {
                if (a > b) {
                    return 1;
                }
                if (a.distance < b.distance) {
                    return -1;
                }
                return 0;
            });
            return [
                [sortedLons[0], sortedLats[0]],
                [sortedLons[1], sortedLats[1]]
            ];
        }


        function addMarkers() {

            stores.features.forEach(function (marker) {

                var el = document.createElement('div');

                el.id = 'marker-' + marker.properties.id;

                el.className = 'marker';

                new mapboxgl.Marker(el, { offset: [0, -23] })
                    .setLngLat(marker.geometry.coordinates)
                    .addTo(map);


                el.addEventListener('click', function (e) {
                    flyToStore(marker);
                    createPopUp(marker);
                    var activeItem = document.getElementsByClassName('active');
                    e.stopPropagation();
                    if (activeItem[0]) {
                        activeItem[0].classList.remove('active');
                    }
                    var listing = document.getElementById(
                        'listing-' + marker.properties.id
                    );
                    listing.classList.add('active');
                });
            });
        }


        function buildLocationList(data) {
            data.features.forEach(function (store, i) {

                var prop = store.properties;


                var listings = document.getElementById('listings');
                var listing = listings.appendChild(document.createElement('div'));

                listing.id = 'listing-' + prop.id;

                listing.className = 'item';


                var link = listing.appendChild(document.createElement('a'));
                link.href = '#';
                link.className = 'title';
                link.id = 'link-' + prop.id;
                link.innerHTML = prop.address;


                var details = listing.appendChild(document.createElement('div'));
                details.innerHTML = prop.city;
                if (prop.phone) {
                    details.innerHTML += ' &middot; ' + prop.phoneFormatted;
                }
                if (prop.distance) {
                    var roundedDistance = Math.round(prop.distance * 100) / 100;
                    details.innerHTML +=
                        '<p><strong>' + roundedDistance + ' miles away</strong></p>';
                }


                link.addEventListener('click', function (e) {
                    for (var i = 0; i < data.features.length; i++) {
                        if (this.id === 'link-' + data.features[i].properties.id) {
                            var clickedListing = data.features[i];
                            flyToStore(clickedListing);
                            createPopUp(clickedListing);
                        }
                    }
                    var activeItem = document.getElementsByClassName('active');
                    if (activeItem[0]) {
                        activeItem[0].classList.remove('active');
                    }
                    this.parentNode.classList.add('active');
                });
            });
        }

        function flyToStore(currentFeature) {
            map.flyTo({
                center: currentFeature.geometry.coordinates,
                zoom: 15
            });
        }


        function createPopUp(currentFeature) {
            var popUps = document.getElementsByClassName('mapboxgl-popup');
            if (popUps[0]) popUps[0].remove();

            var popup = new mapboxgl.Popup({ closeOnClick: false })
                .setLngLat(currentFeature.geometry.coordinates)
                .setHTML(
                    '<h3>Sweetgreen</h3>' +
                    '<h4>' +
                    currentFeature.properties.address +
                    '</h4>'
                )
                .addTo(map);

            map.addControl(directions, "top-right");
            map.addControl(geocoder, "top-left")
            map.scrollZoom.enable();
            return (
                <>
                </>
            )

        }


    })

    return (<></>)
}