import client from "../utils/client.js";

const getJabatan = async () => {
    return await client.get("/jabatan")
        .then(res => res.data)
        .catch(err => {
            console.error(err)
            return err;
        })
}

const getJabatanById = async (id) => {
    return await client.get(`/jabatan/${id}`)
        .then(res => res.data)
        .catch(err => {
            console.error(err)
            return err;
        })
}

const storeJabatan = async (data) => {
    return await client.post("/jabatan", data)
        .then(res => res.data)
        .catch(err => {
            console.error(err)
            return err;
        })
}

const updateJabatan = async (id, data) => {
    return await client.put(`/jabatan/${id}`,data)
        .then(res => res.data)
        .catch(err => {
            console.error(err)
            return err;
        })
}

const deleteJabatan = async (id) => {
    return await client.delete(`/jabatan/${id}`)
        .then(res => res.data)
        .catch(err => {
            console.error(err)
            return err;
        })
}

export {
    getJabatan,
    getJabatanById,
    storeJabatan,
    updateJabatan,
    deleteJabatan
}