import React, {useEffect, useState} from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {Box} from "@mui/material";
import {FaEdit} from "@react-icons/all-files/fa/FaEdit.js";
import {FaEye} from "@react-icons/all-files/fa/FaEye.js";
import {FaTrash} from "@react-icons/all-files/fa/FaTrash.js";
import CreatePegawaiModal from "../../../components/dashboard/pegawai/createPegawaiModal.jsx";
import {getPegawai} from "../../../services/pegawaiService.js";

const columns = [
    { field: 'nip', headerName: 'NIP', width: 100 },
    { field: 'nama', headerName: 'Nama', width: 150 },{
        field: 'jabatan',
        headerName: 'Jabatan',
        width: 180,
        valueGetter: (params) => params.row?.jabatan?.jabatan || '-', // Akses `jabatan.jabatan`
    },
    { field: 'tempat_tugas', headerName: 'Tempat Tugas', width: 150 },
    {
        field: 'unit_kerja',
        headerName: 'Unit Kerja',
        width: 150,
        valueGetter: (params) => params.row?.unit_kerja?.unit_kerja || '-', // Akses `unit_kerja.unit_kerja`
    },
    { field: 'npwp', headerName: 'NPWP', width: 150 },{
        field: 'actions',
        headerName: 'Actions',
        width: 150,
        sortable: false,
        renderCell: (params) => (
            <div className={'flex gap-2 items-center'}>
                <button className={'p-2 bg-blue-500 text-white rounded-md'}><FaEye/></button>
                <button className={'p-2 bg-yellow-500 text-white rounded-md'}><FaEdit/></button>
                <button className={'p-2 bg-red-500 text-white rounded-md'}><FaTrash/></button>
            </div>
        ),
    },
];


export default function Pegawai() {
    const [open, setOpen] = useState(false);
    const [pegawai, setPegawai] = useState([]);

    useEffect(() => {
        const getPegawaiData = async () => {
            return await getPegawai().then(res => {
                setPegawai(res.data);
                console.log(res.data);
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
                <button className={'bg-blue-500 text-white rounded-md px-3 font-semibold p-2'} onClick={() => setOpen(!open)}>Tambah</button>
            </div>
            <Box sx={{width: '100%'}}>
                <DataGrid
                    rows={pegawai}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                    disableDensitySelector
                    pageSize={5}
                    disableRowSelectionOnClick
                    sx={{ border: 0 }}
                    slots={{ toolbar: GridToolbar }}
                    slotProps={{
                        toolbar: {
                            showQuickFilter: true,
                        },
                    }}
                />
            </Box>
            <CreatePegawaiModal open={open} setOpen={setOpen}/>
        </div>
    );
}
