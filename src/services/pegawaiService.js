import client from "../utils/client.js";

const getPegawai = async () => {
    try{
        const response = await client.get("/karyawan");
        return response.data;
    } catch (error) {
        console.error(error);
        return error;
    }
}

const getPegawaiById = async (id) => {
    try{
        const response = await client.get(`/karyawan/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return error;
    }
}

const storePegawai = async (data) => {
    try{
        const response = await client.post("/karyawan", data);
        return response.data;
    } catch (error) {
        console.error(error);
        return error;
    }
}

const updatePegawai = async (id,data) => {
    try{
        const response = await client.put(`/karyawan/${id}`, data);
        return response.data;
    } catch (error) {
        console.error(error);
        return error;
    }
}

const deletePegawai = async (id) => {
    try{
        const response = await client.delete(`/karyawan/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return error;
    }
}

export {
    getPegawai,
    getPegawaiById,
    storePegawai,
    updatePegawai,
    deletePegawai
}