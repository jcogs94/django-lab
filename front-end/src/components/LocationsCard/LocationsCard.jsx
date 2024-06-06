import { useState, useEffect } from 'react'
import * as locationService from '../../services/locationService.js'

const LocationsCard = () => {
    const [locations, setLocations] = useState([])

    // Effect loads index from API on page load
    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const allLocations = await locationService.index();
                if (allLocations.error) {
                    throw new Error(allLocations.error);
                } else {
                    setLocations(allLocations);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchLocations();
    }, []);
    
    return <>

    </>
}

export default LocationsCard
