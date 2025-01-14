import React, {useEffect, useState} from 'react';
import {DataGrid, GridToolbar} from '@mui/x-data-grid';
import {Box} from "@mui/material";
import {FaEdit} from "@react-icons/all-files/fa/FaEdit.js";
import {FaEye} from "@react-icons/all-files/fa/FaEye.js";
import {FaTrash} from "@react-icons/all-files/fa/FaTrash.js";
import CreatePegawaiModal from "../../../components/dashboard/pegawai/createPegawaiModal.jsx";
import {deletePegawai, getPegawai, storePegawai} from "../../../services/pegawaiService.js";
import {usePegawaiStore} from "../../../store/pegawaiStore.js";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

export default function Pegawai() {
    const [open, setOpen] = useState(false);
    const setPegawaiState = usePegawaiStore(state => state.setPegawaiData)
    const pegawaiData = usePegawaiStore(state => state.data)
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        photo_profile: '',
        nip: '',
        nama: '',
        tempat_lahir: '',
        tanggal_lahir: '',
        alamat: '',
        jenis_kelamin: 'L',
        golongan: 'I/a',
        eselon: '1',
        jabatan_id: '',
        tempat_tugas: '',
        agama: 'ISLAM',
        unit_kerja_id: '',
        no_hp: '',
        npwp: '',
    });

    const columns = [
        {field: 'nip', headerName: 'NIP', width: 100},
        {field: 'nama', headerName: 'Nama', width: 150},
        {
            field: 'jabatan',
            headerName: 'Jabatan',
            width: 180,
            valueGetter: (params) => params?.jabatan || '-',
        },
        {field: 'tempat_tugas', headerName: 'Tempat Tugas', width: 150},
        {
            field: 'unit_kerja',
            headerName: 'Unit Kerja',
            width: 150,
            valueGetter: (params) => params?.unit_kerja || '-',
        },
        {field: 'npwp', headerName: 'NPWP', width: 150}, {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            sortable: false,
            renderCell: (params) => (
                <div className={'flex gap-2 items-center'}>
                    <button className={'p-2 bg-blue-500 text-white rounded-md'} onClick={() => navigate(`/dashboard/pegawai/${params?.row?.id}`)} ><FaEye/></button>
                    <button className={'p-2 bg-yellow-500 text-white rounded-md'} onClick={() => navigate(`/dashboard/pegawai/${params?.row?.id}/edit`)}><FaEdit/></button>
                    <button className={'p-2 bg-red-500 text-white rounded-md'} onClick={() => handleDeleteData(params?.row?.id)}><FaTrash/></button>
                </div>
            ),
        },
    ];

    const onModalSubmit = async (e) => {
        e.preventDefault();
        return await storePegawai(formData).then(res => {
            if(res?.meta?.status !== 201){
                throw new Error(res);
            }
            setFormData({
                nip: '',
                nama: '',
                tempat_lahir: '',
                tanggal_lahir: '',
                alamat: '',
                jenis_kelamin: 'L',
                golongan: 'I/a',
                eselon: '1',
                jabatan_id: '',
                tempat_tugas: '',
                agama: 'ISLAM',
                unit_kerja_id: '',
                no_hp: '',
                npwp: '',
            })
            setOpen(false);
            toast.success("Berhasil menambahkan pegawai baru!");
            return setPegawaiState([
                ...pegawaiData,
                res.data,
            ]);
        }).catch(err => {
            toast.error("Gagal menambahkan pegawai baru!");
            console.error(err);
        });
    }

    const handleDeleteData = async (id) => {
        return await deletePegawai(id).then(res => {
            if(res?.meta?.status !== 200){
                throw new Error(res);
            }
            toast.success("Berhasil menghapus pegawai!");
            return setPegawaiState(pegawaiData.filter(pegawai => pegawai.id !== id));
        }).catch(err => {
            toast.error("Gagal menghapus pegawai!");
            console.error(err);
        })
    }

    useEffect(() => {
        const getPegawaiData = async () => {
            return await getPegawai().then(res => {
                const data = res.data;
                setPegawaiState(data);
            }).catch(err => {
                console.error(err);
            })
        }
        getPegawaiData();
    }, []);

    return (
        <div className="bg-white p-5 rounded-md shadow">
            <div className="flex justify-between items-center mb-5">
                <h3 className={'font-semibold text-xl'}>Kelola Pegawai</h3>
                <button className={'bg-blue-500 text-white rounded-md px-3 font-semibold p-2'}
                        onClick={() => setOpen(!open)}>Tambah
                </button>
            </div>
            <Box sx={{width: '100%'}}>
                <DataGrid
                    rows={pegawaiData}
                    columns={columns}
                    slots={{ toolbar: GridToolbar }}
                    slotProps={{
                        toolbar: {
                            showQuickFilter: true,
                        },
                    }}
                    pageSizeOptions={[5,10,20,50]}
                    initialState={{
                        pagination: {
                            paginationModel: { pageSize: 5, page: 0 },
                        },
                    }}
                    disableRowSelectionOnClick
                    disableDensitySelector
                    sx={{
                        border: 0,
                    }}
                />

            </Box>
            <CreatePegawaiModal open={open} setOpen={setOpen} formData={formData} setFormData={setFormData}
                                onModalSubmit={onModalSubmit}/>
        </div>
    );
}
