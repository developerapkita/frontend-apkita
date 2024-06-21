import React from "react";

interface NavItemProps {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  name: string;
  link: string;
  actived: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon: IconComponent, name, link, actived }) => {
  return (
    <>
      <li className="mb-3">
        <a href={link} className={`${actived ? "bg-[#1463FF]" : ""} text-white rounded-lg p-4 flex items-center gap-2`}>
          <IconComponent color="white" />
          <span>{name}</span>
        </a>
      </li>
    </>
  );
};
export default NavItem;
