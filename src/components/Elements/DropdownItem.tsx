import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

interface MenuItemProps {
  id: number;
  label: string;
}
interface MenuProps {
  open: boolean;
  handleClose: () => void;
  anchorEl: null | HTMLElement;
  menuItems: MenuItemProps[];
}
const DropdownMenu: React.FC<MenuProps> = ({ open, handleClose, anchorEl, menuItems }) => {
  return (
    <>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}>
        {menuItems.map((menuItem) => {
          return (
            <MenuItem key={menuItem.id} onClick={handleClose}>
              {menuItem.label}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default DropdownMenu;
