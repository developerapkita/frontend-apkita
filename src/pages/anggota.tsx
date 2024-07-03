import React from "react";
import Layout from "../components/Fragments/layouts/Layout";
const Anggota: React.FC = () => {
  return (
    <>
      <div className="w-full h-full grid grid-cols-12 gap-4 py-6">
        <div className="col-span-8">
          <div className="w-full grid grid-cols-12 gap-5">
            <div className="col-span-12">
              <h1 className="text-[28px]">Tabel Anggota</h1>
              <div className="w-full border rounded-lg p-4">
                <table className="w-full ">
                  <thead className="text-[15px] text-[#14213D] ">
                    <th scope="col" className="w-[10%]"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Tagihan</th>
                    <th scope="col">Total Harga</th>
                  </thead>
                  <tbody className="text-[15px]"></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Anggota;
