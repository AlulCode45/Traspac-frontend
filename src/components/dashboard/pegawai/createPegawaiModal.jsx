import React, {useEffect, useState} from 'react';
import {Button, MenuItem, Modal, styled, TextField} from "@mui/material";
import {useUnitKerjaStore} from "../../../store/unitKerjaStore.js";
import {getUnitKerja} from "../../../services/unitKerjaService.js";
import {useJabatanStore} from "../../../store/jabatanStore.js";
import {getJabatan} from "../../../services/jabatanService.js";
import {FaCloud} from "@react-icons/all-files/fa/FaCloud.js";

function CreatePegawaiModal(props) {
    const {open,setOpen,formData,setFormData, onModalSubmit} = props;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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
    const [profile, setProfile] = useState('')

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
        getJabatanData()
    }, []);

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-form-title"
            aria-describedby="modal-form-description"
        >
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                <div className="bg-white w-full max-w-lg max-h-screen overflow-auto p-6 rounded-lg shadow-lg">
                    <h2 className="text-lg font-semibold mb-4" id="modal-form-title">
                        Tambah Data Pegawai
                    </h2>
                    <form onSubmit={onModalSubmit} className="space-y-4">
                        <img
                            src={`${profile}`}
                            alt="Foto Profil"
                            className="rounded-md h-32 w-24 block"
                        />
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<FaCloud/>}
                        >
                            Upload Foto
                            <VisuallyHiddenInput
                                type="file"
                                name={'photo_profile'}
                                onChange={e => {
                                    setFormData({...formData, photo_profile: e.target.files[0]});
                                    setProfile(URL.createObjectURL(e.target.files[0]))
                                }}
                            />
                        </Button>
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
                        <TextField
                            label="Tempat Tugas"
                            name="tempat_tugas"
                            value={formData.tempat_tugas}
                            onChange={handleChange}
                            fullWidth
                        />
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
            </div>
        </Modal>
    );
}

export default CreatePegawaiModal;