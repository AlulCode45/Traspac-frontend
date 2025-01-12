import React, {useEffect, useState} from 'react';
import {Box, Button, MenuItem, TextField} from "@mui/material";
import {getPegawaiById} from "../../../services/pegawaiService.js";
import {useParams} from "react-router-dom";
import {useUnitKerjaStore} from "../../../store/unitKerjaStore.js";
import {getUnitKerja} from "../../../services/unitKerjaService.js";
import {getJabatan} from "../../../services/jabatanService.js";
import {useJabatanStore} from "../../../store/jabatanStore.js";

function EditPegawai() {
    const {id} = useParams()
    const [formData, setFormData] = useState({
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
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };
    const golonganOptions = [
        "I/a", "I/b", "I/c", "I/d",
        "II/a", "II/b", "II/c", "II/d",
        "III/a", "III/b", "III/c", "III/d",
        "IV/a", "IV/b", "IV/c", "IV/d", "IV/e"
    ];
    const setUnitKerjaState = useUnitKerjaStore(state => state.setUnitKerjaData)
    const unitKerjaState = useUnitKerjaStore(state => state.data)
    const setJabatanState = useJabatanStore(state => state.setJabatanData)
    const jabatanState = useJabatanStore(state => state.data)

    useEffect(() => {
        const getDetailPegawai = async () => {
            return await getPegawaiById(id).then(res => {
                setFormData(res.data)
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
        }

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

        getUnitKerjaData()
        getDetailPegawai()
        getJabatanData()
    },[id])

    return (
        <div className={'bg-white p-5 rounded-md shadow-md'}>
            <div className="flex items-center justify-between mb-5">
                <div className="card-title">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Edit Pegawai</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Informasi detail mengenai pegawai?.
                    </p>
                </div>
            </div>

            <form onSubmit={() => {
            }} className="space-y-4">
                <TextField
                    label="NIP"
                    name="nip"
                    value={formData.nip}
                    onChange={handleChange}
                    type={'number'}
                    fullWidth
                    required
                />
                <TextField
                    label="Nama"
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 1
                }}>
                    <TextField
                        label="Tempat Lahir"
                        name="tempat_lahir"
                        value={formData.tempat_lahir}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Tanggal Lahir"
                        name="tanggal_lahir"
                        value={formData.tanggal_lahir}
                        onChange={handleChange}
                        type="date"
                        fullWidth
                        InputLabelProps={{shrink: true}}
                        required
                    />
                </Box>
                <TextField
                    label="Alamat"
                    name="alamat"
                    value={formData.alamat}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={3}
                    required
                />
                <TextField
                    label="Jenis Kelamin"
                    name="jenis_kelamin"
                    value={formData.jenis_kelamin}
                    onChange={handleChange}
                    select
                    fullWidth
                    required
                >
                    <MenuItem value="L">Laki-laki</MenuItem>
                    <MenuItem value="P">Perempuan</MenuItem>
                </TextField>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 1
                }}>
                    <TextField
                        label="Golongan"
                        name="golongan"
                        value={formData.golongan}
                        onChange={handleChange}
                        select
                        fullWidth
                        required
                    >
                        {golonganOptions.map((golongan) => (
                            <MenuItem key={golongan} value={golongan}>
                                {golongan}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        label="Eselon"
                        name="eselon"
                        value={formData.eselon}
                        onChange={handleChange}
                        select
                        fullWidth
                        required
                    >
                        <MenuItem value={1}>Eselon 1</MenuItem>
                        <MenuItem value={2}>Eselon 2</MenuItem>
                        <MenuItem value={3}>Eselon 3</MenuItem>
                        <MenuItem value={4}>Eselon 4</MenuItem>
                        <MenuItem value={5}>Eselon 5</MenuItem>
                    </TextField>
                    <TextField
                        label="Jabatan"
                        name="jabatan_id"
                        value={formData.jabatan_id}
                        onChange={handleChange}
                        fullWidth
                        select
                    >
                        {jabatanState.map((jabatan) => (
                            <MenuItem key={jabatan.id} value={jabatan.id}>
                                {jabatan.jabatan}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 1
                }}>
                    <TextField
                        label="Tempat Tugas"
                        name="tempat_tugas"
                        value={formData.tempat_tugas}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Unit Kerja"
                        name="unit_kerja_id"
                        value={formData.unit_kerja_id}
                        onChange={handleChange}
                        fullWidth
                        select
                    >
                        {unitKerjaState.map((unit_kerja) => (
                            <MenuItem key={unit_kerja.id} value={unit_kerja.id}>
                                {unit_kerja.unit_kerja}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>
                <TextField
                    label="Agama"
                    name="agama"
                    value={formData.agama}
                    onChange={handleChange}
                    select
                    fullWidth
                    required
                >
                    <MenuItem value="ISLAM">Islam</MenuItem>
                    <MenuItem value="KRISTEN">Kristen</MenuItem>
                    <MenuItem value="HINDU">Hindu</MenuItem>
                    <MenuItem value="BUDHA">Budha</MenuItem>
                    <MenuItem value="KATOLIK">Katolik</MenuItem>
                    <MenuItem value="KONGHUCU">Konghucu</MenuItem>
                </TextField>
                <TextField
                    label="No HP"
                    name="no_hp"
                    value={formData.no_hp}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    label="NPWP"
                    name="npwp"
                    value={formData.npwp}
                    onChange={handleChange}
                    fullWidth
                />
                <div className="flex justify-end space-x-2">
                    <Button onClick={() => setOpen(false)} variant="outlined" color="secondary">
                        Batal
                    </Button>
                    <Button type="submit" variant="contained" color="primary">
                        Simpan
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default EditPegawai;