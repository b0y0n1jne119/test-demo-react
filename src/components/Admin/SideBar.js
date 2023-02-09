import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
export default function SideBar() {

    const { collapseSidebar } = useProSidebar();

    return (
        <div style={{ display: 'flex', height: '100%' }}>
            <Sidebar>
                Minh Duc
                <hr />
                <Menu>
                    <SubMenu label="Charts">
                        <MenuItem> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Calendar </MenuItem>
                </Menu>
            </Sidebar>
            <main>
                <button onClick={() => collapseSidebar()}>Collapse</button>
            </main>
        </div>
    )
}