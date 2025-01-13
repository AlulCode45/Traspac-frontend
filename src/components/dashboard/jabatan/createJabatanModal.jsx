import React from 'react';
import {Button, MenuItem, Modal, TextField} from "@mui/material";

function CreateJabatanModal(props) {
    const {open,setOpen,formData,setFormData, onModalSubmit} = props;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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
                        Tambah Jabatan
                    </h2>
                    <form onSubmit={onModalSubmit} className="space-y-4">
                        <TextField
                            label="Jabatan"
                            name="jabatan"
                            value={formData.jabatan}
                            onChange={handleChange}
                            fullWidth
                            required
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

export default CreateJabatanModal;