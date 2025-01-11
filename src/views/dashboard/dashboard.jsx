function Dashboard(props) {
    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                <div
                    className="bg-white p-5 rounded-md flex justify-between border-s-4 border-blue-300 items-center shadow-md">
                    <div className="card-content">
                        <h2 className='text-xl'>Jumlah Pegawai</h2>
                    </div>
                    <div className="card-count flex flex-col items-center">
                        <b className='text-4xl'>20</b>
                        <small>Orang</small>
                    </div>
                </div>
                <div
                    className="bg-white p-5 rounded-md flex justify-between border-s-4 border-red-300 items-center shadow-md">
                    <div className="card-content">
                        <h2 className='text-xl'>Jumlah Unit Kerja</h2>
                    </div>
                    <div className="card-count flex flex-col items-center">
                        <b className='text-4xl'>20</b>
                        <small>Unit</small>
                    </div>
                </div>
                <div
                    className="bg-white p-5 rounded-md flex justify-between border-s-4 border-green-300 items-center shadow-md">
                    <div className="card-content">
                        <h2 className='text-xl'>Jumlah Data Jabatan</h2>
                    </div>
                    <div className="card-count flex flex-col items-center">
                        <b className='text-4xl'>20</b>
                        <small>Jabatan</small>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;