import Card from "../../../Elements/Card";

const TagihanCard: React.FC = () => {
  return (
    <>
      <Card size="col-span-12">
        <Card.Header classname="w-full flex justify-between items-center">
          <h6>Tagihan</h6>
          <button>Lihat Semua</button>
        </Card.Header>
        <Card.Body classname="py-6 overflow-hidden">
          <div className="w-full border rounded-lg p-4">
            <table className="w-full ">
              <thead className="text-[15px] text-[#14213D] ">
                <th scope="col" className="w-[10%]"></th>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
                <th scope="col">Tagihan</th>
                <th scope="col">Total Harga</th>
              </thead>
              <tbody className="text-[15px]">
                <tr>
                  <td className="py-3">
                    <div className="w-[70%] bg-[#D9D9D9] rounded-full h-[6vh]"></div>
                  </td>
                  <td className="py-3">Asep Suryana</td>
                  <td className="text-center py-3">
                    <span className="bg-[#FFF0BE] p-2 rounded-md">Belum Lunas</span>
                  </td>
                  <td className="text-right py-3">Air</td>
                  <td className="text-right py-3">Rp. 80,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default TagihanCard;
