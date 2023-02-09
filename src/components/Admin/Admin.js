import SideBar from "./SideBar";
import './Admin.scss';
import { ProSidebarProvider } from 'react-pro-sidebar';

const Admin = (props) => {
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <ProSidebarProvider>
                    <SideBar />
                </ProSidebarProvider>
            </div>
            <div className="admin-content">
                Steins;Gate
            </div>
        </div>
    )
}

export default Admin;