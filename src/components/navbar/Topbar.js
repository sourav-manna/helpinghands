import "./Topbar.css";
import {FaHeart, FaSearch, FaHome} from 'react-icons/fa';
import {ProSidebar,ProSidebarProvider,Sidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter} from "react-pro-sidebar";

const sidebar = 
<ProSidebarProvider>
      <Sidebar className='sidebar2'> 
      <div className='sidebar3'>
      <div className='sidebar4'>
        <Menu>
          
          <MenuItem icon={<FaHome />}> </MenuItem>
          <MenuItem icon={<FaSearch />}> </MenuItem>
          <MenuItem icon={<FaHeart />}> </MenuItem>
          
        </Menu>
        </div>
        </div>
      </Sidebar>
  </ProSidebarProvider>

function NavScrollExample() {
  return (
    <>
    <div className='mysidebar'> 
       
      {sidebar}
    </div>
    
    </>
  );
}

export default NavScrollExample;