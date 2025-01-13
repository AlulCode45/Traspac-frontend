import React, {useEffect, useState} from "react";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import {Box} from "@mui/material";
import {useUnitKerjaStore} from "../../../store/unitKerjaStore.js";
import {deleteUnitKerja, getUnitKerja, storeUnitKerja, updateUnitKerja} from "../../../services/unitKerjaService.js";
import {useNavigate} from "react-router-dom";
import {FaEye} from "@react-icons/all-files/fa/FaEye.js";
import {FaEdit} from "@react-icons/all-files/fa/FaEdit.js";
import {FaTrash} from "@react-icons/all-files/fa/FaTrash.js";
import toast from "react-hot-toast";
import {storePegawai} from "../../../services/pegawaiService.js";
import CreateUnitkerjaModal from "../../../components/dashboard/unitkerja/createUnitkerjaModal.jsx";

function Unitkerja() {
    const navigate = useNavigate()
    const unitKerjaState = useUnitKerjaStore(state => state.data)
    const setUnitKerjaState = useUnitKerjaStore(state => state.setUnitKerjaData)
    const [open,setOpen] = useState(false)
    const [selectedId,setSelectedId] = useState()
    const [isUpdate,setIsUpdate] = useState(false)
    const [formData, setFormData] = useState({
        unit_kerja: ''
    });

    const onModalSubmit = async (e) => {
        e.preventDefault();
        if(isUpdate){
            return await updateUnitKerja(selectedId,formData).then(res => {
                if(res?.meta?.status !== 200){
                    throw new Error(res);
                }
                setFormData({
                    'unit_kerja': ''
                })
                setOpen(false);
                toast.success("Berhasil memperbarui Unit Kerja!");
                return setUnitKerjaState([
                    ...unitKerjaState,
                    res.data,
                ]);
            }).catch(err => {
                toast.error("Gagal memperbarui Unit Kerja!");
                console.error(err);
            });
        }
        return await storeUnitKerja(formData).then(res => {
            if(res?.meta?.status !== 201){
                throw new Error(res);
            }
            setFormData({
                'unit_kerja': ''
            })
            setOpen(false);
            toast.success("Berhasil menambahkan Unit Kerja baru!");
            return setUnitKerjaState([
                ...unitKerjaState,
                res.data,
            ]);
        }).catch(err => {
            toast.error("Gagal menambahkan Unit Kerja baru!");
            console.error(err);
        });
    }

    const columns = [
        {field: 'unit_kerja', headerName: 'Unit Kerja',flex:1},
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            sortable: false,
            renderCell: (params) => (
                <div className={'flex gap-2 items-center'}>
                    <button className={'p-2 bg-yellow-500 text-white rounded-md'} onClick={() => {
                        setIsUpdate(true)
                        setSelectedId(params?.row?.id)
                        setFormData({
                            'unit_kerja': params?.row?.unit_kerja
                        })
                        setOpen(true)
                    }}><FaEdit/></button>
                    <button className={'p-2 bg-red-500 text-white rounded-md'} onClick={() => handleDeleteData(params?.row?.id)}><FaTrash/></button>
                </div>
            ),
        },
    ]
    const handleDeleteData = async (id) => {
        return await deleteUnitKerja(id).then(
            res => {
                if(res?.meta?.status !== 200){
                    throw new Error(res);
                }
                toast.success("Berhasil menghapus unit kerja!");
                return setUnitKerjaState(unitKerjaState.filter(unitKerja => unitKerja.id !== id));
            }
        ).catch(err => {
            toast.error("Gagal menghapus unit kerja!");
            console.error(err);
        })
    }
    useEffect(() => {
        const getUnitKerjaData = async () => {
            if (unitKerjaState.length === 0) {
                return await getUnitKerja().then(res => {
                    setUnitKerjaState(res.data)
                    console.log(res.data)
                }).catch(err => {
                    console.log(err)
                })
            }
        }
        getUnitKerjaData()
    },[])

    return (
        <div className="bg-white p-5 rounded-md shadow">
            <div className="flex justify-between items-center mb-5">
                <h3 className={'font-semibold text-xl'}>Kelola Unit Kerja</h3>
                <button className={'bg-blue-500 text-white rounded-md px-3 font-semibold p-2'}
                        onClick={() => setOpen(!open)}>Tambah
                </button>
            </div>
            <Box sx={{width: '100%'}}>
                <DataGrid
                    rows={unitKerjaState}
                    columns={columns}
                    slots={{toolbar: GridToolbar}}
                    slotProps={{
                        toolbar: {
                            showQuickFilter: true,
                        },
                    }}
                    pageSizeOptions={[5, 10, 20, 50]}
                    initialState={{
                        pagination: {
                            paginationModel: {pageSize: 5, page: 0},
                        },
                    }}
                    disableRowSelectionOnClick
                    disableDensitySelector
                    sx={{
                        border: 0,
                    }}
                />

            </Box>

            <CreateUnitkerjaModal open={open} setOpen={setOpen} formData={formData} setFormData={setFormData}
                                onModalSubmit={onModalSubmit}/>
        </div>
    );
}

export default Unitkerja;