import SideBar from "./SideBar";
import './Admin.scss';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Outlet } from "react-router-dom";

const Admin = (props) => {

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <ProSidebarProvider>
                    <SideBar />
                </ProSidebarProvider>
            </div>
            <div className="admin-content">
                <div className="admin-header">
                    Header
                </div>
                <div className="admin-main">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Admin;