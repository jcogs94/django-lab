// const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}` + '/companies'
const BASE_URL = 'http://localhost:8000/api' + '/companies'

// Returns all companies
const index = async () => {
    try {
        const res = await fetch(BASE_URL)
        const data = await res.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

// "Show" data for specific location
const show = async (locationId) => {
    // Defines proper URL for the request
    const REQ_URL = BASE_URL + '/' + locationId

    try {
        const res = await fetch(REQ_URL)
        const data = await res.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

// Creates new location
const create = async (data) => {
    try {
        await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
    } catch (err) {
        console.log(err)
    }
}

// Updates specific location's data
const update = async (locationId, data) => {
    // Defines proper URL for the request
    const REQ_URL = BASE_URL + '/' + locationId

    try {
        await fetch(REQ_URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
    } catch (err) {
        console.log(err)
    }
}

// Deletes specific location
const deleteLocation = async (locationId) => {
    // Defines proper URL for the request
    const REQ_URL = BASE_URL + '/' + locationId

    try {
        await fetch(REQ_URL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
    } catch (err) {
        console.log(err)
    }
}


export {
    index, show, create,
    deleteLocation, update
}
