import {useEffect, useState} from "react";
import client from "../../utils/client.js";

function Dashboard() {
    const [count, setCount] = useState({
        karyawan: 0,
        unit_kerja: 0,
        jabatan: 0,
    });
    useEffect(() => {
        const getCount = async () => {
            return await client.get('/count-all').then(res => {
                setCount(res.data.data)
            }).catch(err => {
                console.log(err)
            })
        }

        getCount()
    }, [])
    return (
        <>
            <div className="grid grid-cols-3 gap-3">
                <div className="relative p-6 rounded-2xl bg-white shadow">
                    <div className="space-y-2">
                        <div
                            className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500"
                        >
                            <span>Jumlah Karyawan</span>
                        </div>

                        <div className="text-3xl">
                            {count.karyawan}
                        </div>
                    </div>
                </div>

                <div className="relative p-6 rounded-2xl bg-white shadow">
                    <div className="space-y-2">
                        <div
                            className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500"
                        >
                            <span>Jumlah Unit</span>
                        </div>

                        <div className="text-3xl">
                            {count.unit_kerja}
                        </div>
                    </div>
                </div>

                <div className="relative p-6 rounded-2xl bg-white shadow">
                    <div className="space-y-2">
                        <div
                            className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500"
                        >
                            <span>Jumlah Jabatan</span>
                        </div>

                        <div className="text-3xl">
                            {count.jabatan}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;