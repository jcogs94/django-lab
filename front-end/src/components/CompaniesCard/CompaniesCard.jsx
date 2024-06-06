import { useState, useEffect } from 'react'
import * as companyService from '../../services/companyService.js'

const CompaniesCard = () => {
    const [companies, setCompanies] = useState([])

    // Effect loads index from API on page load
    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const allCompanies = await companyService.index();
                if (allCompanies.error) {
                    throw new Error(allCompanies.error);
                } else {
                    setCompanies(allCompanies);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchCompanies();
    }, []);
    
    return <>

    </>
}

export default CompaniesCard
