function Dashboard() {
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
                            192
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
                            24
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
                            15
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;