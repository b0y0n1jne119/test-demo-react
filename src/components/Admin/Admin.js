import SideBar from "./SideBar";
import './Admin.scss';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}

export default Admin;