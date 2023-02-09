import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { DiReact } from 'react-icons/di';
import { Link } from 'react-router-dom';

export default function SideBar() {

    return (
        <div style={{ display: 'flex', height: '100%' }}>
            <Sidebar>
                <DiReact size={'3em'} color={'00bfff'} /> Virgo's
                <hr />
                <Menu>
                    <MenuItem component={<Link to="/admins" />}> DashBoard </MenuItem>
                    <SubMenu label="Settings">
                        <MenuItem component={<Link to="manage-users" />}> Manage Users </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Calendar </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    )
}