import {useEffect, useState} from "react";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import {Box} from "@mui/material";
import {useJabatanStore} from "../../../store/jabatanStore.js";
import {
    deleteJabatan, getJabatan,storeJabatan,updateJabatan
} from "../../../services/jabatanService.js";
import {FaEdit} from "@react-icons/all-files/fa/FaEdit.js";
import {FaTrash} from "@react-icons/all-files/fa/FaTrash.js";
import toast from "react-hot-toast";
import CreateJabatanModal from "../../../components/dashboard/jabatan/createJabatanModal.jsx";

function Jabatan() {
    const jabatanState = useJabatanStore(state => state.data)
    const setJabatanState = useJabatanStore(state => state.setJabatanData)
    const [open,setOpen] = useState(false)
    const [selectedId,setSelectedId] = useState()
    const [isUpdate,setIsUpdate] = useState(false)
    const [formData, setFormData] = useState({
        jabatan: ''
    });

    const onModalSubmit = async (e) => {
        e.preventDefault();
        if(isUpdate){
            return await updateJabatan(selectedId,formData).then(res => {
                if(res?.meta?.status !== 200){
                    throw new Error(res);
                }
                setFormData({
                    'jabatan': ''
                })
                setOpen(false);
                toast.success("Berhasil memperbarui Jabatan!");
                return setJabatanState([
                    ...jabatanState,
                    res.data,
                ]);
            }).catch(err => {
                toast.error("Gagal memperbarui Jabatan!");
                console.error(err);
            });
        }
        return await storeJabatan(formData).then(res => {
            if(res?.meta?.status !== 201){
                throw new Error(res);
            }
            setFormData({
                'jabatan': ''
            })
            setOpen(false);
            toast.success("Berhasil menambahkan Jabatan baru!");
            return setJabatanState([
                ...jabatanState,
                res.data,
            ]);
        }).catch(err => {
            toast.error("Gagal menambahkan Jabatan baru!");
            console.error(err);
        });
    }

    const columns = [
        {field: 'jabatan', headerName: 'Jabatan',flex:1},
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
                            'jabatan': params?.row?.jabatan
                        })
                        setOpen(true)
                    }}><FaEdit/></button>
                    <button className={'p-2 bg-red-500 text-white rounded-md'} onClick={() => handleDeleteData(params?.row?.id)}><FaTrash/></button>
                </div>
            ),
        },
    ]
    const handleDeleteData = async (id) => {
        return await deleteJabatan(id).then(
            res => {
                if(res?.meta?.status !== 200){
                    throw new Error(res);
                }
                toast.success("Berhasil menghapus jabatan!");
                return setJabatanState(jabatanState.filter(jabatan => jabatan.id !== id));
            }
        ).catch(err => {
            toast.error("Gagal menghapus jabatan!");
            console.error(err);
        })
    }
    useEffect(() => {
        const getJabatanData = async () => {
            if (jabatanState.length === 0) {
                return await getJabatan().then(res => {
                    setJabatanState(res.data)
                    console.log(res.data)
                }).catch(err => {
                    console.log(err)
                })
            }
        }
        getJabatanData()
    },[])

    return (
        <div className="bg-white p-5 rounded-md shadow">
            <div className="flex justify-between items-center mb-5">
                <h3 className={'font-semibold text-xl'}>Kelola Jabatan</h3>
                <button className={'bg-blue-500 text-white rounded-md px-3 font-semibold p-2'}
                        onClick={() => setOpen(!open)}>Tambah
                </button>
            </div>
            <Box sx={{width: '100%'}}>
                <DataGrid
                    rows={jabatanState}
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

            <CreateJabatanModal open={open} setOpen={setOpen} formData={formData} setFormData={setFormData}
                                onModalSubmit={onModalSubmit}/>
        </div>
    );
}

export default Jabatan;