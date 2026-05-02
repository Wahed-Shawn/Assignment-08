import { Outlet } from 'react-router';
import NavBar from '../components/NavBar';

const Root = () => {
    return (
        <div>
            <NavBar />
            <div className="min-h-screen max-w-400 mx-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default Root;