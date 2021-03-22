import React, { useState, useEffect } from 'react';
import { getMapToken } from "../../services/auth"
import MapEverything from './MapEverything.js'
export default function MapBox() {
    const [mapToken, setMapToken] = useState(null)

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
                <MapEverything mapToken={mapToken} />
            </div>
        </>
    )
}