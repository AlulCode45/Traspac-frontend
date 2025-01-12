import client from "../utils/client.js";

const getUnitKerja = async () => {
    return await client.get("/unit-kerja")
        .then(res => res.data)
        .catch(err => {
            console.error(err)
            return err;
        })
}

const getUnitKerjaById = async (id) => {
    return await client.get(`/unit-kerja/${id}`)
        .then(res => res.data)
        .catch(err => {
            console.error(err)
            return err;
        })
}

const storeUnitKerja = async (data) => {
    return await client.post("/unit-kerja", data)
        .then(res => res.data)
        .catch(err => {
            console.error(err)
            return err;
        })
}

const updateUnitKerja = async (id, data) => {
    return await client.put(`/unit-kerja/${id}`,data)
        .then(res => res.data)
        .catch(err => {
            console.error(err)
            return err;
        })
}

const deleteUnitKerja = async (id) => {
    return await client.delete(`/unit-kerja/${id}`)
        .then(res => res.data)
        .catch(err => {
            console.error(err)
            return err;
        })
}

export {
    getUnitKerja,
    getUnitKerjaById,
    storeUnitKerja,
    updateUnitKerja,
    deleteUnitKerja
}