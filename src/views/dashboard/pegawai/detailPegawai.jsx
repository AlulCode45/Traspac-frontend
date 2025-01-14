import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPegawaiById } from "../../../services/pegawaiService.js";
import { STORAGE_URL } from "../../../utils/constant.js";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function DetailPegawai() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pegawai, setPegawai] = useState();

    useEffect(() => {
        const getDetailPegawai = async () => {
            try {
                const res = await getPegawaiById(id);
                setPegawai(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        getDetailPegawai();
    }, [id]);

    return (
        <div className="bg-white shadow-lg rounded-lg border overflow-hidden">
            <div className="px-6 py-4 flex items-center justify-between border-b">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">Profil Pegawai</h3>
                    <p className="text-sm text-gray-600">Informasi detail mengenai pegawai.</p>
                </div>
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    onClick={() => navigate(`/dashboard/pegawai/${id}/edit`)}
                >
                    Edit
                </button>
            </div>
            <div className="p-6 divide-y divide-gray-200">
                <div className="py-4 grid grid-cols-3 gap-4">
                    <dt className="text-sm font-medium text-gray-500">Foto Pegawai</dt>
                    <dd className="col-span-2">
                        {pegawai?.photo_profile && (
                            <Zoom>
                                <img
                                    src={`${STORAGE_URL + pegawai.photo_profile}`}
                                    alt="Foto Profil"
                                    className="h-32 w-24 rounded-md object-cover"
                                />
                            </Zoom>
                        )}
                    </dd>
                </div>
                {[
                    { label: "NIP", value: pegawai?.nip },
                    { label: "Nama", value: pegawai?.nama },
                    { label: "Tempat, Tanggal Lahir", value: `${pegawai?.tempat_lahir || ''}, ${pegawai?.tanggal_lahir || ''}` },
                    { label: "Alamat", value: pegawai?.alamat },
                    { label: "Jenis Kelamin", value: pegawai?.jenis_kelamin },
                    { label: "Golongan", value: pegawai?.golongan },
                    { label: "Eselon", value: pegawai?.eselon },
                    { label: "Jabatan", value: pegawai?.jabatan?.jabatan },
                    { label: "Tempat Tugas", value: pegawai?.tempat_tugas },
                    { label: "Agama", value: pegawai?.agama },
                    { label: "Unit Kerja", value: pegawai?.unit_kerja?.unit_kerja },
                    { label: "No HP", value: pegawai?.no_hp },
                    { label: "NPWP", value: pegawai?.npwp },
                ].map((item, index) => (
                    <div key={index} className="py-4 grid grid-cols-3 gap-4">
                        <dt className="text-sm font-medium text-gray-500">{item.label}</dt>
                        <dd className="text-sm text-gray-900 col-span-2">{item.value || '-'}</dd>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DetailPegawai;
