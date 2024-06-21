import { Link } from "react-router-dom";

import DashboardIcon from "../../Icons/Dashboard";
import UsersIcon from "../../Icons/Users";
import DotCircleIcon from "../../Icons/DotCircle";
import NotesIcon from "../../Icons/NotesIcon";
import VerifiedIcon from "../../Icons/VerifiedIcon";
import Setting from "../../Icons/Setting";
import NavItem from "../../Elements/NavItem";

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="col-span-2 w-full bg-[#4B70F5] px-5 pt-10 flex flex-col justify-between">
        <div>
          <div className="w-full mb-14">
            <h1 className="text-white text-[30px] text-center">Apps Name</h1>
          </div>
          <div className="mb-7">
            <ul>
              <NavItem icon={DashboardIcon} name="Dashboard" link="/" actived={true} />
              <NavItem icon={UsersIcon} name="Anggota" link="/" actived={false} />
              <NavItem icon={DotCircleIcon} name="Iuran & Tagihan" link="/" actived={false} />
            </ul>
          </div>
          <div>
            <ul>
              <NavItem icon={NotesIcon} name="Laporan" link="/" actived={false} />
              <NavItem icon={VerifiedIcon} name="Akun" link="/" actived={false} />
            </ul>
          </div>
        </div>
        <div className="py-7">
          <ul>
            <NavItem icon={Setting} name="Pengaturan" link="/" actived={false} />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
