import {useState} from 'react';
import {Button, MenuItem, Modal, TextField} from "@mui/material";

function CreatePegawaiModal(props) {
    const {open,setOpen} = props;
    const [formData, setFormData] = useState({
        nip: '',
        nama: '',
        tempat_lahir: '',
        tanggal_lahir: '',
        alamat: '',
        jenis_kelamin: 'Laki-laki',
        golongan: 'IA',
        eselon: '',
        jabatan: '',
        tempat_tugas: '',
        agama: 'Islam',
        unit_kerja: '',
        no_hp: '',
        npwp: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        setOpen(false);
    };
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
                    <form onSubmit={handleSubmit} className="space-y-4">
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
                            <MenuItem value="Laki-laki">Laki-laki</MenuItem>
                            <MenuItem value="Perempuan">Perempuan</MenuItem>
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
                            <MenuItem value="IA">IA</MenuItem>
                            <MenuItem value="IB">IB</MenuItem>
                            <MenuItem value="IC">IC</MenuItem>
                            {/* Tambahkan opsi lainnya */}
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
                            <MenuItem value="Islam">Islam</MenuItem>
                            <MenuItem value="Kristen">Kristen</MenuItem>
                            <MenuItem value="Hindu">Hindu</MenuItem>
                            <MenuItem value="Budha">Budha</MenuItem>
                            {/* Tambahkan opsi lainnya */}
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