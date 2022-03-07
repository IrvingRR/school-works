import {Outlet} from 'react-router-dom';
import {useState} from 'react';
import Sidebar from './Sidebar/Sidebar';
import HeaderPanel from './HeaderPanel/HeaderPanel';

const Panel = function() {

    const [isActiveSidebar, setIsActiveSidebar] = useState(true);

    const handleActiveSidebar = () => setIsActiveSidebar(!isActiveSidebar);

    return(
        <div className="container">
            <Sidebar isActiveSidebar={isActiveSidebar} handleActiveSidebar={handleActiveSidebar}/>
                <main className="main">
                    <HeaderPanel handleActiveSidebar={handleActiveSidebar}/>
                <div className="content">
                    <Outlet/>
                </div>
            </main>
        </div>
    );
}

export default Panel;