import {useState} from 'react';
import {Button, MenuItem, Modal, TextField} from "@mui/material";

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
                        <TextField
                            label="NIP"
                            name="nip"
                            value={formData.nip}
                            onChange={handleChange}
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
                            type="number"
                            fullWidth
                        />
                        <TextField
                            label="Jabatan"
                            name="jabatan"
                            value={formData.jabatan}
                            onChange={handleChange}
                            fullWidth
                        />
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
                            name="unit_kerja"
                            value={formData.unit_kerja}
                            onChange={handleChange}
                            fullWidth
                        />
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