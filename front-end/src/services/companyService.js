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

// "Show" data for specific company
const show = async (companyId) => {
    // Defines proper URL for the request
    const REQ_URL = BASE_URL + '/' + companyId

    try {
        const res = await fetch(REQ_URL)
        const data = await res.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

// Creates new company
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

// Updates specific company's data
const update = async (companyId, data) => {
    // Defines proper URL for the request
    const REQ_URL = BASE_URL + '/' + companyId

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

// Deletes specific company
const deleteCompany = async (companyId) => {
    // Defines proper URL for the request
    const REQ_URL = BASE_URL + '/' + companyId

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
    deleteCompany, update
}
